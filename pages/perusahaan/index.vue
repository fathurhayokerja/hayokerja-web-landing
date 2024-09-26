<script setup>
import { NButton, NCard, NDivider } from "naive-ui";

import { Carousel, Slide, Navigation } from "vue3-carousel/dist/carousel.es.js";
import "vue3-carousel/dist/carousel.css";

import useBreakpoint from "@/composable/useBreakpoint.ts";

defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});

definePageMeta({
  order: 1,
  label: "Perusahaan",
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

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

const headers = ["In House", "Outsourcing", "Kemitraan"];

const benefits = [
  {
    name: "Gaji Pokok",
    icon: "/images/perusahaan/gajipokok.svg",
    values: {
      inHouse: "Yes ✅",
      outsourcing: "Yes ✅",
      kemitraan: "Prorate Base On Needs",
    },
  },
  {
    name: "BPJS Kesehatan",
    icon: "/images/perusahaan/bpjskes.svg",
    values: {
      inHouse: "Yes ✅",
      outsourcing: "Yes ✅",
      kemitraan: "Self Funding",
    },
  },
  {
    name: "BPJS Ketenagakerjaan",
    icon: "/images/perusahaan/bpjsketeneg.svg",
    values: {
      inHouse: "No ❌",
      outsourcing: "Yes ✅",
      kemitraan: "Tentative (Based on Partnership/mitra)",
    },
  },
  {
    name: "Management Fee",
    icon: "/images/perusahaan/managementfee.svg",
    values: {
      inHouse: "No ❌",
      outsourcing: "Yes ✅",
      kemitraan: "Tentative (Based on Partnership/mitra)",
    },
  },
  {
    name: "PPN 11%",
    icon: "/images/perusahaan/ppn11.svg",
    values: {
      inHouse: "No ❌",
      outsourcing: "Yes ✅",
      kemitraan: "dari platform fee",
    },
  },
  {
    name: "PPH Pasal 23",
    icon: "/images/perusahaan/pphpasal.svg",
    values: {
      inHouse: "No ❌",
      outsourcing: "Yes ✅",
      kemitraan: "Yes ✅",
    },
  },
  {
    name: "THR",
    icon: "/images/perusahaan/thr.svg",
    values: {
      inHouse: "Yes ✅",
      outsourcing: "Yes ✅",
      kemitraan: "Tentative (Based on Partnership/mitra)",
    },
  },
  {
    name: "Bonus tahunan",
    icon: "/images/perusahaan/bonus.svg",
    values: {
      inHouse: "Yes ✅",
      outsourcing: "No ❌",
      kemitraan: "Tentative (Based on Partnership/mitra)",
    },
  },
];

const getCellClass = (key) => {
  return `py-3 px-4 ${key === "kemitraan" ? "bg-primary-darken" : "bg-primary"} text-white`;
};
</script>

<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <atoms-heading type="h1">
              Solusi Kebutuhan Tenaga kerja anda
            </atoms-heading>

            <p class="lg:max-w-[80%]">
              Bersama kami, kelola pekerja Anda dengan cara <br />
              yang lebih efektif dan efisien serta Simpel, Aman, <br />
              Mudah dan juga Reliabel.
            </p>

            <n-button
              size="large"
              type="success"
              class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto mt-5"
              >Daftar Gratis Sekarang</n-button
            >
          </div>

          <div class="z-20">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/perusahaan/peoplework.svg"
              quality="80"
              width="800"
              height="500"
              class="animate-bounce"
            />
          </div>
        </div>
      </atoms-container>
    </section>

    <section id="sub-hero" class="my-36 container mx-auto px-4">
      <atoms-container>
        <div class="flex items-center justify-center mb-16">
          <n-card
            class="w-full md:w-1/2 text-center text-white bg-secondary space-y-3 md:space-y-5"
          >
            <atoms-heading
              :type="breakpoints.smAndDown ? 'h4' : 'h2'"
              class="uppercase"
            >
              Perbandingan
            </atoms-heading>
            <atoms-heading type="h4">
              Efisiensi Biaya sampai dengan 16,7 %
            </atoms-heading>
          </n-card>
        </div>

        <div class="overflow-x-auto pb-4">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="py-3 px-4 font-semibold text-left"></th>
                <th
                  v-for="header in headers"
                  :key="header"
                  class="py-3 px-4 font-semibold text-left bg-secondary-darken"
                >
                  <atoms-heading type="h3" class="text-white">{{
                    header
                  }}</atoms-heading>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="benefit in benefits" :key="benefit.name">
                <td class="py-3 px-4 flex gap-4">
                  <nuxt-img :src="benefit.icon" width="30" height="30" />
                  <atoms-heading type="h4">{{ benefit.name }}</atoms-heading>
                </td>
                <td
                  v-for="(value, key) in benefit.values"
                  :key="key"
                  :class="getCellClass(key)"
                >
                  <atoms-heading type="h5">
                    {{ value }}
                  </atoms-heading>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </atoms-container>
    </section>

    <section id="body-content" class="bg-custom-gradient mt-10 mb-20">
      <atoms-container
        data-aos="fade-up"
        data-aos-duration="1000"
        class="!text-white pt-10 pb-5"
      >
        <atoms-heading type="h1" class="uppercase text-center">
          Semua dalam satu platform
        </atoms-heading>

        <n-divider class="text-white" />

        <div
          class="flex flex-col md:flex-row items-center justify-center mt-10 mb-10"
        >
          <div class="flex justify-center">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/design-tablet-1.svg"
              quality="80"
              width="561"
              height="432"
            />
          </div>

          <div class="flex justify-center">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/design-mobile-phone-1.svg"
              quality="80"
              width="355"
              height="679"
            />
          </div>

          <div
            class="flex flex-col text-white space-y-6 border-4 rounded-xl p-8"
          >
            <p class="flex items-center justify-start gap-4">
              <nuxt-img
                preload
                loading="lazy"
                src="/images/icon/vacancy.svg"
                alt="lowongan"
              />
              <span class="font-extrabold">Lowongan Kerja</span>
            </p>

            <p class="flex items-center justify-start gap-4">
              <nuxt-img
                preload
                loading="lazy"
                src="/images/icon/wallet.svg"
                alt="wallet"
              />

              <span class="font-extrabold">Perhitungan & Gaji</span>
            </p>

            <p class="flex items-center justify-start gap-4">
              <nuxt-img
                preload
                loading="lazy"
                src="/images/icon/recruitment.svg"
                alt="recruitment"
              />

              <span class="font-extrabold">Rekrutment Pekerja</span>
            </p>

            <n-card class="mt-8 bg-secondary-darken">
              <a href="#">
                <img
                  src="/images/gplay.png"
                  alt="Download Aplikasi Hayokerja"
                  class="w-48 h-auto"
                />
              </a>

              <p
                class="mt-4 flex items-center text-white text-xl font-extrabold gap-2"
              >
                Download Aplikasi <br />
                Hayokerja

                <nuxt-img
                  preload
                  loading="lazy"
                  src="/images/icon/icon-hk-app.svg"
                  alt="icon-hk-app"
                />
              </p>
            </n-card>
          </div>
        </div>

        <div class="flex justify-center px-4 sm:px-6 md:px-8">
          <n-button
            type="success"
            class="responsive-button rounded-3xl w-auto sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-auto p-4 sm:p-6 md:p-8"
          >
            <span
              class="flex items-center justify-between gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold"
            >
              Buat Lowongan Anda
              <span
                class="bg-primary-secondary-darken rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center text-white"
              >
                →
              </span>
            </span>
          </n-button>
        </div>
      </atoms-container>
    </section>

    <section id="sub-body-content" class="my-16">
      <div
        class="flex flex-col md:flex-row items-center gap-8 md:gap-20 my-auto py-10"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full md:w-1/2 relative"
        >
          <nuxt-img
            class="w-full max-w-[850px] mx-auto"
            preload
            loading="lazy"
            src="/images/vector-body-content.svg"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <nuxt-img
              class="object-contain w-full h-full max-h-[750px]"
              preload
              loading="lazy"
              src="/images/perusahaan/daftarinvoice.svg"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-20"
        >
          <atoms-heading type="h2">
            Mencari pekerja kini lebih mudah & efektif
          </atoms-heading>

          <p class="text-lg font-light">
            Mulai dari undang pekerja, kemudian catat absensi, lihat waktu dan
            lokasi pekerja hingga hitung dan bayar gaji cukup dengan satu kali
            klik pembuatan invoice, semua beres.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 my-auto py-10"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-20"
        >
          <atoms-heading type="h2">
            Catat serta lihat Riwayat Absensi, Lokasi Dan Waktu Pekerja Secara
            Realtime
          </atoms-heading>
          <p class="text-lg font-light">
            Memudahkan administrasi, semua data tersinkronisasi di cloud.
            Absensi pekerja dapat dengan mudah dilacak riwayatnya serta memantau
            serta mengatur kehadiran pekerja dengan Geotagging dan pengelompokan
            area kerja.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="w-full md:w-1/2 relative"
        >
          <nuxt-img
            class="w-full max-w-[850px] mx-auto"
            preload
            loading="lazy"
            src="/images/vector-body-content2.svg"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <nuxt-img
              class="object-contain w-full h-full max-h-[750px]"
              preload
              loading="lazy"
              src="/images/perusahaan/absensi-mobile.svg"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container mx-auto px-4 my-8 md:my-16 pt-16 md:pt-36"
      >
        <div class="relative">
          <nuxt-img
            class="w-full hidden md:block"
            preload
            loading="lazy"
            src="/images/perusahaan/rectangle.svg"
          />

          <div class="md:absolute bottom-0 z-50 w-full px-4 md:px-12">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <nuxt-img
                class="h-auto md:h-[800px] max-w-full mb-8 md:mb-0"
                preload
                loading="lazy"
                src="/images/perusahaan/orang.svg"
              />

              <div
                class="flex flex-col items-center justify-center space-y-4 md:space-y-8 mt-8 md:mt-48"
              >
                <p
                  class="text-3xl md:text-5xl font-extrabold text-center md:text-white"
                >
                  Penawaran Kami
                </p>

                <ul
                  class="text-lg md:text-2xl font-bold md:text-white leading-snug list-none pl-0"
                >
                  <li class="mb-2">> Rekrutment pekerja harian lepas.</li>
                  <li class="mb-2">> Pengelolaan SDM pekerja harian lepas.</li>
                  <li class="mb-2">> Supply Talent Pool SDM.</li>
                  <li class="mb-2">
                    > Dashboard monitoring absensi dan hasil laporan dalam
                    bentuk ms. Excel.
                  </li>
                  <li class="mb-2">
                    > Aplikasi Absensi geotagging, geofencing secara real time.
                  </li>
                  <li>> Unlimited lokasi & no Hidden Cost.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="client" class="mb-10">
      <atoms-container data-aos="fade-up" data-aos-duration="1000">
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
