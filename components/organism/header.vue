<script setup>
import { NButton, NBadge, NDropdown } from "naive-ui";
import { reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Route and Router logic
const route = useRoute();
const router = useRouter();
const $local = reactive({
  mobileOpen: false,
  scrolled: false,
});

// Get Route Items for Navigation
const $getRouteItems = router?.options?.routes
  ?.filter((it) => !it.meta?.hidden && it.meta?.label)
  ?.sort((item, items) => item?.meta?.order - items?.meta?.order)
  ?.map((it) => {
    return {
      to: it?.path,
      ...(it?.meta || {}),
    };
  });

// Check if a route is active
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

// Check for transparency on active routes
const $isTransparent = computed(() => {
  const finder = $getRouteItems?.find((it) => $isActive(it));
  return (
    finder?.transparent ||
    finder?.children?.find(
      (x) =>
        x.transparent &&
        x.to?.replace(/\//g, "") === route.path?.replace(/\//g, ""),
    ) ||
    false
  );
});
</script>

<template>
  <div class="container">
    <nav class="flex items-center justify-between">
      <nuxt-img src="/images/hayokerja.png" quality="80" width="100" />

      <div class="illustration">
        <nuxt-img
          preload
          loading="lazy"
          src="/images/img.png"
          quality="80"
          height="1000"
        />
      </div>

      <div class="illustration2">
        <nuxt-img
          preload
          loading="lazy"
          src="/images/img_1.png"
          quality="80"
          height="500"
        />
      </div>

      <section class="flex justify-center items-center">
        <div
          v-for="(x, i) in $getRouteItems?.filter((_item) => _item?.label)"
          :key="i + 1"
          :class="[
            'mx-3 mb-1 z-50 ',
            (!$local.scrolled && route.meta.unselectedClass) ||
              'hover:text-primary text-white dark:text-white',
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
    </nav>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.text-section {
  max-width: 600px;
}

.illustration,
.illustration2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.illustration img,
.illustration2 img {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.illustration {
  z-index: 20;
}

.illustration2 {
  z-index: 10;
}

.illustration img {
  transform: translate(0, 0);
}

.illustration2 img {
  transform: translate(-5%, 2%);
}

@media (max-width: 768px) {
  .illustration img,
  .illustration2 img {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .illustration,
  .illustration2 {
    display: none;
  }
}
</style>
