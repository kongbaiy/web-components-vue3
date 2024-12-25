import type { UploadUserFile } from 'element-plus'
import type { IKeyword, IPage } from '../common.interface'
export type AllListByType = {
  type: 'org_type' | 'economy_type' | 'org_level' | 'country_nhc'
}

export type OrgLevelByType = {
  parentCode: string
}

export interface EMListQuery extends IPage, IKeyword {
  blocName?: string
  blocType?: string
  cityCode?: string
  provinceCode?: string
  regionCode?: string
  province?: any[]
}

export interface IPostageAdd extends Omit<EMListQuery, 'page' | 'limit'> {}

export interface Members {
  name: string
  inaugurationEndTime: string
  inaugurationStartTime: string
  position: string
  tenure: string
  disabled?: boolean
  button?: 'add' | 'delete'
}
export type EconomyType = {
  value: string[]
  options: any[]
}

export type Grade = {
  value: string
  options: any[]
}

export type Level = {
  value: string[]
  options: any[]
}

export type OrgUpselect = {
  value: string[]
  options: any[]
}

export type orgTypeSelect = {
  value: string[]
  options: any[]
}

export type OrgType = {
  value: string[]
  options: any[]
}
export interface Regions extends EconomyType {}
export interface IntroductionPhoto {
  fileList: UploadUserFile[]
  values: UploadUserFile[]
  dialogImageUrl: string
  dialogVisible: boolean
}
export interface Logo extends IntroductionPhoto {}
export interface RuleForm {
  blocName: string
  usci: string
  alias: string
  economyType: EconomyType
  grade: Grade
  level: Level
  orgType: OrgType | string
  region: Regions
  address: string
  members: Members[]
  businessScope: string
  operatingPeriod: string[] | string
  telephone: string
  fax: string
  website: string
  introduction: string
  introductionPhoto: IntroductionPhoto
  logo: Logo
}

export interface AddOrgVo {
  orgName: string
  usci: string
  alias: string
  address: string
  countryCode: string
  provinceCode: string
  cityCode: string
  mmembers: Members[]
  fax: string
  telephone: string
  amPhoneTime: string
  pmPhoneTime: string
  economyType: string
  postalCode: String
  website: string
  appletName: string
  appletPhoto: string
  appletUrl: string
  officialAccountName: string
  officialAccountPhoto: string
  officialAccountUrl: string
  logo: string
  introduction: string
  introductionPhoto: []
  orgGrade: string
  regionCode: string
  parentHealthCommission: string
  orgType: string
  orgTypeSelect: orgTypeSelect
  orgCode: string
  orgLevel: string
  blocCode: string
  orgUpselect: OrgUpselect
}
