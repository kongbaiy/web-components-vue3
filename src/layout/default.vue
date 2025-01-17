<template>
    <zs-layout menu-key="isMenu">
        <template #header>
            <router-link class="flex" to="/">
                <img width="121" height="29" src="" />
            </router-link>
            <div class="flex-v-center">
                <zs-header-user>
                    <template #dropdown>
                        <el-dropdown-item>
                            {{ $t('logout') }}
                        </el-dropdown-item>
                    </template>
                </zs-header-user>
            </div>
        </template>
    </zs-layout>
</template>
