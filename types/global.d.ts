
declare module 'jsmind'

interface Pagination {
    page: number
    limit: number
}

interface LabelValue {
    label: string
    value: string | number
}

interface AccessTokenInfo {
    authorization: string
    sessionId: string
}

interface UserInfo {
    orgName: string
    account: string
    name: string
    avatar: string
    sex: string
    email: string
    telephone: string
    deptName: string
    isAlways: string
    careerName: string
}

interface Indexable<T = any> {
    [key: string]: T
}

type Nullable<T> = T | null

declare namespace NodeJS {
    type Timeout = any
}