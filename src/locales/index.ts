import type { App } from 'vue'
import { createI18n } from 'vue-i18n';

function getBrowserLang() {
    const langMap: any = {
        'zh': 'zh-hans',
        'zh-CN': 'zh-hans',
        'zh-TW': 'zh-hant',
        'zh-HK': 'zh-hant',
    }

    return langMap[navigator.language] || 'en'
}


export let i18n: ReturnType<typeof createI18n>

export async function getLocale() {
    const fileName = getBrowserLang();
    const locales = await import(`./lang/${fileName}.ts`)

    return locales.default
}

export async function setupI18n(app: App) {
    const locale = getBrowserLang()
    const message = await getLocale()

    i18n = createI18n({
        locale,
        legacy: false,
        fallbackLocale: 'zh-hans',
        messages: {
            [locale]: {
                ...message
            },
        }
    })

    app.use(i18n)
}

export const t = (key: string) => key
