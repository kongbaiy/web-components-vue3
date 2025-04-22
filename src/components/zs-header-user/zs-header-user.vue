<template>
    <el-dropdown class="cursor-pointer" @command="handleCommand">
        <div class="flex-v-center outline-none">
            <img :src="avatar" class="avatar" />
            <span class="m-x-8px text-base">{{ name }}</span>
            <ep-caret-bottom />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item, index in dropdown" :key="index"
                    :command="{ command: item.command, index }">
                    <el-icon v-if="item.icon" :name="item.icon" class="m-l-8px" />
                    {{ item.text }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import defaultAvatar from '@/assets/images/icon/default_avatar.png'
import { el } from 'element-plus/es/locale'

interface IDropdownItem {
    text: string
    icon?: string
    command?: string | number | object
    trigger?: <T>(params: T) => void
}

interface IUserInfo {
    name?: string
    avatar?: string
    dropdown?: IDropdownItem[] & { index: number }
}

const props = withDefaults(defineProps<IUserInfo>(), {
    name: 'nickname',
    avatar: defaultAvatar,
})

const emits = defineEmits<{
    (e: 'dropdownMenu', command: IDropdownItem['command']): void
}>()

function handleCommand(command: IDropdownItem['command']) {
    const { dropdown } = props
    const { index } = command as IDropdownItem['command'] & { index: number }
    const item = dropdown[index]

    emits('dropdownMenu', command)
    item.trigger?.(command)
}

</script>

<style lang="scss" scoped>
.avatar {
    @apply w-36px h-36px rd-50%;
}
</style>
