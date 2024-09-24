<script setup>
import { NButton, NBadge, NDropdown } from "naive-ui";
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Route and Router logic
const route = useRoute();
const router = useRouter();
const $local = reactive({
  mobileOpen: false,
  scrolled: false,
});

// New ref for mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Get Route Items for Navigation
const $getRouteItems = computed(() =>
  router?.options?.routes
    ?.filter((it) => !it.meta?.hidden && it.meta?.label)
    ?.sort((item, items) => item?.meta?.order - items?.meta?.order)
    ?.map((it) => ({
      to: it?.path,
      ...(it?.meta || {}),
    })),
);

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
      <nuxt-img
        class="relative z-10"
        src="/images/hayokerja.png"
        quality="80"
        width="100"
      />

      <div class="illustration">
        <nuxt-img
          preload
          class="w-[60%]"
          loading="lazy"
          src="/images/bgvector.svg"
          quality="80"
          height="1000"
        />
      </div>

      <!-- Hamburger menu button for mobile -->
      <button @click="toggleMobileMenu" class="md:hidden z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Desktop menu -->
      <section class="hidden md:flex justify-center items-center">
        <div
          v-for="(x, i) in $getRouteItems?.filter((_item) => _item?.label)"
          :key="i + 1"
          :class="[
            'mx-3 mb-1 z-50 ',
            (!$local.scrolled && route.meta.unselectedClass) ||
              'hover:text-blue-300 text-white dark:text-white',
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
                x.children?.map((_item) => ({
                  ..._item,
                  props: {
                    onClick: () => router.push({ path: _item?.to || '#' }),
                  },
                }))
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

      <!-- Mobile menu with left-to-right animation -->
      <transition name="slide-fade">
        <div
          v-show="isMobileMenuOpen"
          class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        >
          <div
            class="bg-white h-full w-64 p-5 absolute left-0 transform transition-transform duration-300 ease-in-out"
            :class="{
              'translate-x-0': isMobileMenuOpen,
              '-translate-x-full': !isMobileMenuOpen,
            }"
          >
            <button
              @click="toggleMobileMenu"
              class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nuxt-img
              class="relative z-10 mb-8"
              src="/images/hayokerja.png"
              quality="80"
              width="100"
            />

            <div
              v-for="(x, i) in $getRouteItems?.filter((_item) => _item?.label)"
              :key="i + 1"
              class="mb-4"
            >
              <n-dropdown
                v-if="x.children"
                trigger="click"
                :options="
                  x.children?.map((_item) => ({
                    ..._item,
                    props: {
                      onClick: () => {
                        router.push({ path: _item?.to || '#' });
                        isMobileMenuOpen = false;
                      },
                    },
                  }))
                "
                placement="bottom-start"
              >
                <atoms-text
                  span
                  class="!no-underline capitalize !cursor-pointer !py-2 !text-black"
                  >{{ x.label }}</atoms-text
                >
              </n-dropdown>

              <atoms-text
                v-else
                span
                class="!no-underline capitalize !cursor-pointer !py-2 !text-black"
                :to="!x.children && x.to"
                @click="isMobileMenuOpen = false"
                >{{ x.label }}</atoms-text
              >
            </div>
          </div>
        </div>
      </transition>
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

.illustration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.illustration img {
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

.illustration img {
  transform: translate(0, 0);
}

/* Animation styles for left-to-right */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

@media (max-width: 768px) {
  .illustration img {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .illustration {
    display: none;
  }
}
</style>
