import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import UnoCss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'


// element plus 依赖引入
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import ElementPlus from "unplugin-element-plus/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            vue(),
            vueJsx(),
            vueDevTools(),
            UnoCss({
                presets: [
                    presetUno()
                ],
                transformers: [
                    transformerDirectives()
                ]
            }),

            ElementPlus({}),

            AutoImport({
                imports: [
                    'vue',
                    'vue-router',
                    'vue-i18n',
                    'pinia'
                ],
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon'
                    })
                ],
                dts: fileURLToPath(
                    new URL('./types/auto-imports.d.ts', import.meta.url),
                ),
                // dirs: ['src/stores', 'src/components/', 'src/hooks', 'src/layout'],
                eslintrc: {
                    // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
                    enabled: false,
                    // 生成文件地址和名称
                    filepath: fileURLToPath(
                        new URL('./.eslintrc-auto-import.json', import.meta.url)
                    ),
                    globalsPropValue: true
                }
            }),

            // 自动注册组件
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        enabledCollections: ['ep'],
                        prefix: false,
                    })
                ],
                dts: fileURLToPath(new URL('./types/components.d.ts', import.meta.url)),
            }),

            Icons({
                autoInstall: true,
                compiler: 'vue3',
            }),
        ],

        build: {
            outDir: 'web-components-vue3', //输出文件名称
            lib: {
                entry: './src/components/index.ts', //指定组件编译入口文件
                name: 'webComponentsVue3',
                fileName: 'index',
            }, //库编译模式配置
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },

        server: {
            host: '0.0.0.0',
            proxy: createProxy(env)
        }
    }
})


/**
 * 创建代理
 * @param env 环境变量
 */
function createProxy(env: Record<string, string>) {
    if (process.env.NODE_ENV === 'production') return {}

    const prefixs = JSON.parse(env.VITE_BASE_API_PREFIXS) as string[]
    const apiUrl = env.VITE_BASE_API_URL
    const proxy = prefixs.reduce((pre: Record<string, string>, cur) => {
        pre[cur] = apiUrl
        return pre
    }, {})

    return proxy
}
