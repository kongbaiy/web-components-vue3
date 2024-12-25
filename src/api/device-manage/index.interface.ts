import type {
  IKeyword,
  IPage,
} from '../common.interface'

export interface INewDeviceQuery extends IPage, IKeyword {
  createdTimes: string
}

export interface IEngineerQuery {
  name: string
}

interface IDeviceList {
  ipAddr: string
  pk: string
}

export interface IMaintenanceUpdate {
  type: "add" | 'edit'
  pks: string[]
  engineer: string
  producer: string
  factoryTime: string
  ipAddr: string[]
  deviceList: IDeviceList[]
}

export interface IMaintainedDeviceQuery extends IPage, IKeyword {
  allocationState: number
  maintenanceTimes: string
}

export interface IAssociatedAgent {
  agentId: string
  agentOrder: string
  productNos: any[]
}

export interface IDepartmentQuery {
  orgCode: string
  deptName?: string
}

export interface IDeviceDtoList {
  attachmentPks: string[]
  iccid: string
  productNo: string
}

export interface IHospitalAllocate {
  deviceDtoList: IDeviceDtoList[]
  institutionCode: string
  institutionDepartment: string
  institutionOrder: string
}

export interface IAssignedDeviceQuery extends IPage, IKeyword {
  allocationTimes: string
}

export interface IAssignedDeviceUnregisterDetail {
  productNos: string[]
}
