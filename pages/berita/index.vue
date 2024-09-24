<script setup>
import {
  NButton,
  NCard,
  NCarousel,
  NDivider,
  NTimeline,
  NTimelineItem,
} from "naive-ui";

import { reactive } from "vue";

import moment from "moment/min/moment-with-locales";
moment.locale("id");

definePageMeta({
  label: "Berita",
  order: 4,
  class: "!ring-0 !bg-opacity-0 !bg-transparent",
});

const local = reactive({
  data: null,
});

const { data, status, error, refresh, clear } = await useAsyncData(
  "article",
  async () => {
    const response = await $fetch(`${process.env.DATABASE_URL}/Articles/get`, {
      params: {
        jsonQuery: JSON.stringify({
          pipeline: [
            {
              $lookup: {
                from: "Users",
                let: { authorId: "$authorId" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$_id", "$$authorId"],
                      },
                    },
                  },
                  {
                    $lookup: {
                      from: "Workers",
                      localField: "email",
                      foreignField: "email",
                      as: "worker",
                    },
                  },
                  {
                    $unwind: {
                      path: "$worker",
                      preserveNullAndEmptyArrays: true,
                    },
                  },

                  {
                    $project: {
                      picture: 1,
                      nickname: {
                        $ifNull: ["$nickname", "$worker.fullName", "Admin"],
                      },
                    },
                  },
                ],
                as: "user",
              },
            },
            {
              $unwind: {
                path: "$user",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $addFields: {
                avatar: "$user.picture",
              },
            },
            {
              $match: {
                status: "Published",
              },
            },
            {
              $sort: {
                _publishedDate: -1,
              },
            },
          ],
        }),
        limit: 6,
      },
    });
    return response;
  },
);

local.data = data.value?.result;

console.log("data", local.data);
</script>

<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <p
              class="text-[#081178] font-extrabold text-[43px] leading-[65px] dark:text-white"
            >
              Kumpulan Berita/Artikel <br />
              Terbaru
            </p>

            <p class="lg:max-w-[80%]">
              Pasion kerja itu penting loh! Bayangkan ketika kalian memulai
              suatu pekerjaan, namun passion kalian bukan disitu, pasti
              membosankan.
            </p>

            <n-button
              size="large"
              type="success"
              class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto mt-5"
              >Baca Selengkapnya</n-button
            >
          </div>

          <div class="relative z-20">
            <nuxt-img
              preload
              loading="lazy"
              src="/images/berita/hero-article.png"
              quality="80"
              width="746"
              height="499"
              class="animate-bounce"
            />
          </div>
        </div>
      </atoms-container>
    </section>

    <section id="vacancy-list">
      <atoms-container>
        <n-card class="text-center bg-primary text-white mt-24 md:mt-64">
          <p class="text-xl md:text-2xl">Kumpulan Berita/Artikel Terbaru</p>
        </n-card>

        <div v-for="article in local.data" :key="article._id">
          <n-card class="my-10 shadow-lg">
            <div class="flex flex-col md:flex-row gap-10">
              <atoms-image
                width="526"
                height="320"
                class="object-contain rounded-lg"
                :src="article?.picture"
              />

              <div class="flex flex-col space-y-4">
                <p class="font-light text-lg">
                  {{ moment(article?._publishedDate).format(" DD MMMM YYYY") }}
                </p>

                <p class="font-bold text-xl">{{ article?.title }}</p>
                <p class="font-light text-lg">{{ article?.excerpt }}</p>

                <div class="flex items-center gap-4">
                  <nuxt-img
                    preload
                    loading="lazy"
                    width="40"
                    height="40"
                    src="/images/berita/user.svg"
                  />
                  <p>{{ article?.user?.nickname || "-" }}</p>
                </div>

                <div class="flex justify-end">
                  <n-button type="success">
                    <NuxtLink
                      :to="`/berita/${article.slug}`"
                      target="_blank"
                      class="text-white"
                    >
                      Lihat Selengkapnya
                    </NuxtLink>
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>
        </div>

        <n-button type="default" class="w-full p-6 mb-8">
          <nuxt-img
            src="/images/arrow-down.svg"
            width="15"
            height="15"
            class="mr-2"
            preload
            loading="lazy"
          />
          Muat lebih banyak
        </n-button>
      </atoms-container>
    </section>
  </div>
</template>
