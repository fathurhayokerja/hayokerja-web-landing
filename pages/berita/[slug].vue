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

const local = reactive({
  data: null,
});
const route = useRoute();

const { data } = await useAsyncData("lowongan", async () => {
  const response = await $fetch(
    `${process.env.DATABASE_URL}/Articles/getOne/${route.params.slug}`,
    {
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
          ],
        }),
        limit: 6,
      },
    },
  );
  return response;
});

local.data = data.value?.result;
</script>

<template>
  <div>
    <section id="image" class="relative z-20">
      <atoms-container>
        <div class="flex justify-center">
          <nuxt-img
            preload
            loading="lazy"
            class="w-full h-[600px] mt-6 rounded-2xl"
            :src="local.data?.picture"
          />
        </div>

        <div class="flex flex-col md:flex-row mt-24 space-y-4 md:space-y-0">
          <n-card
            class="w-full md:w-[70%] bg-primary md:rounded-tr-none md:rounded-br-none"
          >
            <atoms-heading type="h4" class="text-white">
              {{ local.data?.title }}
            </atoms-heading>
            <p class="font-light text-white mt-6">
              Dilihat {{ local.data?.viewCount }}
            </p>
          </n-card>

          <n-card
            class="w-full md:w-[30%] bg-secondary md:rounded-tl-none md:rounded-bl-none"
          >
            <div class="flex items-center justify-end gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7099 15.1788L12.6099 13.3288C12.0699 13.0088 11.6299 12.2388 11.6299 11.6088V7.50879"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <atoms-heading type="h5" class="text-white mb-3">
                {{ moment(local.data?._publishedDate).format("DD MMMM YYYY") }}
              </atoms-heading>
            </div>

            <div class="flex items-center justify-end">
              <nuxt-img
                preload
                loading="lazy"
                class="w-[50px] md:[70px] h-[50px] md:[70px]"
                src="/images/berita/user.svg"
              />
            </div>

            <atoms-heading type="h5" class="text-right text-white mt-3">
              Diposting Oleh Admin
            </atoms-heading>
          </n-card>
        </div>

        <n-card class="mt-16">
          <article class="text-lg" v-html="local.data?.content" />
        </n-card>

        <div class="flex items-center justify-center my-10">
          <n-button type="success">Kembali</n-button>
        </div>
      </atoms-container>
    </section>
  </div>
</template>
