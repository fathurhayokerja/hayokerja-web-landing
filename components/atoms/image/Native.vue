<script setup>
import {
  onMounted,
  reactive,
  getCurrentInstance,
  watch,
  computed,
  ref,
  nextTick,
  useSlots
} from 'vue'
import { NImage, NSpace, NText } from 'naive-ui'

const image = ref(null)
const $nImage = ref(null)
// const { $viewerApi } = getCurrentInstance().appContext.config.globalProperties
const props = defineProps({
  src: String,
  nickname: String,
  loading: Boolean,
  zoom: {
    type: Boolean,
    default: false
  },
  cover: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  position: String,
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
  if (props.nickname) {
    local.source = `https://ui-avatars.com/api?name=${props.nickname}?size=512`
    local.isError = false
    local.loading = false
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
  local.source = props.src || '/'
}
const zooming = () => {
  if (props.zoom) {
    $nImage?.click()
  }
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
  <n-image ref="$nImage" @error="onError" @load="onLoad" :src="local.source" class="hidden" />
  <div
    v-if="local.isError && !props.nickname"
    v-bind="$attrs"
    class="flex justify-center items-center"
    :style="{
      width: props.width || '100%',
      height: props.height || '100%'
    }"
  >
    <slot name="none" /> <mdicon v-if="!useSlots()?.none" name="image-broken-variant" />
  </div>
  <div
    v-else
    v-bind="$attrs"
    :class="[
      (props.cover && 'object-cover') || props.stretch,
      props.zoom ? 'cursor-pointer' : 'cursor-default',
      ((isLoading || local.isError) && 'animate-pulse') || '',
      'native-image flex items-center justify-center bg-white-smoke dark:bg-black'
    ]"
    @click="zooming"
    :style="{
      'background-image': `url('${local.source || props.src}')`,
      'background-size': (props.cover && 'cover') || 'contain',
      'background-position': props.position || 'center',
      'background-repeat': 'no-repeat',
      width: props.width || '100%',
      height: props.height || '100%'
    }"
  >
    <slot />
  </div>
</template>
