<script setup>
import { useLoadingBar, NCard, NButton, useMessage } from "naive-ui";

import moment from "moment/min/moment-with-locales";
moment.locale("id");

const $title = ref("Berita");
const $description = ref(
  "Baca artikel dan berita terbaru serta menarik kami terkait dengan informasi seputar pekerjaan dan perusahaan",
);
const $image = ref("https://www.hayokerja.com/logo.png");

definePageMeta({
  order: 4,
  forceFloating: true,
  headerClass: "fixed bg-transparent top-0 !text-white",
  label: "Berita",
  title: "Berita",
});

useSeoMeta({
  title: () => $title.value,
  description: () => $description.value,
  ogTitle: () => $title.value,
  ogDescription: () => $description.value,
  ogImage: () => $image.value,
  ogImageAlt: () => $title.value,
  ogImageSecureUrl: () => $image.value,
  ogImageUrl: () => $image.value,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: () => $title.value,
  twitterDescription: () => $description.value,
  twitterImage: () => $image.value,
  twitterImageAlt: () => $title.value,
  robots: "index, follow",
});

const $loadingBar = useLoadingBar();
const $local = reactive({
  tags: null,
  selectedTag: null,
  selectedTags: null,
  openTagAdder: false,
  isSortAscending: true,

  openFilter: true,
  term: null,
  province: null,
  city: null,

  restResp: null,
  mainLoading: false,
  itemsLoading: false,
  defaultPipeline: [
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
});

const $page = ref(1);
const $newPage = ref(1);

const $getHeadlinePayload = computed(() => ({
  pipeline: [
    {
      $sort: {
        _publishedDate: -1,
      },
    },
    {
      $match: {
        status: "Published",
      },
    },
    ...$local.defaultPipeline,
  ],
}));

const {
  data: $headlineResp,
  pending: $headlinePending,
  refresh: $headlineRefresh,
} = await useAsyncData(
  "headline-article",
  async () =>
    $fetch(`${useRuntimeConfig().public.dbUrl}/Articles/get`, {
      params: {
        jsonQuery: JSON.stringify({
          ...$getHeadlinePayload.value,
        }),
        page: $page.value || 1,
        limit: 1,
      },
    }),
  {
    watch: [$page],
  },
);

const $onFetchRestArticle = async () => {
  $loadingBar.start();
  $local.itemsLoading = true;
  try {
    const _resp = await fetch(
      `${useRuntimeConfig().public.dbUrl}/Articles/get?` +
        new URLSearchParams({
          jsonQuery: JSON.stringify({
            pipeline: [
              {
                $sort: {
                  _publishedDate: -1,
                },
              },
              {
                $match: {
                  status: "Published",
                },
              },
              ...$local.defaultPipeline,
            ],
          }),
          page: $newPage.value || 1,
          limit: 6,
        }),
    );

    const _jsonResp = await _resp.json();

    if ($local.restResp?.result?.length > 0) {
      $local.restResp = {
        ...$local.restResp,
        ..._jsonResp,
        result: [...$local.restResp.result, ..._jsonResp.result],
      };
    } else {
      $local.restResp = _jsonResp;
    }
  } catch (error) {
  } finally {
    $local.itemsLoading = false;
    $loadingBar.finish();
  }
};

watch(
  () => $headlinePending.value,
  () => {
    if (!!$headlinePending.value) {
      $local.mainLoading = true;
      $loadingBar.start();
      return;
    }
    $local.mainLoading = false;
    $loadingBar.finish();
    window.scrollTo({ top: 0 });
  },
);

onMounted(async () => {
  await $onFetchRestArticle();
});
</script>

<template>
  <div>
    <section id="hero" class="relative mt-7">
      <atoms-container>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-5 p-10 order-2 md:order-none">
            <atoms-heading type="h1">
              Kumpulan Berita/Artikel Terbaru
            </atoms-heading>

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
      <atoms-container v-if="$local.restResp?.result?.length > 0">
        <n-card class="text-center bg-primary text-white mt-24 md:mt-64">
          <p class="text-xl md:text-2xl">Kumpulan Berita/Artikel Terbaru</p>
        </n-card>

        <div
          v-for="(article, index) in $local.restResp?.result"
          :key="article._id"
        >
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

        <n-button
          :disabled="$local.restResp?.result?.length < 5 || $local.itemsLoading"
          @click="
            () => {
              $newPage = $newPage + 1;
              $onFetchRestArticle();
            }
          "
          type="default"
          class="w-full p-6 mb-8"
        >
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
