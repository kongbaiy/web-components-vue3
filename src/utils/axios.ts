import type { AxiosError } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getBrowserLang } from '@/utils'
import { i18n } from '@/locales'
import type { ComposerTranslation } from 'vue-i18n'
import { getAccessToken } from '@/utils'


let alertInit = false
const api = axios.create({
    headers: {
        'Accept-Language': getBrowserLang(),
    },
})

api.interceptors.request.use(
    (config) => {
        const authInfo = getAccessToken() || {};

        if (Reflect.ownKeys(authInfo).length) {
            config.headers.authorization = authInfo.authorization
            config.headers.sessionId = authInfo.sessionId
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

api.interceptors.response.use(
    (response) => {
        const res = response.data
        const config = response.config as any
        const { defaultResponse } = config.meta ?? {}
        const t = i18n?.global?.t as ComposerTranslation
        const authInfo = getAccessToken()

        if (res.code === 200) {
            // 判断是否返回默认的响应数据
            return defaultResponse ? response : res
        }

        // 处理token失效或者异地登录
        if ([11020, 11021].includes(res.code)) {
            if (!alertInit) {
                alertInit = true
                ElMessageBox.alert(res.msg, t('notice.title[1]'), {
                    confirmButtonText: t('reLogin'),
                    showClose: false,
                    type: 'warning',
                }).then(() => {
                    alertInit = false
                    location.href = authInfo.logoutUrl
                })

            }
            return Promise.reject(res)
        }

        ElMessage.error(`【${res.code}】${res.msg} ` || t('notice.unknownError'))
        return Promise.reject(res)
    },

    (error: AxiosError) => {
        const t = i18n?.global?.t as ComposerTranslation
        if (error.response) {
            const { data } = error.response as any
            data ? ElMessage.error(`【${data?.code}】${data?.msg}`) : ElMessage.error(error.message)
        } else if (error.code === 'ERR_NETWORK') {
            ElMessage.error(t('notice.networkUnavailable'))
        } else {
            ElMessage.error(t('notice.unknownError'))
        }

        return Promise.reject(error)
    },
)

export { api }
