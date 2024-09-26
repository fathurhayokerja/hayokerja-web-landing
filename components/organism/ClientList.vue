<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import "vue3-carousel/dist/carousel.css";

import useBreakpoint from "@/composable/useBreakpoint.ts";

const breakpoints = useBreakpoint();

const client = [
  {
    image: "/images/client/logo-deli.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/Fresh-Factory.png",
    class: "mx-auto h-[200px] ",
  },
  {
    image: "/images/client/akulaku.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/logee.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/telkom-property.jpg",
    class: "mx-auto h-[200px]",
  },
  {
    image: "/images/client/sharp.svg",
    class: "mx-auto",
  },
  {
    image: "/images/client/bintangmahameru.jpeg",
    class: "mx-auto",
  },
  {
    image: "/images/client/kongfook.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/xiangshan.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/astro.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/menarakreatif.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/jnt.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/egogo.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/gudings.png",
    class: "mx-auto",
  },
  {
    image: "/images/client/amaris.png",
    class: "mx-auto",
  },
];
</script>

<template>
  <div>
    <Carousel
      :items-to-show="breakpoints.smAndDown ? 1.5 : 2.5"
      :wrap-around="true"
    >
      <Slide v-for="(item, index) in client" :key="index">
        <div
          class="carousel__item bg-white shadow-xl w-full md:w-[70%] rounded-3xl my-5 overflow-hidden"
        >
          <atoms-container class="p-4">
            <ClientOnly>
              <nuxt-img :src="item?.image" alt="Image" :class="item.class" />
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
.responsive-button {
  position: absolute;
  transition: all 0.3s ease;
}

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

@media (max-width: 768px) {
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .overflow-x-auto::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

@media (max-width: 640px) {
  .responsive-button {
    font-size: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .responsive-button {
    font-size: 1.125rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .responsive-button {
    font-size: 1.25rem;
  }
}

@media (min-width: 1025px) {
  .responsive-button {
    font-size: 1.5rem;
  }
}
</style>
