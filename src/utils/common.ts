
import { ACCESS_TOKEN_KEY, PICTURE_SERVICES_URL_KEY } from '@/enums'


function allToString(
    obj: { [key: string]: any },
    splitter?: string,
) {
    let k: string

    for (k in obj) {
        const item = obj[k]
        if (Array.isArray(item)) obj[k] = item.join(splitter)
    }

    return obj
}

/**
 * 对象数组转为字符串
 */
export function objectArrayToString(
    obj: { [key: string]: any },
    keys: string | string[],
    splitter?: string,
) {
    const newObj = { ...obj }

    if (keys === '$all') return allToString(newObj, splitter)

    const k = typeof keys === 'string' ? [keys] : keys

    for (let i = 0; i < k.length; i++) {
        const key = k[i]
        const value = newObj[key]?.join(splitter)

        newObj[key] = value
    }

    return newObj
}



/**
 * 获取用户访问令牌
 * @param platform 平台，默认为 h5
 * @return object
 */
export function getAccessToken() {
    const info = sessionStorage.getItem(ACCESS_TOKEN_KEY)
    return info ? JSON.parse(info) : null
}

/**
 * 设置用户访问令牌
 * @param info 令牌信息
 * @param platform 平台，默认为 h5
 */
export function setAccessToken(info: any) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(info))
}

/**
 * 清除用户访问令牌
 * @param platform 平台，默认为 h5
 */
export function removeAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
}

/**
 * 获取图片服务地址
 * @param platform 平台，默认为 h5
 * @return string
 */
export function getPictureUrl() {
    return sessionStorage.getItem(PICTURE_SERVICES_URL_KEY)
}

/**
 * 设置图片服务地址
 * @param url 图片服务地址
 * @param platform 平台，默认为 h5
 */
export function setPictureUrl(url: string) {
    sessionStorage.setItem(PICTURE_SERVICES_URL_KEY, url)
}

/**
 * 获取图片拼接地址
 * @param path 图片服务返回的图片上下文地址
 * @param platform 平台，默认为 h5
 */
export function getFullPictureUrl(path: string = '') {
    const host = getPictureUrl()
    return `${host}/${path}`
}

/**
 * 获取浏览器语言
 */
export function getBrowserLang() {
    // 浏览器有4种中文类型，需要做个映射
    const langMap: { [key: string]: string } = {
        'zh': 'zh-hans',
        'zh-CN': 'zh-hans',
        'zh-TW': 'zh-hant',
        'zh-HK': 'zh-hant',
    }

    return langMap[navigator.language] || 'en'
}

/**
 * 获取登录地址
 */
export function getLoginPath() {
    return `${import.meta.env.VITE_BASE_API_URL}/login`
}

/**
 * 防抖
 * */
export function debounce(fn: <T>(value: T) => void, delay: number) {
    let time: any = null

    return (value: string) => {
      if (time !== null) clearTimeout(time)

      time = setTimeout(() => {
        fn?.(value)
      }, delay)
    }
  }
