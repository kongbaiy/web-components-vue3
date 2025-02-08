<template>
    <el-dropdown class="cursor-pointer">
        <div class="flex-v-center outline-none">
            <img :src="avatar" class="avatar" />
            <span class="m-x-8px text-base">{{ name }}</span>
            <ep-caret-bottom />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item, index in dropdownList" :key="item.text" :icon="item.icon"
                    @click="handleDropdown(index, item)">
                    {{ item.text }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import defaultAvatar from '@/assets/images/icon/default_avatar.png';

interface IDropdownList {
    text: string
    icon: string
    click?: () => void
}

interface IUserInfo {
    name?: string
    avatar?: string
    dropdownList?: IDropdownList[]
}

withDefaults(defineProps<IUserInfo>(), {
    name: 'nickname',
    avatar: defaultAvatar,
})
const emits = defineEmits(['dropdown']);

function handleDropdown(currentIndex: number, item: IDropdownList) {
    item.click?.();
    emits('dropdown', {
        currentIndex,
        item
    });
}
</script>

<style lang="scss" scoped>
.avatar {
    @apply w-36px h-36px rd-50%;
}
</style>
