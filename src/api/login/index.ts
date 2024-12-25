import { api } from '@/utils'

import type {
    ILogin,
} from './index.interface'

export const login = (params: ILogin) => api.post('/sso/web/user/login', params)

export const getUserInfo = () => api.get('/sso/manage/1.0/CldSysUser/getUserInformation')

export const getDomainName = () => api.get('/system/file/1.0/upload/domainName')

/**
 * 登录
 * */
export const logout = () => api.get('/sso/organ/logout')

/**
 * 机构获取所有服务
 * */
export const getApply = () => api.get('/sso/manage/1.0/CldSysRoute/orgAllRoute')



