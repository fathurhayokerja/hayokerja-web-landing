<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import "vue3-carousel/dist/carousel.css";
import useBreakpoint from "@/composable/useBreakpoint.ts";

import clientType from "~/constant/client.type.js";

const breakpoints = useBreakpoint();
</script>

<template>
  <div>
    <Carousel
      :items-to-show="breakpoints.smAndDown ? 1.5 : 2.5"
      :wrap-around="true"
    >
      <Slide v-for="(item, index) in clientType" :key="index">
        <div
          class="carousel__item bg-white shadow-xl w-full md:w-[70%] rounded-3xl my-5 overflow-hidden"
        >
          <atoms-container class="p-4">
            <ClientOnly>
              <nuxt-img :src="item?.image" alt="Image" class="mx-auto" />
            </ClientOnly>
          </atoms-container>
        </div>
      </Slide>

      <template #addons>
        <Navigation class="text-white" />
      </template>
    </Carousel>
  </div>
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
