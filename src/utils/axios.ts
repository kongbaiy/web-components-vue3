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

        return defaultResponse ? response : res

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
