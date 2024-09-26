<script setup>
import { NButton, NCard, NDivider } from "naive-ui";
import { Player, Youtube } from "@vime/vue-next";
import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import "vue3-carousel/dist/carousel.css";

import useBreakpoint from "@/composable/useBreakpoint.ts";

definePageMeta({
  label: "Tentang Kami",
  order: 3,
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

const breakpoint = useBreakpoint();

const mission = [
  {
    list: "Membantu pemberi kerja untuk mendapatkan tenaga kerja berkualitas dengan proses yang singkat",
  },
  {
    list: "Melakukan proses seleksi awal rekrutmen bagi perusahaan",
  },
  {
    list: "Membantu para KANDIDAT pencari kerja mendapatkan pekerjaan yang sesuai dengan kompetisi dan keahliannya secara efektif dan efisien",
  },
  {
    list: "Membantu mengembangkan keahlian pekerja melalui Balai Latihan Kerja",
  },
  {
    list: "Membangun dan menyimpan history kredibilitas kandidat secara digital",
  },
  {
    list: "Membuat standarisasi penyaluran tenaga kerja dari segi proses dan biaya",
  },
  {
    list: "Go Internasional",
  },
];

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
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <atoms-heading type="h1"> Tentang Kami </atoms-heading>

            <atoms-heading type="h4" class="font-light">
              Bersama pekerja dan outsourcing yang <br />
              kini menjadi bagian operasional utama perusahaan.
            </atoms-heading>
          </div>

          <div class="relative z-10 md:z-50">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/tentangkami/hero-about.png"
              quality="80"
              class="animate-bounce rounded-2xl w-full"
            />
          </div>
        </div>
      </atoms-container>
    </section>

    <section id="content" class="mt-20 md:mt-56 md:pt-28">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            class="flex flex-col items-center justify-center"
          >
            <nuxt-img
              preload
              loading="lazy"
              src="/images/hayokerja.png"
              class="w-[80%]"
            />

            <p
              class="leading-relaxed md:leading-[44px] text-[20px] md:text-[28px] font-light"
            >
              HayoKerja hadir dengan konsep PHL (Pekerja
              <br class="hidden md:block" />
              Harian Lepas) atau Daily Worker dan <br class="hidden md:block" />
              Outsourcing yang saat ini sudah menjadi
              <br class="hidden md:block" />
              bagian penting dalam operasional perusahaan
              <br class="hidden md:block" />
              karena pertimbangan produktivitas dan<br
                class="hidden md:block"
              />
              efisiensi. Oleh Karena itu, HayoKerja hadir
              <br class="hidden md:block" />
              dengan memberikan solusi terbaik untuk
              <br class="hidden md:block" />
              penyediaan mitra Pekerja Harian Lepas (PHL)<br
                class="hidden md:block"
              />
              dan Alih Daya bagi banyak perusahaan di
              <br class="hidden md:block" />
              Indonesia.
            </p>
          </div>

          <div>
            <nuxt-img
              data-aos="fade-left"
              data-aos-duration="1000"
              class="hidden md:block w-[40%] absolute right-0"
              preload
              loading="lazy"
              src="/images/tentangkami/ceo.png"
            />
          </div>
        </div>
      </atoms-container>
    </section>

    <section
      id="company-profile"
      class="bg-primary-gradient text-white mt-20 md:mt-48"
    >
      <atoms-container>
        <div class="flex flex-col items-center pt-6">
          <p class="md:text-[41px] text-center font-bold">
            Kami menjadi wadah kerja sama para stakeholder
            <br class="hidden md:block" />
            dalam dunia kerja secara digital.
          </p>
          <n-divider class="w-1/2" />
        </div>

        <Player controls>
          <Youtube video-id="hRAKrOEpnnQ" />
        </Player>
      </atoms-container>
    </section>

    <section id="visionandmission">
      <div class="flex flex-col items-end pt-6 w-full">
        <div class="w-full flex flex-col items-center mb-6 mt-6">
          <p
            class="text-4xl md:text-[64px] text-center font-bold text-[#0000FF]"
          >
            Visi
          </p>
          <n-divider class="w-[20%]" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="w-full md:w-[75%] flex items-center shadow-2xl bg-primary p-10 h-auto rounded-tl-xl rounded-bl-xl"
        >
          <p class="text-white text-[30px] font-bold">
            Menjadi wadah kerja sama para stakeholder di dunia kerja digital
          </p>
        </div>
      </div>

      <div class="flex flex-col items-start pt-6 w-full mt-20">
        <div class="w-full flex flex-col items-center mb-6">
          <p
            class="text-4xl md:text-[64px] text-center font-bold text-[#0000FF]"
          >
            Misi
          </p>
          <n-divider class="w-[20%]" />
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="w-full md:w-[75%] flex items-center bg-secondary-darken shadow-2xl p-10 h-auto rounded-tr-xl rounded-br-xl"
        >
          <ul class="list-disc text-white font-bold leading-10 text-[25px]">
            <li v-for="misi in mission" :key="misi[0]">
              {{ misi.list }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="client" class="mt-20 mb-16">
      <atoms-container data-aos="fade-up" data-aos-duration="1500">
        <atoms-heading type="h1" class="text-center">Klien</atoms-heading>

        <atoms-heading type="h4" class="text-center font-light">
          Hayokerja telah dipercaya di berbagai Perusahaan
        </atoms-heading>

        <organism-client-list />
      </atoms-container>
    </section>

    <section class="bg-primary">
      <atoms-container
        class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-10"
      >
        <div class="w-full md:w-3/4 text-center md:text-left">
          <atoms-heading type="h2" class="text-white">
            Tunggu apalagi, daftar gratis sekarang!
          </atoms-heading>

          <p class="font-semibold text-lg text-white">
            Bergabung dengan kami segera dan rasakan manfaatnya bersama lebih
            1.000+ klien kami
          </p>
        </div>

        <div class="w-full md:w-1/4 mt-6 md:mt-0">
          <n-button
            type="success"
            class="text-white text-lg md:text-xl lg:text-[24px] font-semibold h-12 md:h-[60px] w-full rounded-3xl"
          >
            Daftar Sekarang
          </n-button>
        </div>
      </atoms-container>
    </section>
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
