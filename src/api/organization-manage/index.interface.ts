import type { IKeyword, IPage } from '../common.interface'
export interface PageListQuery extends IPage {
    orgName?: string
}
export interface OrgHospitalParams {
    provinceCode: string
    cityCode: string
    regionCode: string
    status?: number
}

export interface OrgOrderParams {
    orderStatus: string
    keyWord: string
}

export interface AddOrUpdateParams {
    orgCode: string,
    useStartTime: string,
    packageCode: string,
    orgClassification: string,
    provinceCode: string,
    cityCode?: string,
    regionCode?: string,
    accountManager: string,
    durationUnit: string,
    durationNum: string,
}

export interface FindListParams extends IPage {
    orgName: string
    orgType: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    status: string
}

export interface FindOrderByPk {
    pk: string | string[]
}
export interface GenerateAccountParams {
    orgCode: string
    name: string
}
export interface OrgBlocAdminParams {
    account: string
    name: string
    orgClassification: string
    orgCode: string
    phone: string
    sendType: string
    email?: string
    idCard?: string
}

export interface IDisableStatus {
    pk: number
    status: 0 | 1 | 2 // 0未激活，1启用，2停用
}
