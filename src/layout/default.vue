<template>
    <zs-layout menu-key="isMenu">
        <template #header>
            <router-link class="flex" to="/">
                <img width="121" height="29" src="" />
            </router-link>
            <div class="flex-v-center">
                <test-header-user :dropdown="dropdownData" @dropdownMenu="handleDropdownMenu" />
            </div>
        </template>
    </zs-layout>
</template>

<script setup lang="ts">
const dropdownData = [
    {
        text: 'Action 1',
        icon: '',
    },
    {
        text: 'Action 2',
        icon: '',

    },
    {
        text: 'Action 3',
        icon: '',

    },
];

function handleDropdownMenu(command: string | number | object) {
    console.log('command:', command);
}
</script>
