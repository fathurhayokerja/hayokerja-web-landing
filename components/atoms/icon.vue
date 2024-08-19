<script setup>
import { NButton } from "naive-ui";

const props = defineProps({
  name: {
    type: String,
    default: "ErrorWarningFill",
  },
  size: {
    type: Number,
    default: 18,
  },
  btnSize: {
    type: String,
    default: undefined,
  },
  flat: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <n-button
    :quaternary="!props.flat"
    :text="props.flat"
    v-bind="$attrs"
    :size="btnSize?.toString()"
  >
    <!--  -->
    <template #icon>
      <mdicon
        :name="`${props.name}`"
        :width="props.size"
        :height="props.size"
      />
    </template>
  </n-button>
</template>
