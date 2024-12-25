import { api } from '@/utils'
import { objectArrayToString } from '@/utils'

import type {
  IAssignedDeviceQuery,
  IAssociatedAgent,
  IDepartmentQuery,
  IEngineerQuery,
  IHospitalAllocate,
  IMaintainedDeviceQuery,
  IMaintenanceUpdate,
  INewDeviceQuery,
} from './index.interface'

/**
 * 设备管理-新增设备-列表
 */
export const getNewDevice = (params: INewDeviceQuery) => api.get('/nssp-assets/r2/1.0/newDevice', { params: objectArrayToString(params, '$all') })

/**
 * 设备管理-新增设备-根据pk列表获取设备列表
 */
export const getNewDeviceInfo = (pks: string[]) => api.post('/nssp-assets/r2/1.0/newDevice/listByPks', pks)

/**
 * 设备管理-新增设备-根据名称模糊查询工程师
 */
export const getListEngineer = (params?: IEngineerQuery) => api.get(`/nssp-assets/r2/1.0/newDevice/listEngineer`, { params })

/**
 * 设备管理-新增设备-维护设备信息(单一、批量)
 */
export const maintenance = (params?: IMaintenanceUpdate) => api.post('/nssp-assets/r2/1.0/newDevice/maintenance', params)

/**
 * 设备管理-已维护设备-列表
 */
export const getMaintainedDevice = (params: IMaintainedDeviceQuery) => api.get('/nssp-assets/r2/1.0/maintainedDevice', { params: objectArrayToString(params, '$all') })

/**
 * 设备管理-查询代理商
 */
export const getListAgent = () => api.get('/nssp-assets/r2/1.0/maintainedDevice/listAgent')

/**
 * 设备管理-已维护设备-代理商维护详细查询
 */
export const getListAgentByPks = (pks: string[]) => api.post('/nssp-assets/r2/1.0/maintainedDevice/listAgentByPks', pks)

/**
 * 设备管理-已维护设备-关联代理商(单一、批量)
 */
export const associatedAgent = (params: IAssociatedAgent) => api.post('/nssp-assets/r2/1.0/maintainedDevice/associatedAgent', params)

/**
 * 设备管理-已维护设备-查询代理商关联订单
 */
export const getListAgentOrder = (agentCode?: string) => api.get(`/nssp-assets/r2/1.0/maintainedDevice/listAgentOrder?agentCode=${agentCode}`)

/**
 * 设备管理-已维护设备-医院分配详细查询
 */
export const getListHospitalByPks = (pks: string[]) => api.post('/nssp-assets/r2/1.0/maintainedDevice/listHospitalByPks', pks)

/**
 * 设备管理-已维护设备-查询医院列表
 */
export const getListHospital = (hospitalName?: string) => api.get(`/nssp-assets/r2/1.0/maintainedDevice/listHospital?hospitalName=${hospitalName}`)

/**
 * 设备管理-已维护设备-查询科室
 */
export const getListDepartmentByOrgCode = (params: IDepartmentQuery) => api.get('/nssp-assets/r2/1.0/maintainedDevice/listDepartmentByOrgCode', { params })

/**
 * 设备管理-已维护设备-医院关联订单
 */
export const getListHospitalOrder = (institutionCode: string) => api.get(`/nssp-assets/r2/1.0/maintainedDevice/listHospitalOrder?institutionCode=${institutionCode}`)

/**
 * 设备管理-已维护设备-分配医院(单一、批量)
 */
export const assignedHospital = (params: IHospitalAllocate) => api.post('/nssp-assets/r2/1.0/maintainedDevice/assignedHospital', params)

/**
 * 设备管理-已分配-列表
 */
export const getAssignedDevice = (params: IAssignedDeviceQuery) => api.get('/nssp-assets/r2/1.0/assignedDevice', { params: objectArrayToString(params, '$all') })

/**
 * 设备管理-已分配-详情
 */
export const getAssignedDeviceDetail = (pk: number) => api.get(`/nssp-assets/r2/1.0/assignedDevice/${pk}`)

/**
 * 设备管理-已分配-注销详情列表详情
 */
export const assignedDeviceUnregisterDetail = (params: string[]) => api.post('/nssp-assets/r2/1.0/assignedDevice/writeOffDetail', params)

/**
 * 设备管理-已分配-注销（单一、批量）
 */
export const assignedDeviceUnregister = (data: string[]) => api.delete('/nssp-assets/r2/1.0/assignedDevice', { data })
