<script setup>
import { NButton, NH1, NAlert, NSpace } from "naive-ui";
</script>
<template>
  <div>
    <organism-header />
    <br />
    <slot />
    <organism-footer />
  </div>
</template>
