<script setup>
import { NButton, NBadge, NDropdown } from "naive-ui";

const route = useRoute();
const router = useRouter();
const $local = reactive({
  mobileOpen: false,
  scrolled: false,
});

const $getRouteItems = router?.options?.routes
  ?.filter((it) => !it.meta?.hidden && it.meta?.label)
  ?.sort((item, items) => item?.meta?.order - items?.meta?.order)
  ?.map((it) => {
    return {
      to: it?.path,
      ...(it?.meta || {}),
    };
  });

const $isActive = (payload = null) => {
  const routePath = route?.path?.replace(/\//g, "");
  if (
    payload?.children?.find((it) => it.to?.replace(/\//g, "") === routePath) ||
    routePath === payload.to?.replace(/\//g, "")
  ) {
    return true;
  }
  return false;
};

const $isTransparent = computed(() => {
  const finder = $getRouteItems?.find((it) => $isActive(it));
  return (
    finder?.transparent ||
    finder?.children?.find(
      (x) =>
        x.transparent &&
        x.to?.replace(/\//g, "") === route.path?.replace(/\//g, "")
    ) ||
    false
  );
});
</script>

<template>
  <atoms-container>
    <!-- {{ $items }} -->
    <br />
    <nav class="flex items-center justify-between">
      <nuxt-img src="/images/hayokerja.png" quality="80" width="100" />

      <section class="flex justify-center items-center">
        <div
          v-for="(x, i) in $getRouteItems?.filter((_item) => _item?.label)"
          :key="i + 1"
          :class="[
            'mx-3 mb-1',
            (!$local.scrolled && route.meta.unselectedClass) ||
              'hover:text-primary text-black dark:text-white',
          ]"
        >
          <n-badge
            dot
            processing
            type="info"
            :show="$isActive(x)"
            :offset="[-((x.label?.length / 2) * 8), 30]"
          >
            <n-dropdown
              v-if="x.children"
              trigger="hover"
              :options="
                x.children?.map((_item) => {
                  return {
                    ..._item,
                    props: {
                      onClick: () => router.push({ path: _item?.to || '#' }),
                    },
                  };
                })
              "
              placement="bottom-start"
            >
              <atoms-text
                span
                class="!no-underline capitalize !cursor-pointer !py-4 !text-inherit"
                :to="x.to"
                >{{ x.label }}</atoms-text
              >
            </n-dropdown>
            <atoms-text
              v-else
              span
              class="!no-underline capitalize !cursor-pointer !text-inherit"
              :to="!x.children && x.to"
              >{{ x.label }}</atoms-text
            >
          </n-badge>
        </div>
      </section>
      <n-button
        size="large"
        type="info"
        class="shadow-lg shadow-black/50 dark:shadow-white/50 w-full lg:w-auto"
        >Coba Sekarang!</n-button
      >
    </nav>
    <br />
  </atoms-container>
</template>
