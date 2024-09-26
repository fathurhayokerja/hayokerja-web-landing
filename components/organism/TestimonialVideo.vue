<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import {
  Player,
  Youtube,
  Embed as VimeEmbed,
  Ui as VimeUi,
  ClickToPlay as VimeClickToPlay,
  Spinner as VimeSpinner,
} from "@vime/vue-next";
import useBreakpoint from "~/composable/useBreakpoint.ts";
import { NDivider } from "naive-ui";

const $breakpoint = useBreakpoint();
const local = reactive({
  loading: false,
  result: null,
});

const $page = ref(null);

const {
  data: $resp,
  pending: $pending,
  refresh: $refresh,
} = await useAsyncData(
  "testimonial",
  async () =>
    $fetch(`${useRuntimeConfig().public.dbUrl}/Testimonials/get`, {
      params: {},
    }),
  {
    watch: [$page],
  },
);
</script>
<template>
  <atoms-container class="py-8 mb-10 md:mb-20">
    <atoms-heading type="h2" class="text-center">
      Apa yang mereka katakan tentang kami?
    </atoms-heading>

    <div class="flex items-center justify-center mb-8">
      <n-divider class="w-1/2" />
    </div>

    <div
      v-if="$pending || !$resp?.result"
      class="w-full bg-white-smoke h-[300px] animate-pulse"
    ></div>

    <Carousel
      v-else
      :itemsToShow="$breakpoint.smAndDown ? 1.2 : 2.5"
      :wrap-around="true"
    >
      <Slide v-for="(item, i) in $resp?.result" :key="i">
        <div
          class="carousel__item shadow-xl bg-white dark:bg-pure-black w-full rounded-3xl my-5 overflow-hidden"
        >
          <atoms-container
            v-if="item?.caption?.includes('www.youtube.com')"
            class="lg:h-auto lg:w-full p-6"
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
            <atoms-heading
              type="h5"
              v-if="item?.title"
              class="p-5 dark:text-black"
            >
              {{ item.title }}
            </atoms-heading>
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
