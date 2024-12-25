import { api } from '@/utils'

import type { EMListQuery, AllListByType, OrgLevelByType } from './index.interface'
import type { FindOrderByPk } from '../organization-manage/index.interface'

/**
 * 资费管理-资费列表
 */
export const getEMList = (params: EMListQuery) =>
  api.post('/cloud/organ/1.0/enterpriseBloc/findBlocPage', params)
//获取企业类型
export const getAllListByType = (params: AllListByType) =>
  api.get('/system/manage/1.0/dictsys/allListByType', { params })
//获取上级组织
export const getAllOrgUpListByType = (params: AllListByType) =>
  api.get('/system/manage/1.0/dictnhc/allListByType', { params })
//获取企业经济类型类别
export const getEnconomyType = (params: AllListByType) =>
  api.get('/system/manage/1.0/dictdata/allListByType', { params })
//获取机构等级
export const getOrgLevelByParentCode = (params: OrgLevelByType) =>
  api.get('/system/manage/1.0/dictdata/listByParentCode', { params })
//获取省
export const getProvinceList = (provincial: string = 'provincial') =>
  api.get(`/system/manage/1.0/dictdata/listByType?type=${provincial}`)
//获取地区
export const getRegionList = (parentCode: string = '') =>
  api.get(`/system/manage/1.0/dictdata/listByParentCode?parentCode=${parentCode}`)
//增加企业
export const addEnterprise = (params: any) =>
  api.post(`/cloud/organ/1.0/enterpriseBloc/add`, params)

export const loadBlocDetail = (params: FindOrderByPk) => api.get(`/cloud/organ/1.0/enterpriseBloc/loadBlocDetail`, { params })
