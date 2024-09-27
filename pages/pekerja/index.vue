<script setup>
import { NButton, NCard, NDivider } from "naive-ui";
import { ref, reactive } from "vue";

import moment from "moment/min/moment-with-locales";
moment.locale("id");

definePageMeta({
  order: 2,
  label: "Pekerja",
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

const local = reactive({
  term: "",
  province: "",
  city: "",
  page: 1,
  limit: 5,
  total: 0,
  result: null,
  isSortAscending: null,
  clientData: null,
});

const items = ref([
  {
    number: 1,
    bgColor: "bg-secondary-darken",
    imgSrc: "/images/pekerja/register.svg",
    title: "Daftar",
  },
  {
    number: 2,
    bgColor: "bg-primary-darken",
    imgSrc: "/images/pekerja/interview-1.svg",
    title: "Wawancara",
  },
  {
    number: 3,
    bgColor: "bg-primary-darken",
    imgSrc: "/images/pekerja/check-1.svg",
    title: "Psikotes",
  },
  {
    number: 4,
    bgColor: "bg-primary-darken",
    imgSrc: "/images/pekerja/meditation-1.svg",
    title: "Diterima",
  },
  {
    number: 5,
    bgColor: "bg-primary-darken",
    imgSrc: "/images/pekerja/works-1.svg",
    title: "Bekerja",
  },
]);

function removeHTMLEntities(text) {
  if (typeof document !== "undefined") {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }
  return text;
}

const { data, status, error, refresh, clear } = await useAsyncData(
  "lowongan",
  async () => {
    local.isLoading = true;
    const response = await $fetch(`${process.env.DATABASE_URL}/Vacancies/get`, {
      params: {
        jsonQuery: JSON.stringify({
          pipeline: [
            {
              $lookup: {
                from: "Clients",
                localField: "clientId",
                foreignField: "_id",
                as: "clientData",
              },
            },
            {
              $match: {
                status: "Published",
              },
            },
            {
              $sort: { _updatedDate: -1 },
            },
          ],
        }),
        limit: 6,
      },
    });
    return response;
  },
);

local.result = data.value?.result;
</script>
<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <atoms-heading type="h1">
              Mencari Kerja lebih mudah bersama kami
            </atoms-heading>

            <p class="lg:max-w-[80%]">
              Kami membantu Anda mencarikan pekerjaan yang sesuai dan terdekat
              dengan posisi Anda.Cukup dengan mendaftar dan verifikasi diri
              Anda, tanpa pengajuan CV, terima wawancara,lalu mulai bekerja
              hingga mendapatkan penghasilan
            </p>

            <n-button
              size="large"
              type="success"
              class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto mt-5"
              >Daftar Gratis Sekarang</n-button
            >
          </div>

          <div class="relative z-20">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/pekerja/peoplepresen.svg"
              quality="80"
              width="746"
              height="499"
              class="animate-bounce"
            />
          </div>
        </div>

        <div class="flex items-center justify-center">
          <n-card class="bg-primary w-full md:w-3/4 mt-16 md:mt-36">
            <div
              class="flex flex-col md:flex-row items-center md:items-start px-4"
            >
              <div
                class="w-full md:w-1/2 text-white space-y-4 md:space-y-6 text-center md:text-left my-auto"
              >
                <atoms-heading type="h2">
                  Ayo, Download Sekarang
                </atoms-heading>
                <p class="font-light text-lg">
                  Semua dalam satu Platform praktis dan mudah
                </p>
              </div>

              <div class="w-full md:w-1/2">
                <div class="px-5 py-4 rounded-2xl bg-secondary-darken">
                  <a>
                    <nuxt-img
                      loading="lazy"
                      preload
                      src="/images/gplay.png"
                      alt="Download Aplikasi Hayokerja"
                      class="w-full mx-auto"
                    />
                  </a>

                  <p
                    class="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-xl md:text-2xl text-white font-extrabold gap-2"
                  >
                    <atoms-heading type="h4">
                      Download Aplikasi Hayokerja
                    </atoms-heading>

                    <nuxt-img
                      preload
                      loading="lazy"
                      src="/images/icon/icon-hk-app.svg"
                      width="60"
                      height="60"
                      alt="icon-hk-app"
                      class="md:w-[60px] md:h-[60px]"
                    />
                  </p>
                </div>
              </div>
            </div>
          </n-card>
        </div>
      </atoms-container>
    </section>

    <section id="sub-body-content" class="my-16">
      <div
        class="flex flex-col md:flex-row items-center gap-8 md:gap-20 my-auto py-6 md:py-10"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="relative w-full md:w-1/2 mb-8 md:mb-0"
        >
          <nuxt-img
            class="w-full md:w-[850px]"
            preload
            loading="lazy"
            src="/images/vector-body-content.svg"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <nuxt-img
              class="object-contain w-full h-auto md:h-[750px]"
              preload
              loading="lazy"
              src="/images/pekerja/absensipreview.svg"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="w-full md:w-1/2 px-4 md:px-12 space-y-4 md:space-y-6"
        >
          <atoms-heading type="h2"> Absensi </atoms-heading>
          <p
            class="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-primary dark:text-white leading-tight"
          >
            Lakukan absensi cukup <br class="hidden md:inline" />
            dengan aplikasi
          </p>
          <ul
            class="list-disc pl-6 font-light text-lg md:text-xl lg:text-[24px]"
          >
            <li>Kandidat yang selektif</li>
            <li>Lokasi kerja hingga detail pekerjaan lebih transparan</li>
            <li>Cari pekerja dan konfirmasi hasil wawancara lebih mudah</li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 my-auto py-6 md:py-10"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="w-full md:w-1/2 px-4 md:px-20 space-y-4 md:space-y-6"
        >
          <atoms-heading type="h2"> Pekerjaan </atoms-heading>
          <p
            class="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-primary dark:text-white leading-tight"
          >
            Cari pekerjaan impian kini <br class="hidden md:inline" />
            lebih mudah & efektif
          </p>
          <ul
            class="list-disc pl-6 font-light text-lg md:text-xl lg:text-[24px]"
          >
            <li>Perusahaan partner yang sudah terverifikasi</li>
            <li>
              Rekomendasi pekerjaan yang sesuai dengan minat dan bakat Anda
            </li>
            <li>
              Dapat diundang langsung oleh perusahaan partner berdasarkan profil
              Anda
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="relative w-full md:w-1/2 mb-8 md:mb-0"
        >
          <nuxt-img
            class="w-full"
            preload
            loading="lazy"
            src="/images/vector-body-content2.svg"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <nuxt-img
              class="object-contain w-full h-auto md:h-[750px]"
              preload
              loading="lazy"
              src="/images/mobile-vacancy.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="recruitment-timeline" class="my-10">
      <atoms-container data-aos="fade-up" data-aos-duration="1000">
        <atoms-heading type="h2" class="text-center">
          Proses Perekrutan
        </atoms-heading>

        <div class="flex justify-center">
          <n-divider class="w-1/2" />
        </div>

        <organism-recruitment-timeline />
      </atoms-container>
    </section>

    <section id="vacancy-list">
      <atoms-container>
        <n-card class="text-center bg-primary text-white">
          <atoms-heading type="h3"
            >Lowongan Pekerjaan yang tersedia</atoms-heading
          >
        </n-card>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6"
        >
          <n-card
            class="rounded-lg shadow-lg"
            v-for="(vacancylist, index) in local.result"
            :key="vacancylist._id"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-center gap-4">
              <nuxt-img
                preload
                width="60"
                height="60"
                loading="lazy"
                src="/images/pekerja/icon-vacancy.svg"
              />
              <div class="flex flex-col">
                <p class="text-xl font-light text-gray-400 dark:text-white">
                  {{
                    vacancylist.clientData[0]?.name
                      ? vacancylist.clientData[0]?.name
                      : ""
                  }}
                </p>
                <p class="text-lg font-bold text-gray-500 dark:text-white">
                  {{ vacancylist?.title }}
                </p>
              </div>
            </div>

            <p class="text-sm mt-6">
              Tips jitu keluar dari status pengangguran. Kamu sudah lama
              menganggur? Baru lulus tapi belum dapat pekerjaan? Cari kerja
              memang bukan hal yang mudah
            </p>

            <n-divider />

            <p class="text-xl mb-2 font-bold text-gray-500 dark:text-white">
              Detil Pekerjaan
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-4">
                <nuxt-img
                  preload
                  width="24"
                  height="24"
                  loading="lazy"
                  src="/images/pekerja/time.svg"
                />
                <span>
                  {{ moment(vacancylist?._createdDate).fromNow() }}
                </span>
              </div>
              <div class="flex items-center gap-4">
                <nuxt-img
                  preload
                  width="24"
                  height="24"
                  loading="lazy"
                  src="/images/pekerja/location.svg"
                />
                <span
                  >{{ vacancylist?.city }} - {{ vacancylist?.province }}
                </span>
              </div>
              <div class="flex items-center gap-4">
                <nuxt-img
                  preload
                  width="24"
                  height="24"
                  loading="lazy"
                  src="/images/pekerja/money.svg"
                />

                <span
                  >Gaji /
                  {{
                    vacancylist.salaryStatus?.includes("day")
                      ? "Per hari"
                      : "Per bulan"
                  }}
                </span>
              </div>
            </div>

            <n-divider />

            <p class="text-xl font-bold text-gray-500 dark:text-white">
              Deskripsi
            </p>

            <div class="mt-2">
              {{ removeHTMLEntities(vacancylist?.excerpt) }}
            </div>

            <div class="flex justify-end mt-3">
              <n-button type="success">Lihat Selengkapnya</n-button>
            </div>
          </n-card>
        </div>
      </atoms-container>
    </section>

    <section id="testimonials" class="mt-10">
      <organism-testimonial-video />
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

<style scoped></style>
