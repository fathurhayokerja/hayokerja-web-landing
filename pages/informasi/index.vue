<script setup>
import { NButton, NCard, NDivider, useLoadingBar } from "naive-ui";

import { ref, reactive, watch } from "vue";

definePageMeta({
  label: "Informasi",
  order: 5,
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

const local = reactive({
  data: null,
  term: null,
});
const container = ref(null);
const openStates = ref([]);

const loadingBar = useLoadingBar();

const toggleAccordion = (index) => {
  openStates.value[index] = !openStates.value[index];
};

const { data, pending } = await useAsyncData("faq", async () => {
  const response = await $fetch(`${process.env.DATABASE_URL}/FAQ/get`, {
    params: {
      jsonQuery: JSON.stringify({
        title: {
          $regex: local.term || "",
          $options: "i",
        },
      }),
      limit: 5,
    },
  });

  return response;
});

local.data = data.value?.result;

if (local.data) {
  openStates.value = new Array(local.data.length).fill(false);
}

watch(pending, () => {
  if (!!pending.value) {
    loadingBar.start();
    return;
  }
  loadingBar.finish();
});
</script>

<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="flex items-center justify-center order-2 md:order-none">
            <p class="title-hero font-extrabold">FAQ</p>
          </div>

          <div class="relative z-20">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/informasi/hero-info.svg"
              quality="80"
              width="746"
              height="499"
              class="animate-bounce"
            />
          </div>
        </div>
      </atoms-container>
    </section>

    <section id="faq">
      <atoms-container>
        <n-card
          class="flex items-center justify-start md:justify-center bg-primary-gradient text-white mt-24 md:mt-64 space-y-2"
        >
          <p class="text-xl font-bold md:text-[40px]">
            Pertanyaan yang sering ditanyakan
          </p>
          <div class="flex items-center justify-start md:justify-center mt-2">
            <n-divider class="w-1/2" />
          </div>
        </n-card>

        <p class="font-bold md:text-[30px] my-5 text-center">
          Punya pertanyaan? <br />
          Klik disini atau cari dibawah
        </p>

        <div v-for="(faq, index) in local.data" :key="faq._id" class="my-5">
          <n-card>
            <button
              type="button"
              class="w-full px-4 py-4 text-left"
              @click="toggleAccordion(index)"
            >
              <div class="flex items-center justify-between gap-4 md:gap-0">
                <span class="font-bold md:text-xl"> {{ faq?.title }} </span>
                <div
                  class="bg-primary-secondary-darken w-auto h-auto rounded-full"
                >
                  <svg
                    :class="{
                      'bg-primary rounded-full transform rotate-180':
                        openStates[index],
                    }"
                    class="w-6 md:w-8 h-6 md:h-8 text-white"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </button>

            <div
              class="relative overflow-scroll transition-all duration-700"
              :style="{ maxHeight: openStates[index] ? '1000px' : '0px' }"
            >
              <div class="px-4 pb-4">
                <article
                  class="font-normal md:text-[20px]"
                  v-html="faq?.content"
                />
              </div>
            </div>
          </n-card>
        </div>
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
.title-hero {
  font-size: 24px;
}

@media (min-width: 768px) {
  .title-hero {
    font-size: 80px;
  }
}
</style>
