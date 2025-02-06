<template>
    <div v-loading="loading" class="h-screen" />
</template>

<script lang="ts" setup>
import { setAccessToken } from '@/utils'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const loading = ref(true)

onBeforeMount(() => {
    const { authorization, sessionId } = route.query
    const token = {
        authorization: decodeURIComponent(authorization as unknown as string),
        sessionId: decodeURIComponent(sessionId as unknown as string)
    }

    setAccessToken(token)
    router.push('/')
})

onUnmounted(() => {
    loading.value = false
})
</script>
