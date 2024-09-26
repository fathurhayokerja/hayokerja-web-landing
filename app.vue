<script setup lang="ts">
import {
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NFloatButton,
  NModalProvider,
  NLoadingBarProvider,
  NMessageProvider,
} from "naive-ui";
import type { GlobalThemeOverrides } from "naive-ui";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const { theme: $theme } = resolveConfig(tailwindConfig as any);
const $local = reactive({
  isDarkMode: true,
});
const $themeOverrides = (_isDark = false): GlobalThemeOverrides => ({
  common: {
    primaryColor: $theme.colors.primary,
    primaryColorHover: $theme.colors["primary-lighten"],
    primaryColorPressed: $theme.colors["primary-darken"],
    successColor: $theme.colors.secondary,
    successColorHover: $theme.colors["secondary-lighten"],
    successColorPressed: $theme.colors["secondary-darken"],
    borderRadius: "15px",
  },
  Button: {
    textColorPrimary: $theme.colors.white,
    textColorHoverPrimary: $theme.colors.white,
    textColorPressedPrimary: $theme.colors.white,
    textColorGhostPrimary: $theme.colors.white,
    textColorFocusPrimary: $theme.colors.white,
    textColorSuccess: $theme.colors.black,
    textColorHoverSuccess: $theme.colors.black,
    textColorPressedSuccess: $theme.colors.black,
    textColorGhostSuccess: $theme.colors.black,
    textColorFocusSuccess: $theme.colors.black,
    ...(_isDark
      ? {
          colorInfo: $theme.colors.white,
          colorHoverInfo: $theme.colors.white,
          colorFocusInfo: $theme.colors["white-smoke"],
          borderInfo: $theme.colors["white-smoke"],
          colorPressedInfo: $theme.colors["white-smoke"],
          rippleColorInfo: $theme.colors["white-smoke"],
          borderFocusInfo: $theme.colors["white-smoke"],
          borderHoverInfo: $theme.colors.white,
          borderPressedInfo: $theme.colors["white-smoke"],
          colorDisabledInfo: $theme.colors.white,
          borderDisabledInfo: $theme.colors.white,
          textColorDisabledInfo: $theme.colors.black,
          textColorInfo: $theme.colors.black,
          textColorHoverInfo: $theme.colors.black,
          textColorPressedInfo: $theme.colors.black,
          textColorGhostInfo: $theme.colors.black,
          textColorFocusInfo: $theme.colors.black,
        }
      : {
          colorInfo: $theme.colors.black,
          colorHoverInfo: $theme.colors["black-lighten"],
          colorFocusInfo: $theme.colors["black-darken"],
          borderInfo: $theme.colors["black-lighten"],
          colorPressedInfo: $theme.colors["black-darken"],
          rippleColorInfo: $theme.colors["black-lighten"],
          borderFocusInfo: $theme.colors.black,
          borderHoverInfo: $theme.colors.black,
          borderPressedInfo: $theme.colors.black,
          colorDisabledInfo: $theme.colors.black,
          borderDisabledInfo: $theme.colors.black,
          textColorDisabledInfo: $theme.colors.white,
          textColorInfo: $theme.colors.white,
          textColorHoverInfo: $theme.colors.white,
          textColorPressedInfo: $theme.colors.white,
          textColorGhostInfo: $theme.colors.white,
          textColorFocusInfo: $theme.colors.white,
        }),
  },
});
const $toggleHtmlDarkMode = () => {
  const constant = "dark";
  if ($local.isDarkMode) {
    document.documentElement.classList.add(constant);
  } else {
    document.documentElement.classList.remove(constant);
  }
};
watch(
  () => $local.isDarkMode,
  () => {
    $toggleHtmlDarkMode();
  },
);

onMounted($toggleHtmlDarkMode);
</script>
<template>
  <n-config-provider
    :theme="$local.isDarkMode ? darkTheme : null"
    :theme-overrides="$themeOverrides($local.isDarkMode)"
  >
    <n-loading-bar-provider>
      <n-modal-provider>
        <n-message-provider>
          <n-global-style />
          <n-float-button
            position="fixed"
            type="primary"
            right="1.5rem"
            bottom="1.5rem"
            class="z-50 !text-white"
            @click="$local.isDarkMode = !$local.isDarkMode"
          >
            <atoms-icon
              :name="
                $local.isDarkMode ? 'weather-night' : 'white-balance-sunny'
              "
              class="!text-white"
              flat
            />
          </n-float-button>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </n-message-provider>
      </n-modal-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style lang="css">
body {
  font-family:
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif !important;
}
</style>
