<template>
    <el-dropdown class="cursor-pointer">
        <div class="flex-v-center outline-none">
            <img :src="avatar" class="avatar" />
            <span class="m-x-8px text-base">{{ name }}</span>
            <ep-caret-bottom />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="emits('logout')">
                    {{ $t('logout') }}
                </el-dropdown-item>
                <slot name="dropdown"></slot>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import defaultAvatar from '@/assets/images/icon/default_avatar.png';

interface IUserInfo {
    name?: string
    avatar?: string
}

withDefaults(defineProps<IUserInfo>(), {
    name: 'adc',
    avatar: defaultAvatar,
})
const emits = defineEmits(['logout']);
</script>

<style lang="scss" scoped>
.avatar {
    @apply w-36px h-36px rd-50%;
}
</style>
