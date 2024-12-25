<template>
    <el-dropdown class="cursor-pointer">
        <div class="flex-v-center outline-none">
            <img :src="userInfo.avatar" class="avatar" />
            <span class="m-x-8px text-base">{{ userInfo?.name }}</span>
            <ep-caret-bottom />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="sendLogout">
                    {{ $t('logout') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { getDomainName, getUserInfo, logout } from '@/api'
import { removeAccessToken, setAccessToken, getAccessToken } from '@/utils'

import defaultAvatar from '@/assets/images/default_avatar.png'

const userInfo = reactive({
    avatar: '',
    name: ''
})

sendGetUserInfo()

async function sendGetUserInfo() {
    const { data } = await getUserInfo()
    const {
        data: { domainName }
    } = await getDomainName()

    setAccessToken({ ...getAccessToken(), domainName, logoutUrl: data.logoutUrl })
    userInfo.avatar = data.avatar || defaultAvatar
    userInfo.name = data.name
}

async function sendLogout() {
    const { data } = await logout()

    removeAccessToken()
    window.location.href = data.logoutUrl
}
</script>

<style lang="scss" scoped>
.avatar {
    @apply w-36px h-36px rd-50%;
}
</style>
