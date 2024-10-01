<script setup>
import { NButton, NCard, NDivider } from "naive-ui";
import {
  Player,
  Youtube,
  Embed as VimeEmbed,
  Ui as VimeUi,
  ClickToPlay as VimeClickToPlay,
  Spinner as VimeSpinner,
} from "@vime/vue-next";
import { reactive } from "vue";

import clientType from "~/constant/client.type.js";
import industryType from "~/constant/industry.type.js";

const $seo = ref({
  title: "Agensi Tenaga Kerja",
  description: "ini adalah seo test",
  siteName: "hayokerja",
  url: "https://www.hayokerja.com/",
  imageUrl: "https://www.hayokerja.com/_ipx/q_80/images/preview.hero.png",
});

definePageMeta({
  order: 0,
  label: "beranda",
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

useServerSeoMeta({
  title: () => $seo.value.title,
  description: () => $seo.value.description,
  ogTitle: () => $seo.value.title,
  ogDescription: () => $seo.value.title,
  ogImage: () => $seo.value.imageUrl,
  ogImageAlt: () => $seo.value.title,
  ogSiteName: () => $seo.value.siteName,
  ogUrl: () => $seo.value.url,
  twitterTitle: () => $seo.value.title,
  twitterDescription: () => $seo.value.title,
  twitterSite: () => $seo.value.siteName,
  twitterImage: () => $seo.value.imageUrl,
  twitterImageAlt: () => $seo.value.title,
  twitterCard: "summary_large_image",
});

const $local = reactive({
  mainLoading: true,
});

onMounted(() => {
  $local.mainLoading = false;
});
</script>

<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <atoms-heading type="h1">
              Jasa Pengelolaan Pekerja dan Kebutuhan SDM.
            </atoms-heading>

            <p class="lg:max-w-[80%]">
              Manajemen absensi, gajian hingga rekrut pekerja jadi lebih mudah
              dan cepat bersama kami. Terbukti dengan lebih dari 1.000+ partner
              dan 10.000+ mitra telah merasakan kemudahan dan manfaatnya.
            </p>

            <n-button
              size="large"
              type="success"
              class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto mt-5"
              >Read More</n-button
            >
          </div>

          <div class="relative z-10 md:z-50">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/banner.png"
              quality="80"
              width="746"
              height="560"
              class="animate-bounce"
            />
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 relative gap-10 mt-10 md:mt-64"
        >
          <n-card class="p-4 md:p-0 hover:shadow-2xl">
            <div
              class="flex flex-col md:flex-row items-center justify-around gap-10"
            >
              <nuxt-img
                preload
                loading="lazy"
                width="190"
                height="180"
                src="/images/companybuilding.svg"
              />

              <div>
                <atoms-heading type="h2">1.000+ Perusahaan</atoms-heading>

                <p class="font-light mt-4 text-[16px]">
                  Terdapat lebih dari 1.000 perusahaan <br />
                  dan UMKM diseluruh Indonesia telah <br />
                  terdaftar hingga saat ini.
                </p>
              </div>
            </div>
          </n-card>

          <n-card class="p-4 hover:shadow-2xl">
            <div
              class="flex flex-col md:flex-row items-center justify-around gap-10"
            >
              <nuxt-img
                preload
                loading="lazy"
                width="225"
                height="132"
                src="/images/partnership.svg"
              />

              <div class="flex flex-col justify-start md:justify-center">
                <atoms-heading type="h2">10.000+ Mitra</atoms-heading>

                <p class="font-light mt-4 text-[16px]">
                  Tercatat ada lebih dari 10.000 mitra <br />
                  pekerja kami yang terdaftar untuk <br />
                  meraih potensi yang mereka miliki.
                </p>
              </div>
            </div>
          </n-card>
        </div>
      </atoms-container>
    </section>

    <section id="sub-hero" class="bg-custom-gradient mt-10">
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
          class="flex flex-col md:flex-row items-center justify-center mt-10"
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
              src="/images/design-mobile-phone-1.png"
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
      </atoms-container>
    </section>

    <section id="body-header" class="border-b-2 dark:border-b-gray-700">
      <!--    Item 1-->
      <div class="grid md:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full bg-primary-darken p-10 flex justify-end"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/mobile-vacancy.svg"
            width="452"
            height="572"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full p-10 space-y-6 my-auto"
        >
          <nuxt-img
            class="block dark:hidden"
            preload
            loading="lazy"
            src="/images/icon/vacancy-black.svg"
            width="87"
            height="67"
          />

          <nuxt-img
            class="hidden dark:block"
            preload
            loading="lazy"
            src="/images/icon/vacancy.svg"
            width="87"
            height="67"
          />
          <atoms-heading type="h2">Lowongan Kerja</atoms-heading>
          <p class="font-normal text-[22px] text-justify">
            Mendapatkan pekerjaan impian yang sesuai <br />
            dengan minat dan bakat kini lebih mudah dan <br />
            cepat dalam satu platform.
          </p>
        </div>
      </div>

      <!--    Item 2 -->
      <div class="grid md:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full p-10 space-y-6 flex flex-col items-end my-auto order-2 md:order-none"
        >
          <nuxt-img
            class="block dark:hidden"
            preload
            loading="lazy"
            src="/images/icon/wallet-black.svg"
            width="87"
            height="67"
          />

          <nuxt-img
            class="hidden dark:block"
            preload
            loading="lazy"
            src="/images/icon/wallet.svg"
            width="87"
            height="67"
          />
          <atoms-heading type="h2">Perhitungan & Gaji</atoms-heading>
          <p class="font-normal text-[22px] text-justify">
            Hasil dapat diambil langsung maupun EWA <br />
            (Earned Wage Access) / kasbon. Kami telah <br />
            bekerja sama dengan perusahaan fintech <br />
            ternama.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full bg-primary-secondary-darken p-10 flex justify-start"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/mobile-recruitment.svg"
            width="452"
            height="572"
          />
        </div>
      </div>

      <!--    Item 3 -->
      <div class="grid md:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full bg-secondary p-10 flex justify-end"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/perhitungangaji.svg"
            width="452"
            height="572"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full p-10 space-y-6 my-auto"
        >
          <nuxt-img
            class="block dark:hidden"
            preload
            loading="lazy"
            src="/images/icon/recruitment-black.svg"
            width="87"
            height="67"
          />

          <nuxt-img
            class="hidden dark:block"
            preload
            loading="lazy"
            src="/images/icon/recruitment.svg"
            width="87"
            height="67"
          />
          <atoms-heading type="h2">Rekruitment Pekerja</atoms-heading>
          <p class="font-normal text-[22px] text-justify">
            Pendaftaran lowongan kerja yang mudah juga <br />
            proses pendaftaran yang tidak dikenakan <br />
            biaya admin (gratis).
          </p>
        </div>
      </div>
    </section>

    <section id="body-content" class="border-b-2 dark:border-b-gray-700 pb-5">
      <div class="grid grid-cols-1 md:grid-cols-2 space-y-10">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          class="w-full my-auto"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/Landings/SVG.svg"
            class="hidden md:block w-[70%]"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full my-auto px-4 space-y-10"
        >
          <div
            class="w-full flex flex-col md:flex-row items-center bg-primary-secondary-darken rounded-2xl justify-between p-4 md:p-3"
          >
            <nuxt-img
              preload
              loading="lazy"
              class="w-[70%] md:w-2/5 mb-6 md:mb-0"
              src="/images/Landings/Lamar-Kerja 1.svg"
            />

            <div class="flex flex-col justify-center w-full md:w-1/2">
              <atoms-heading type="h2" class="text-white">
                Saya ingin<br class="hidden md:block" />
                melamar kerja
              </atoms-heading>

              <n-button
                :bordered="false"
                type="primary"
                class="w-full md:w-auto uppercase bg-secondary text-white text-xl md:text-2xl rounded-2xl mt-4 p-4 md:p-6"
              >
                Lamar Kerja
              </n-button>
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row w-full items-center justify-between bg-secondary-darken rounded-2xl p-4 md:p-6"
          >
            <nuxt-img
              preload
              loading="lazy"
              class="w-[70%] md:w-2/5 mb-6 md:mb-0"
              src="/images/Landings/rekrut-sekarang 1.svg"
            />

            <div class="flex flex-col justify-center w-full md:w-1/2">
              <atoms-heading type="h2" class="text-white">
                Saya ingin merekrut pekerja
              </atoms-heading>

              <n-button
                :bordered="false"
                type="primary"
                class="w-full md:w-auto uppercase text-xl md:text-2xl text-white rounded-2xl mt-4 p-4 md:p-6"
              >
                Rekrut Sekarang
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work-industry" class="border-b-2 dark:border-b-gray-700">
      <atoms-container class="p-10">
        <p class="font-extrabold text-[40px] text-center">
          Industri dan Pekerjaan yang kami salurkan
        </p>

        <div class="border mt-5 w-[198px]" />

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-4"
        >
          <n-card
            v-for="(industries, index) in industryType"
            :key="industries.name"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="hover:shadow-2xl"
          >
            <div>
              <nuxt-img preload loading="lazy" :src="industries.icon" />
            </div>

            <div>
              <p class="text-lg font-bold pt-5">{{ industries.name }}</p>

              <ul class="list-disc p-3">
                <li v-for="job in industries.jobs" :key="job">{{ job }}</li>
              </ul>
            </div>
          </n-card>
        </div>
      </atoms-container>
    </section>

    <section id="client">
      <atoms-container class="p-10">
        <p class="font-extrabold text-[40px] text-center">Klien</p>

        <p class="text-center">
          Hayokerja telah dipercaya di berbagai Perusahaan
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          <n-card
            v-for="(clients, index) in clientType"
            class="flex flex-row items-center justify-center shadow-md hover:shadow-2xl"
            :key="index"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <nuxt-img
              preload
              :class="clients.class"
              loading="lazy"
              :src="clients.image"
            />
          </n-card>
        </div>
      </atoms-container>
    </section>

    <section
      id="company-profile"
      class="bg-custom-gradient border-b-2 dark:border-b-gray-700"
    >
      <atoms-container>
        <ClientOnly>
          <Player controls>
            <Youtube videoId="hRAKrOEpnnQ" />

            <vime-ui>
              <VimeClickToPlay />
              <VimeSpinner />
            </vime-ui>
          </Player>
        </ClientOnly>
      </atoms-container>
    </section>

    <section id="testimonials">
      <organism-testimonial-video />
    </section>
  </div>
</template>
