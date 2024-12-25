import { api } from '@/utils'
import type { AddOrUpdateParams, FindListParams, FindOrderByPk, GenerateAccountParams, OrgBlocAdminParams, OrgHospitalParams, OrgOrderParams, IDisableStatus } from './index.interface'



export const getOrgHospital = (params: OrgHospitalParams) => api.post('/cloud/organ/1.0/organizationHospital/pageList', params)
export const getOrgOrder = (params: OrgOrderParams) => api.post('/cloud/organ/1.0/orgOrganizationOrder/pageList', params)
export const getFindList = () => api.get(`/cloud/manage/1.0/package/findList`)
export const addOrUpdate = (params: AddOrUpdateParams) => api.post(`/cloud/organ/1.0/orgOrganizationOrder/addOrUpdate`, params)
export const OHFindList = (params: FindListParams) => api.post(`/cloud/organ/1.0/organizationHospital/findList`, params)
export const findOrderByPk = (params: FindOrderByPk) => api.get(`/cloud/organ/1.0/orgOrganizationOrder/findOrderByPk`, { params })
export const orgBlocAdmin = (params: FindOrderByPk) => api.post(`/cloud/organ/1.0/orgBlocAdmin/pageList`, params)
export const verificationIdenticalPhone = (params: FindOrderByPk) => api.post(`/cloud/manage/1.0/CldSysUser/verificationIdenticalPhone`, params)
export const generateAccount = (params: GenerateAccountParams) => api.get(`/cloud/manage/1.0/CldSysUser/generateAccount`, { params })
export const addOrgBlocAdmin = (params: OrgBlocAdminParams) => api.post(`/cloud/organ/1.0/orgBlocAdmin/add`, params)
export const getByPk = (params: FindOrderByPk) => api.get(`/cloud/organ/1.0/orgBlocAdmin/getByPk`, { params })

export const addOrgHospital = (params: any) => api.post(`/cloud/organ/1.0/organizationHospital/add`, params)
export const loadHospitalDetail = (params: FindOrderByPk) => api.get(`/cloud/organ/1.0/organizationHospital/loadHospitalDetail`, { params })

/**
 * 机构账户管理-停用启用
 * */
export const disableStatus = (params: IDisableStatus) => api.post(`/cloud/organ/1.0/orgBlocAdmin/disableStatus`, params)
