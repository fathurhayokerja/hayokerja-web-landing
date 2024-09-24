<script setup>
import { onMounted, reactive, watch, computed, ref, nextTick, useSlots } from 'vue'
import { NImage, NSpace, NText } from 'naive-ui'

const image = ref(null)
// const { $viewerApi } = getCurrentInstance().appContext.config.globalProperties
const props = defineProps({
  src: String,
  nickname: String,
  loading: Boolean,
  zoom: {
    type: Boolean,
    default: true
  },
  cover: Boolean,
  width: String,
  height: String,
  rounded: {
    type: String,
    default: 'rounded-sm'
  },
  stretch: {
    type: String,
    default: 'object-contain'
  }
})
const local = reactive({
  isError: false,
  source: null,
  loading: false,
  skeleton: false,
  height: null,
  width: null
})
const isLoading = computed(() => props.loading || local.loading)

const onLoad = (payload) => {
  if (image.value) {
    local.height = props.height || image.value.naturalHeight
    local.width = props.width || image.value.naturalWidth
  }
  // console.log(local.source, local.height, local.width);
  local.isError = false
  local.loading = false
}
const onError = () => {
  let _nickname = props.nickname
  if (props.nickname && local.source != props.source) {
    local.source = `https://ui-avatars.com/api?name=${_nickname?.replaceAll(' ', '_')}?size=512`
  } else {
    local.isError = true
    local.loading = false
    local.source = null
  }
}
const reload = () => {
  local.isError = false
  local.height = null
  local.width = null
  local.loading = true
  local.source = props.src
  setTimeout(() => {
    if (local.loading) {
      onError()
    }
  }, 3000)
}
watch(
  () => props.src,
  (value) => {
    reload()
  }
)
onMounted(() => {
  reload()
})
</script>

<template>
  <div
    v-if="local.isError || (local.isError && !props.nickname)"
    v-bind="$attrs"
    :class="['flex items-center justify-center bg-white-smoke dark:bg-black', props.rounded]"
    :style="{
      width: props.width + 'px',
      height: props.height + 'px'
    }"
  >
    <mdicon v-if="!useSlots()?.none" />
    <slot v-else name="none" />
  </div>
  <div
    v-else
    :class="[
      (props.cover && 'object-cover') || props.stretch,
      'flex items-center justify-center overflow-hidden',
      isLoading && 'bg-white-smoke dark:bg-black'
    ]"
  >
    <n-image
      v-bind="$attrs"
      lazy
      :preview-disabled="!props.zoom"
      ref="image"
      :src="local.source"
      :class="[
        (props.zoom && 'cursor-pointer') || 'cursor-default',
        isLoading && 'animate-pulse ',
        props.rounded
        // (props.cover && 'object-cover') || props.stretch
      ]"
      :object-fit="'cover' || props.stretch"
      @error="onError"
      @load="onLoad"
      :width="props.width"
      :height="props.height"
    />
    <slot name="custom" />
  </div>
</template>
<!-- 
:style="{
  width: props.width || local.width || 'auto',
  height: props.height || props.width || local.height || 'auto',
  'background-image': `url(${local.source})`,
  'background-size': `${props.stretch}`,
  'background-repeat': 'no-repeat',
}" -->
