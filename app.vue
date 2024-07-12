<script setup>
import { darkTheme, NConfigProvider } from "naive-ui";
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
