<script setup>
import { ref, watch } from "vue";
import { NDrawer, NDrawerContent, NSpin } from "naive-ui";

const props = defineProps({
  show: Boolean,
  vacancySlug: String,
});

const emit = defineEmits(["update:show"]);

const drawerActive = ref(props.show);
const vacancyDetail = ref(null);
const loading = ref(false);

const local = reactive({
  clientData: null,
});

watch(
  () => props.show,
  (newVal) => {
    drawerActive.value = newVal;
  },
);

watch(drawerActive, (newVal) => {
  emit("update:show", newVal);
});

watch(
  () => props.vacancySlug,
  async (newSlug) => {
    if (newSlug) {
      await fetchVacancyDetail(newSlug);
    }
  },
);

const pipeline = [
  {
    $match: {
      slug: props.vacancySlug,
    },
  },
  {
    $lookup: {
      from: "Clients",
      localField: "clientId",
      foreignField: "_id",
      as: "clientData",
    },
  },
  {
    $unwind: "$clientData",
  },
  {
    $project: {
      title: 1,
      status: 1,
      excerpt: 1,
      content: 1,
      salary: 1,
      salaryStatus: 1,
      province: 1,
      city: 1,
      "clientData.name": 1,
      "clientData.email": 1,
      // Tambahkan field lain yang Anda butuhkan dari dokumen Client
    },
  },
];

const fetchVacancyDetail = async (slug) => {
  loading.value = true;
  const { data, error } = await useAsyncData(`vacancy-${slug}`, () =>
    $fetch(`${useRuntimeConfig().public.dbUrl}/Vacancies/getOne/${slug}`, {
      params: {
        jsonQuery: JSON.stringify({ pipeline }),
      },
    }),
  );

  if (error.value) {
    console.error("Error fetching vacancy details:", error.value);
  } else {
    vacancyDetail.value = data.value.result;
    console.log(vacancyDetail.value);
  }

  loading.value = false;
};
</script>

<template>
  <n-drawer v-model:show="drawerActive" placement="bottom" :width="500">
    <n-drawer-content>
      <template #header>
        <h3>Detail Lowongan</h3>
      </template>
      <n-spin :show="loading">
        <div v-if="vacancyDetail">
          <div class="flex items-center gap-4">
            <nuxt-img
              preload
              width="60"
              height="60"
              loading="lazy"
              src="/images/pekerja/icon-vacancy.svg"
            />
            <div class="flex flex-col">
              <!--              <p class="text-xl font-light text-gray-400 dark:text-white">-->
              <!--                {{-->
              <!--                  vacancyDetail.clientData[0]?.name-->
              <!--                    ? vacancyDetail.clientData[0]?.name-->
              <!--                    : ""-->
              <!--                }}-->
              <!--              </p>-->
              <atoms-heading type="h4">{{ vacancyDetail.title }}</atoms-heading>
            </div>
          </div>

          <!--          <p>{{ vacancyDetail.clientData[0]?.name }}</p>-->
          <!--          <p>{{ vacancyDetail.city }} - {{ vacancyDetail.province }}</p>-->
          <!--          <p>Gaji: {{ vacancyDetail.salaryStatus }}</p>-->
          <!--          <div v-html="vacancyDetail.description"></div>-->
        </div>
        <div v-else-if="!loading">Tidak ada data tersedia.</div>
      </n-spin>
    </n-drawer-content>
  </n-drawer>
</template>
