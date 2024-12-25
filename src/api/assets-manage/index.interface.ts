import type { IKeyword, IPage } from '../common.interface'

export interface IPostageListQuery extends IPage, IKeyword {
  city?: string
  operator?: string
  province?: string
  createdTimes?: string
}

export interface IPostageAdd extends Omit<IPostageListQuery, 'page' | 'limit'> { }

export interface ICardNumberQuery extends IPage, IKeyword {
  operator?: string
  province?: string
  city?: string
  createdTimes?: string
  iccid?: string
}

export interface IUsedCardNumberQuery extends IPage, IKeyword {
  operator?: string
  province?: string
  city?: string
  useService?: number
  useTimes?: string
}

export interface ICardNumberAdd {
  iccidList: string[]
  tariffFk: number
}

export interface ICardNumberEdit {
  iccid: string
  tariffFk: number
  pk: number
}

export interface IPostageDropDown {
  city?: string
  operator?: number
  province?: string
}

export interface IAttachmentQuery extends IPage, IKeyword {
  id?: string
  assetsType?: string
  createdTimes?: string
}

export interface IAttachmentBatchCreate {
  assetsModelNo: string
  assetsName: string
  assetsType: string
  createTime: string
  delFlag: boolean
  id: string
  macAddr: string
  manufacture: string
  pk: number
  punit: number
  region: string
  sns: string
  tariffFk: number
  total: number | string
  updateTime: string
}

export interface IAttachmentUseQuery extends IPage, IKeyword {
  assetsType?: string
  allocationTimes?: string
}
