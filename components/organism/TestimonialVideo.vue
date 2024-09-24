<script setup>
import "vue3-carousel/dist/carousel.css";
import {
  Carousel,
  Slide,
  Pagination,
  Navigation,
} from "vue3-carousel/dist/carousel.es.js";
import {
  Player,
  Youtube,
  Embed as VimeEmbed,
  Ui as VimeUi,
  ClickToPlay as VimeClickToPlay,
  Spinner as VimeSpinner,
} from "@vime/vue-next";
import useBreakpoint from "@/composable/useBreakpoint.ts";

const local = reactive({
  loading: false,
  result: null,
});
const $breakpoint = useBreakpoint();

const $page = ref(null);

const {
  data: $resp,
  pending: $pending,
  refresh: $refresh,
} = await useAsyncData(
  "testimonial",
  async () =>
    $fetch(`${process.env.DATABASE_URL}/Testimonials/get`, {
      params: {},
    }),
  {
    watch: [$page],
  },
);

local.result = $resp.value?.result;
</script>
<template>
  <atoms-container class="py-8">
    <div
      v-if="$pending || !local.result"
      class="w-full bg-white-smoke h-[300px] animate-pulse"
    ></div>
    <Carousel
      v-else
      :itemsToShow="$breakpoint.smAndDown ? 1.2 : 2.5"
      :wrap-around="true"
    >
      <Slide v-for="(item, i) in local.result" :key="i">
        <div
          class="carousel__item shadow-xl bg-white w-full rounded-3xl my-5 overflow-hidden"
        >
          <atoms-container
            v-if="item?.caption?.includes('www.youtube.com')"
            class="lg:h-auto lg:w-full p-10"
          >
            <ClientOnly>
              <Player controls>
                <Youtube :videoId="item.caption?.split('=')[1]" />

                <vime-ui>
                  <VimeClickToPlay />
                  <VimeSpinner />
                </vime-ui>
              </Player>
            </ClientOnly>
          </atoms-container>
          <div class="text-left">
            <p v-if="item?.title" class="p-5 dark:text-black">
              {{ item.title }}
            </p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation class="!text-white !bg-primary" />
      </template>
    </Carousel>
  </atoms-container>
</template>

<style scoped>
/* .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
