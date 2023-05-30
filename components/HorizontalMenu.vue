<template>
    <div class="container">
        <NavButtonHorizontal v-for="(button, index) in mainStore.buttons" :key="index" :button="button"/>
    </div>
</template>

<script>
import { useMainStore } from '@/stores/mainStore.js'

export default {
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: flex-end;
}
</style>