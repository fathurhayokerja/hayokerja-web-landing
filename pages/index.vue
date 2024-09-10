<script setup>
import {
  NButton,
  NTimeline,
  NTimelineItem,
  NCarousel,
  NCarouselItem,
  NCard,
} from "naive-ui";

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
</script>
<template>
  <section id="hero" class="relative mt-7">
    <div class="container mx-auto">
      <div class="grid grid-cols-2">
        <div class="space-y-5 p-10">
          <p
            class="text-[#081178] font-extrabold text-[43px] leading-[65px] dark:text-white"
          >
            Jasa Pengelolaan Pekerja <br />
            dan Kebutuhan SDM.
          </p>

          <p class="lg:max-w-[80%]">
            Manajemen absensi, gajian hingga rekrut pekerja jadi lebih mudah dan
            cepat bersama kami. Terbukti dengan lebih dari 1.000+ partner dan
            10.000+ mitra telah merasakan kemudahan dan manfaatnya.
          </p>

          <n-button
            size="large"
            type="success"
            class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto mt-5"
            >Read More</n-button
          >
        </div>

        <div class="relative z-50">
          <!--        <nuxt-img-->
          <!--          preload-->
          <!--          loading="lazy"-->
          <!--          src="/images/Landings/banner.svg"-->
          <!--          quality="80"-->
          <!--          width="746"-->
          <!--          height="560"-->
          <!--        />-->

          <nuxt-img
            preload
            loading="lazy"
            src="/images/banner.svg"
            quality="80"
            width="746"
            height="560"
          />
        </div>
      </div>

      <div class="stats-container">
        <div class="stats-card">
          <div class="image-wrapper company-image">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/company-building.png"
              quality="80"
              height="200"
              width="200"
              alt="Company Building"
            />
          </div>
          <div class="content">
            <h2 class="title">1.000+ Perusahaan</h2>
            <p class="description">
              Terdapat lebih dari 1.000 perusahaan dan UMKM di seluruh Indonesia
              telah terdaftar hingga saat ini.
            </p>
          </div>
        </div>

        <div class="stats-card">
          <div class="image-wrapper partnership-image">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/partnership.png"
              quality="80"
              height="189"
              width="299"
              alt="Partnership"
            />
          </div>
          <div class="content">
            <h2 class="title">10.000+ Mitra</h2>
            <p class="description">
              Tercatat ada lebih dari 10.000 mitra pekerja kami yang terdaftar
              untuk meraih potensi yang mereka miliki.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="sub-hero" class="bg-custom-gradient mt-10">
    <atoms-container class="!text-white pt-10 pb-5">
      <p class="font-bold uppercase text-5xl text-center">
        Semua dalam satu platform
      </p>

      <div class="border mt-5 w-1/4 mx-auto" />

      <div class="flex items-center justify-center mt-10">
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

        <div class="flex flex-col text-white space-y-6 border-4 rounded-xl p-8">
          <div class="">
            <p class="flex items-center space-x-2">
              <img src="/images/icon/vacancy.svg" alt="lowongan" />
              <span class="font-extrabold">Lowongan Kerja</span>
            </p>

            <p class="flex items-center space-x-2 mt-4">
              <img src="/images/icon/wallet.svg" alt="wallet" />

              <span class="font-extrabold">Perhitungan & Gaji</span>
            </p>

            <p class="flex items-center space-x-2 mt-4">
              <img src="/images/icon/recruitment.svg" alt="recruitment" />

              <span class="font-extrabold">Rekrutment Pekerja</span>
            </p>
          </div>

          <n-card class="mt-8 bg-secondary-darken">
            <a href="#">
              <img
                src="/images/gplay.png"
                alt="Download Aplikasi Hayokerja"
                class="w-48 h-auto"
              />
            </a>

            <p class="mt-4 flex items-center text-white font-extrabold gap-2">
              Download Aplikasi Hayokerja

              <img src="/images/icon/icon-hk-app.svg" alt="icon-hk-app" />
            </p>
          </n-card>
        </div>
      </div>
    </atoms-container>
  </section>

  <section id="body-header" class="border-b-2">
    <!--    Item 1-->
    <div class="flex items-center justify-center">
      <div class="w-1/2 bg-primary-darken p-10 flex justify-end">
        <nuxt-img
          preload
          loading="lazy"
          src="/images/mobile-vacancy.svg"
          width="452"
          height="572"
        />
      </div>
      <div class="w-1/2 p-10 space-y-6">
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
        <p class="font-extrabold text-[33px]">Lowongan Kerja</p>
        <p class="font-normal text-[22px] text-justify">
          Mendapatkan pekerjaan impian yang sesuai <br />
          dengan minat dan bakat kini lebih mudah dan <br />
          cepat dalam satu platform.
        </p>
      </div>
    </div>

    <!--    Item 2 -->
    <div class="flex items-center justify-between">
      <div class="w-1/2 p-10 space-y-6 flex flex-col items-end">
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
        <p class="font-extrabold text-[33px]">Perhitungan & Gaji</p>
        <p class="font-normal text-[22px] text-justify">
          Hasil dapat diambil langsung maupun EWA <br />
          (Earned Wage Access) / kasbon. Kami telah <br />
          bekerja sama dengan perusahaan fintech <br />
          ternama.
        </p>
      </div>

      <div class="w-1/2 bg-primary-secondary-darken p-10 flex justify-start">
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
    <div class="flex items-center justify-center">
      <div class="w-1/2 bg-secondary p-10 flex justify-end">
        <nuxt-img
          preload
          loading="lazy"
          src="/images/perhitungangaji.svg"
          width="452"
          height="572"
        />
      </div>
      <div class="w-1/2 p-10 space-y-6">
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
        <p class="font-extrabold text-[33px]">Rekruitment Pekerja</p>
        <p class="font-normal text-[22px] text-justify">
          Pendaftaran lowongan kerja yang mudah juga <br />
          proses pendaftaran yang tidak dikenakan <br />
          biaya admin (gratis).
        </p>
      </div>
    </div>
  </section>

  <section id="body-content"></section>
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  margin: 10rem auto;
  position: relative;
  z-index: 50;
}

.stats-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
}

.image-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.company-image {
  top: -5rem;
  left: -2rem;
}

.partnership-image {
  top: -4rem;
  left: -2.5rem;
}

.content {
  text-align: center;
}

.title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.description {
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .stats-card {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }

  .image-wrapper {
    flex-shrink: 0;
    margin-right: 1.5rem;
    margin-bottom: 0;
  }

  .content {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .stats-container {
    flex-wrap: nowrap;
  }

  .stats-card {
    width: calc(50% - 1rem);
  }
}
</style>
