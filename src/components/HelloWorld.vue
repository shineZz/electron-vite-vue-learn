<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

defineProps<{ msg: string }>()
const goto = (url: string) => {
  router.push(url)
}
const count = ref(0)
</script>

<template>
  <el-button type="primary" size="default" @click="goto('/login')"
    >login</el-button
  >
  <el-button type="primary" size="default" @click="goto('/about')"
    >about</el-button
  >
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
