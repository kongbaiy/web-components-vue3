<template>
  <zs-layout menu-key="isMenu">
    <template #header>
      <router-link class="flex" to="/">
        <img width="121" height="29" src="@/assets/images/logo.png" />
      </router-link>
      <div class="flex-v-center">
        <zs-header-user />
      </div>
    </template>
  </zs-layout>
</template>
