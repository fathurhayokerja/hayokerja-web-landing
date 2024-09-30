<script setup>
import { NModal, NCarousel, NCarouselItem, NCard } from "naive-ui";
import { ref } from "vue";

import useBreakpoint from "~/composable/useBreakpoint.ts";

const items = ref([
  {
    number: 1,
    bgColor:
      "bg-secondary-darken hover:bg-secondary hover:scale-105 duration-300",
    imgSrc: "/images/pekerja/register.svg",
    title: "Daftar",
    modalContent: "Cari pekerja atau pekerjaan lebih mudah & efektif.",
    listItems: [
      "Kandidat yang selektif",
      "Lokasi kerja hingga detail pekerjaan lebih transparan",
      "Cari pekerja dan konfirmasi hasil wawancara lebih mudah",
    ],
  },
  {
    number: 2,
    bgColor: "bg-primary-darken hover:bg-primary hover:scale-105 duration-300",
    imgSrc: "/images/pekerja/interview-1.svg",
    title: "Wawancara",
    modalContent:
      "Pada tahap ini, Anda akan mengikuti wawancara dengan tim kami.",
    listItems: [
      "Persiapkan diri",
      "Pelajari profil perusahaan",
      "Siapkan pertanyaan",
    ],
  },
  {
    number: 3,
    bgColor: "bg-primary-darken hover:bg-primary hover:scale-105 duration-300",
    imgSrc: "/images/pekerja/check-1.svg",
    title: "Psikotes",
    modalContent:
      "Anda akan mengikuti serangkaian tes psikologi untuk menilai kecocokan Anda.",
    listItems: [
      "Latihan soal psikotes",
      "Istirahat cukup",
      "Penuhi kebutuhan nutrisi",
    ],
  },
  {
    number: 4,
    bgColor: "bg-primary-darken hover:bg-primary hover:scale-105 duration-300",
    imgSrc: "/images/pekerja/meditation-1.svg",
    title: "Diterima",
    modalContent:
      "Selamat! Anda telah diterima untuk bergabung dengan tim kami.",
    listItems: [
      "Tandatangani kontrak",
      "Persiapkan dokumen administrasi",
      "Mulai bekerja",
    ],
  },
  {
    number: 5,
    bgColor: "bg-primary-darken hover:bg-primary hover:scale-105 duration-300",
    imgSrc: "/images/pekerja/works-1.svg",
    title: "Bekerja",
    modalContent:
      "Selamat datang di tim kami! Anda siap untuk memulai pekerjaan Anda.",
    listItems: [
      "Pengenalan tim",
      "Pahami tanggung jawab",
      "Bangun komunikasi dengan kolega",
    ],
  },
]);

const breakpoints = useBreakpoint();

const showModal = ref(false);
const activeIndex = ref(0);
const carouselRef = ref(null);

const openModal = (index) => {
  activeIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const nextSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.next();
  }
};

const prevSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.prev();
  }
};
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10"
    >
      <div
        v-for="(item, index) in items"
        :data-aos="'fade-up'"
        :data-aos-delay="index * 100"
        :key="index"
        class="flex flex-col items-center space-y-32"
      >
        <div
          :class="[
            'rounded-full w-20 h-20 flex items-center justify-center',
            item.bgColor,
          ]"
        >
          <span class="text-white text-4xl font-bold">{{ item.number }}</span>
        </div>

        <div
          @click="openModal(index)"
          :class="[
            'w-full rounded-xl p-4 mt-8 space-y-24 flex flex-col items-center justify-center relative cursor-pointer',
            item.bgColor,
          ]"
        >
          <nuxt-img
            preload
            loading="lazy"
            :src="item.imgSrc"
            alt="Illustration"
            width="188"
            height="188"
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h2 class="text-2xl font-bold text-white cursor-pointer">
            {{ item.title }}
          </h2>
        </div>
      </div>
    </div>

    <n-modal
      v-model:show="showModal"
      preset="card"
      class="w-full md:w-[70%]"
      @close="closeModal"
    >
      <template #header>
        <div>
          <atoms-heading
            :type="breakpoints.mdAndDown ? 'h6' : 'h3'"
            class="text-center uppercase dark:text-white"
            >Proses Perekrutan</atoms-heading
          >
        </div>
      </template>

      <div class="relative">
        <atoms-icon
          @click="prevSlide"
          name="arrow-left"
          size="25"
          class="absolute z-20 top-1/2 transform -translate-y-1/2 text-gray-200 bg-gray-400 rounded-full px-2 py-4"
        />

        <n-carousel
          ref="carouselRef"
          :show-arrow="false"
          :show-dots="false"
          class="mt-10"
        >
          <n-carousel-item v-for="(item, index) in items" :key="index">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="flex items-center justify-center">
                <nuxt-img
                  preload
                  loading="lazy"
                  :src="item.imgSrc"
                  class="w-[70%] md:w-full"
                />
              </div>
              <div
                class="flex flex-col bg-secondary-darken p-6 gap-6 rounded-2xl"
              >
                <div
                  class="rounded-full w-20 h-20 flex items-center justify-center bg-white"
                >
                  <span class="text-[#9397AD] text-4xl font-bold">{{
                    item.number
                  }}</span>
                </div>

                <atoms-heading type="h3" class="text-white">
                  {{ item.title }}
                </atoms-heading>

                <p class="text-xl text-white font-light">
                  {{ item.modalContent }}
                </p>

                <ul class="list-disc text-xl p-4">
                  <li
                    v-for="(listItem, idx) in item.listItems"
                    :key="idx"
                    class="text-white"
                  >
                    {{ listItem }}
                  </li>
                </ul>
              </div>
            </div>
          </n-carousel-item>
        </n-carousel>

        <atoms-icon
          @click="nextSlide"
          name="arrow-right"
          size="25"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-200 bg-gray-400 rounded-full px-2 py-4"
        />
      </div>
    </n-modal>
  </div>
</template>

<style scoped></style>
