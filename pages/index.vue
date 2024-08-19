<script setup>
import {
  NButton,
  NTimeline,
  NTimelineItem,
  NCarousel,
  NCarouselItem,
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
  <section id="hero">
    <atoms-container class="text-start grid grid-cols-12 rounded-2xl">
      <section class="col-span-full lg:col-span-8 flex flex-col justify-center">
        <atoms-heading
          >Penyedia jasa pengelolaan <br />
          pekerja dan kebutuhan <br />
          <span class="text-primary-lighten">Sumber Daya Manusia.</span>
        </atoms-heading>
        <br />
        <atoms-text class="lg:max-w-[80%]">
          Manajemen absensi, gajian hingga rekrut pekerja jadi lebih mudah dan
          cepat bersama kami. Terbukti dengan lebih dari 1.000+ partner dan
          10.000+ mitra telah merasakan kemudahan dan manfaatnya.
        </atoms-text>
        <br />
        <div class="flex flex-wrap gap-3 item-center">
          <n-button
            size="large"
            type="primary"
            class="shadow-lg shadow-primary/50 w-full lg:w-auto"
            >Mulai Gratis</n-button
          >
          <n-button
            size="large"
            type="success"
            class="shadow-lg shadow-secondary/50 w-full lg:w-auto"
            >Bagaimana Cara Kerjanya?</n-button
          >
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <section class="col-span-full lg:col-span-4">
        <nuxt-img
          preload
          loading="lazy"
          src="/images/preview.hero.png"
          quality="80"
        />
      </section>
    </atoms-container>
  </section>
  <section id="sub-hero" class="bg-primary">
    <br />
    <br />
    <atoms-container class="grid gap-10 lg:grid-cols-2 !text-white">
      <section>
        <atoms-heading type="h4" class="mb-2">1.000+ Perusahaan</atoms-heading>
        <atoms-text type="span"
          >Terdapat lebih dari 1.000 perusahaan dan UMKM diseluruh Indonesia
          telah terdaftar hingga saat ini.</atoms-text
        >
      </section>
      <section>
        <atoms-heading type="h4" class="mb-2"
          >10.000+ Mitra terdaftar</atoms-heading
        >
        <atoms-text type="span"
          >Ada lebih dari 10.000 mitra pekerja kami yang terdaftar untuk meraih
          potensi yang mereka miliki.</atoms-text
        >
      </section>
    </atoms-container>
    <br />
    <br />
  </section>
  <section id="body-header">
    <atoms-container>
      <br />
      <br />
      <atoms-heading type="h2" class="lg:text-center"
        >Semua dalam <span class="text-primary-lighten">satu platform.</span>
      </atoms-heading>
      <br />
      <br />
      <section class="grid gap-5 grid-cols-12">
        <div
          class="col-span-full lg:col-span-8 p-5 bg-white dark:bg-black rounded-2xl lg:hover:scale-105 transition-all ease-in-out duration-300"
        >
          <div>
            <atoms-icon
              flat
              name="briefcase-search"
              class="rounded-2xl bg-primary text-white p-5"
              :size="25"
            />
          </div>
          <br />
          <atoms-heading type="h4" class="mb-2"
            >Lowongan pekerjaan</atoms-heading
          >
          <atoms-text
            >Mendapatkan pekerjaan impian yang sesuai dengan minat dan bakat
            kini lebih mudah dan cepat dalam satu platform.</atoms-text
          >
        </div>
        <div
          class="col-span-full lg:col-span-4 p-5 bg-white dark:bg-black rounded-2xl lg:hover:scale-105 transition-all ease-in-out duration-300"
        >
          <div>
            <atoms-icon
              flat
              name="account-search"
              class="rounded-2xl bg-primary text-white p-5"
              :size="25"
            />
          </div>
          <br />
          <atoms-heading type="h4" class="mb-2"
            >Rekruitment pekerja</atoms-heading
          >
          <atoms-text
            >Pendaftaran lowongan kerja yang mudah juga proses pendaftaran yang
            tidak dikenakan biaya admin (gratis).</atoms-text
          >
        </div>
      </section>
      <br />
      <section class="grid gap-5 grid-cols-12">
        <div
          class="col-span-full lg:col-span-4 p-5 bg-white dark:bg-black rounded-2xl lg:hover:scale-105 transition-all ease-in-out duration-300"
        >
          <div>
            <atoms-icon
              flat
              name="clipboard-list"
              class="rounded-2xl bg-primary text-white p-5"
              :size="25"
            />
          </div>
          <br />
          <atoms-heading type="h4" class="mb-2">Absensi</atoms-heading>
          <atoms-text
            >Absensi hanya dengan berfoto selfie yang secara otomatis akan
            melacak waktu dan lokasi Anda. Tidak perlu repot lagi harus membuat
            laporan, karena semua sudah kami lakukan dan tersimpan kedalam
            sistem.</atoms-text
          >
        </div>
        <div
          class="col-span-full lg:col-span-8 p-5 bg-white dark:bg-black rounded-2xl lg:hover:scale-105 transition-all ease-in-out duration-300"
        >
          <div>
            <atoms-icon
              flat
              name="wallet"
              class="rounded-2xl bg-primary text-white p-5"
              :size="25"
            />
          </div>
          <br />
          <atoms-heading type="h4" class="mb-2"
            >Perhitungan & gaji</atoms-heading
          >
          <atoms-text>
            Hasil dapat diambil langsung maupun EWA (Earned Wage Access) /
            kasbon. Kami telah bekerja sama dengan perusahaan fintech
            ternama.</atoms-text
          >
        </div>
      </section>
      <br />
      <br />
      <section class="grid grid-cols-12 gap-10">
        <div
          class="col-span-full lg:col-span-4 bg-secondary rounded-2xl flex items-center justify-center pt-5"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/vacancy.content.png"
            quality="80"
            height="500"
          />
        </div>
        <div class="col-span-full lg:col-span-8 content-center">
          <atoms-heading type="h4" class="text-secondary"
            >Lowongan Kerja</atoms-heading
          >
          <atoms-heading type="h2"
            >Cari pekerja atau pekerjaan lebih mudah & efektif.</atoms-heading
          >
          <br />
          <ul class="list-disc translate-x-5">
            <li>
              <atoms-text>Kandidat yang selektif </atoms-text>
            </li>
            <li>
              <atoms-text
                >Lokasi kerja hingga detail pekerjaan lebih transparan
              </atoms-text>
            </li>
            <li>
              <atoms-text
                >Cari pekerja dan konfirmasi hasil wawancara lebih mudah
              </atoms-text>
            </li>
          </ul>
          <br />
          <n-button
            size="large"
            type="success"
            class="shadow-lg shadow-secondary/50 w-full lg:w-auto"
            >Lihat Lowongan</n-button
          >
        </div>
      </section>
      <br />
      <br />
      <section class="grid grid-cols-12 gap-10">
        <div
          class="order-2 lg:order-1 col-span-full lg:col-span-5 content-center"
        >
          <atoms-heading type="h4" class="text-primary"
            >Perhitungan dan gaji</atoms-heading
          >
          <atoms-heading type="h2"
            >Cepat dan akurat dalam sekali proses bayar gaji
            pekerja.</atoms-heading
          >
          <br />
          <ul class="list-disc translate-x-5">
            <li>
              <atoms-text
                >Invoice langsung dibuat dan bisa Anda lihat
                dimanapun</atoms-text
              >
            </li>
            <li>
              <atoms-text>Tersinkronisasi dengan sistem absensi </atoms-text>
            </li>
            <li>
              <atoms-text>Pencairan gaji pekerja lebih mudah </atoms-text>
            </li>
          </ul>
          <br />
          <n-button
            size="large"
            type="primary"
            class="shadow-lg shadow-primary/50 w-full lg:w-auto"
            >Review Absensi</n-button
          >
        </div>
        <div
          class="order-1 lg:order-2 col-span-full lg:col-span-7 bg-primary rounded-2xl flex items-center justify-center p-5 pt-10"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/invoice.png"
            quality="80"
            height="400"
          />
        </div>
      </section>
      <br />
      <br />
      <section class="grid grid-cols-12 gap-10">
        <div
          class="col-span-full lg:col-span-4 bg-secondary rounded-2xl flex items-center justify-center pt-5"
        >
          <nuxt-img
            preload
            loading="lazy"
            src="/images/attendance.content.png"
            quality="80"
            height="500"
          />
        </div>
        <div class="col-span-full lg:col-span-8 content-center">
          <atoms-heading type="h4" class="text-secondary"
            >Absensi</atoms-heading
          >
          <atoms-heading type="h2"
            >Catat serta lihat riwayat lokasi dan waktu pekerja secara
            realtime.</atoms-heading
          >
          <br />
          <ul class="list-disc translate-x-5">
            <li>
              <atoms-text>Lokasi absensi dapat dilacak</atoms-text>
            </li>
            <li>
              <atoms-text>Atur shift untuk setiap pekerjaan </atoms-text>
            </li>
            <li>
              <atoms-text
                >Pekerja hanya perlu melakukan selfie untuk melakukan absensi
              </atoms-text>
            </li>
          </ul>
          <br />
          <n-button
            size="large"
            type="success"
            class="shadow-lg shadow-secondary/50 w-full lg:w-auto"
            >Mulai Absensi</n-button
          >
        </div>
      </section>
      <br />
      <br />
      <br />
    </atoms-container>
  </section>
  <section id="body-content" class="bg-black !text-white">
    <atoms-container class="lg:text-center">
      <br />
      <br />
      <atoms-heading type="h2">Bagaimana cara kami bekerja? </atoms-heading>
      <br />
      <atoms-text
        >Tidak memerlukan proses yang lama ketika hendak bergabung dengan kami.
        Hanya dengan beberapa langkah dan verifikasi, Anda dapat semua
        keuntungannya.</atoms-text
      >
      <br />
      <br />
      <br />
      <div class="flex justify-center items-center text-start">
        <n-timeline size="large" class="w-fit">
          <n-timeline-item type="info" line-type="dashed">
            <template #header>
              <atoms-heading type="h4" class="!text-white"
                >Daftarkan diri Anda</atoms-heading
              ></template
            >
            <atoms-text class="!text-gray-400"
              >Isi lengkap biodata Anda dan buat akun Anda sebagai perusahaan
              atau mitra pekerja, kemudian ajukan akun Anda.</atoms-text
            >
            <br />
            <br />
          </n-timeline-item>
          <n-timeline-item type="warning">
            <template #header>
              <atoms-heading type="h4" class="!text-white"
                >Verifikasi akun Anda</atoms-heading
              ></template
            >
            <atoms-text class="!text-gray-400"
              >Proses ini akan dilakukan langsung setelah Anda mendaftar oleh
              tim khusus kami dan hanya memakan waktu kurang dari 24
              jam.</atoms-text
            >
            <br />
            <br />
          </n-timeline-item>
          <n-timeline-item type="success" line-type="dashed">
            <template #header>
              <atoms-heading type="h4" class="!text-white"
                >Bergabung dan nikmati fiturnya</atoms-heading
              ></template
            >
            <atoms-text class="!text-gray-400"
              >Setelah bergabung, Anda dapat menggunakan fitur-fitur yang kami
              sediakan. Mulai daftar sekarang dan rasakan manfaatnya bersama
              kami.</atoms-text
            >
            <br />
            <br
          /></n-timeline-item>
        </n-timeline>
      </div>
    </atoms-container>
    <br />
    <br />
  </section>
  <section id="body-content-2">
    <atoms-container class="lg:text-center">
      <br />
      <br />
      <atoms-heading type="h2">Area Jangkauan Kami.</atoms-heading>
      <br />
      <atoms-text>
        Jangkau kami diberbagai kota di Indonesia dan nikmati kemudahan dan
        manfaatnya bersama kami.
      </atoms-text>
      <br />
      <br />
      <nuxt-img
        preload
        loading="lazy"
        src="/images/area.jpeg"
        quality="80"
        class="w-full rounded-2xl"
      />
    </atoms-container>
    <br />
    <br />
  </section>
  <section id="body-footer" class="bg-black !text-white">
    <atoms-container class="lg:text-center">
      <br />
      <br />
      <atoms-heading type="h2"
        >Apa yang mereka katakan tentang kami?</atoms-heading
      >
      <br />
      <br />
      <n-carousel
        effect="card"
        show-arrow
        autoplay
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        style="height: 500px"
        :show-dots="false"
      >
        <n-carousel-item
          :style="{ width: '70%' }"
          class="bg-primary rounded-2xl"
        >
          <div>hello</div>
        </n-carousel-item>
        <n-carousel-item
          :style="{ width: '70%' }"
          class="bg-secondary rounded-2xl"
        >
          <div>hello</div>
        </n-carousel-item>
        <n-carousel-item
          :style="{ width: '70%' }"
          class="bg-primary rounded-2xl"
        >
          <div>hello</div>
        </n-carousel-item>
      </n-carousel>
    </atoms-container>
    <br />
    <br />
  </section>
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
