import { api } from '@/utils'
import { objectArrayToString } from '@/utils'

import type {
  IAttachmentBatchCreate,
  IAttachmentQuery,
  IAttachmentUseQuery,
  ICardNumberAdd,
  ICardNumberEdit,
  ICardNumberQuery,
  IPostageAdd,
  IPostageDropDown,
  IPostageListQuery,
  IUsedCardNumberQuery,
} from './index.interface'

/**
 * 资费管理-资费列表
 */
export const getPostageList = (params: IPostageListQuery) => api.get('/nssp-assets/manage/1.0/tariff', { params: objectArrayToString(params, '$all') })

/**
 * 资费管理-删除
 */
export const postageDelete = (data: string[]) => api.delete('/nssp-assets/manage/1.0/tariff', { data })

/**
 * 资费管理-新增
 */
export const postageAdd = (data: IPostageAdd) => api.post('/nssp-assets/manage/1.0/tariff', data)

/**
 * 资费管理-详情（根据 pk 查询）
 */
export const postageDetail = (pk: number) => api.get(`/nssp-assets/manage/1.0/tariff/${pk}`)

/**
 * 资费管理-修改
 */
export const postageEdit = (data: IPostageAdd) => api.put('/nssp-assets/manage/1.0/tariff', data)

/**
 * 获取资费枚举
 */
export const postageDropDown = (params?: IPostageDropDown) => api.get('/nssp-assets/manage/1.0/tariff/dropDown', { params })

/**
 * 物联网卡管理-新卡号-列表
 */
export const getNewCardNumberList = (params: ICardNumberQuery) => api.get('/nssp-assets/manage/1.0/iotCard', { params: objectArrayToString(params, '$all') })

/**
 * 物联网卡管理-新卡号-删除
 */
export const newCardNumberDelete = (data: string[]) => api.delete('/nssp-assets/manage/1.0/iotCard', { data })

/**
 * 物联网卡管理-新卡号-新增
 */
export const newCardNumberAdd = (data: ICardNumberAdd) => api.post('/nssp-assets/manage/1.0/iotCard', data)

/**
 * 物联网卡管理-新卡号-详情(根据pk查询)
 */
export const newCardNumberDetail = (pk: number) => api.get(`/nssp-assets/manage/1.0/iotCard/${pk}`)

/**
 * 物联网卡管理-新卡号-修改
 */
export const newCardNumberEdit = (data: ICardNumberEdit) => api.put('/nssp-assets/manage/1.0/iotCard', data)

/**
 * 物联网卡管理-已使用-列表
 */
export const getUsedCardNumberList = (params: IUsedCardNumberQuery) => api.get('/nssp-assets/manage/1.0/iotCardUse', { params: objectArrayToString(params, '$all') })

/**
 * 获取枚举接口
 */
export const getMap = () => api.get('/nssp-assets/config/1.0/map')

/**
 * 获取省市区列表
 */
export const getRegion = (parentCode: string = '') => api.get(`/nssp-assets/config/1.0/map/getRegion?parentCode=${parentCode}`)

/**
 * 获取附件管理-新设备-列表
 */
export const getAttachmentList = (params: IAttachmentQuery) => api.get('/nssp-assets/manage/1.0/attachment', { params: objectArrayToString(params, '$all') })

/**
 * 获取附件管理-新设备-删除
 */
export const attachmentDelete = (data: string[]) => api.delete('/nssp-assets/manage/1.0/attachment', { data })

/**
 * 获取附件管理-新设备-批量新增
 */
export const attachmentBatchCreate = (data: Partial<IAttachmentBatchCreate>[]) => api.post('/nssp-assets/manage/1.0/attachment/batchCreate', data)

/**
 * 获取附件管理-新设备-详情
 */
export const getAttachmentBatchDetail = (pk: number) => api.get(`/nssp-assets/manage/1.0/attachment/${pk}`)

/**
 * 获取附件管理-新设备-编辑
 */
export const attachmentBatchEdit = (data: Partial<IAttachmentBatchCreate>) => api.put('/nssp-assets/manage/1.0/attachment', data)

/**
 * 获取附件管理-已使用-列表
 */
export const getAttachmentUseList = (params: IAttachmentUseQuery) => api.get('/nssp-assets/manage/1.0/attachmentUse', { params: objectArrayToString(params, '$all') })
