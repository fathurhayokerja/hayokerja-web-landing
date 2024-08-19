<script setup>
import { NDivider } from "naive-ui";

const $local = reactive({
  openModalHub: false,
});

const $openLink = (_url, _target = "_self") => {
  if (_url) {
    window.open(_url, _target);
  }
};
</script>
<template>
  <footer class="">
    <atoms-container class="p-10">
      <div class="grid grid-flow-row md:grid-cols-8 gap-10">
        <div class="md:col-span-2">
          <nuxt-img
            preload
            quality="80"
            loading="lazy"
            class="mb-5"
            width="150"
            src="/images/hayokerja.png"
          />
          <atoms-text span class="text-justify"
            >HayoKerja merupakan penyedia jasa untuk mengelola pekerja dan
            membantu kebutuhan SDM bagi banyak perusahaan di
            Indonesia.</atoms-text
          >
          <div class="flex mt-5 justify-between">
            <atoms-icon
              v-for="(x, idx) in [
                {
                  icon: 'youtube',
                  href: 'https://www.youtube.com/channel/UCHVpJJpIQbBXg7ERomt_EMA',
                },
                {
                  icon: 'facebook',
                  href: 'https://www.facebook.com/hayokerjaindonesia/',
                },
                {
                  icon: 'instagram',
                  href: 'https://www.instagram.com/hayokerja/',
                },
                {
                  icon: 'linkedin',
                  href: 'https://id.linkedin.com/company/hayokerja',
                },
                {
                  icon: 'facebook-messenger',
                  href: 'https://t.me/lokerhayokerja',
                },
              ]"
              :key="idx"
              :name="x.icon"
              :size="20"
              @click="$openLink(x.href, '_blank')"
              class="text-primary"
            />
          </div>
        </div>
        <div
          class="md:col-span-6 grid grid-cols-1 md:grid-flow-col md:grid-cols-4 gap-10 md:px-5"
        >
          <div
            v-for="(x, idx) in [
              {
                title: 'Perusahaan',
                class: 'order-3 md:order-1 md:col-span-2',
                items: [
                  {
                    icon: 'map-marker',
                    text: 'Ruko Mega Grosir Cempaka Mas Blok G No.11, RW.8, Sumur Batu, Kec.Kemayoran, Kota Jakarta Pusat, DKI Jakarta 10640',
                    href: 'https://www.google.com/maps/place/hayokerja.com/@-6.1624923,106.8740568,20z/data=!4m5!3m4!1s0x0:0x953b704fcf8848bc!8m2!3d-6.1624923!4d106.874431',
                  },
                  {
                    icon: 'credit-card',
                    text: 'Nomor rekening : (BCA) 8310-15-7989',
                  },
                  //PT. Hayookerja Abhinaya Indonesia Bank Central Asia
                  {
                    icon: 'excalamation',
                    text: 'Hati-hati penipuan atas nama hayokerja.com, kami hanya menerima pembayaran melalui rekening diatas',
                  },
                ],
              },
              {
                title: 'Legal',
                class: 'order-2',
                items: [
                  {
                    icon: 'book-lock',
                    text: 'Kebijakan privasi',
                    href: '/syarat-dan-ketentuan/kebijakan-privasi',
                  },
                  {
                    icon: 'account',
                    text: 'Pekerja atau pelamar',
                    href: '/syarat-dan-ketentuan/pelamar',
                  },
                  {
                    icon: 'domain',
                    text: 'Perusahaan klien',
                    href: '/syarat-dan-ketentuan/perusahaan',
                  },
                  {
                    icon: 'handshake',
                    text: 'Perjanjian antar mitra dan HayoKerja',
                    href: '/syarat-dan-ketentuan/perjanjian-mitra',
                  },
                  {
                    icon: 'account-multiple',
                    text: 'Perjanjian calon pekerja',
                    href: '/syarat-dan-ketentuan/perjanjian-calon-pekerja',
                  },
                ],
              },
              {
                title: 'Kontak kami',
                class: 'order-1 md:order-3',

                items: [
                  {
                    icon: 'email',
                    text: 'pusat@hayokerja.com',
                    href: `mailto:pusat@hayokerja.com`,
                  },
                  {
                    icon: 'phone',
                    text: '021-421-4120',
                  },
                  {
                    icon: 'whatsapp',
                    text: '+62 813-1776-5289',
                    href: 'https://wa.me/6281317765289?text=Halo%2C%20saya%20punya%20pertanyaan%20terkait%20layanan%20Anda.',
                  },
                ],
              },
            ]"
            :key="idx"
            :class="['flex flex-col gap-5', x.class]"
          >
            <atoms-text class="!font-bold">{{ x.title }}</atoms-text>
            <div
              v-for="(k, idk) in x.items"
              :key="idk"
              class="flex gap-2 items-center"
            >
              <atoms-icon :size="15" :name="k.icon" class="dark:text-white" />
              <atoms-text span :href="k.href" style="white-space: pre-line">{{
                k.text
              }}</atoms-text>
            </div>
          </div>
        </div>
      </div>
      <n-divider />
      <div>
        <div class="grid gap-2 justify-center md:grid-cols-2 pt-5">
          <div class="flex gap-3 justify-center md:justify-start w-full">
            <nuxt-img
              preload
              quality="80"
              loading="lazy"
              width="150"
              src="/images/gplay.png"
            />
            <!-- <atoms-image
              src="/gplay.png"
              width="100"
              href="https://play.google.com/store/apps/details?id=com.hayokerja.mobileabsensi&hl=en&gl=US"
            /> -->
            <!-- <atoms-image
              src="/appstore.png"
              width="87"
              @click="$local.openModalHub = true"
            /> -->
          </div>
          <div
            class="flex gap-2 items-center mt-5 md:mt-0 justify-center md:justify-end"
          >
            <atoms-icon name="copyright" />
            <atoms-text span>2021 Hayokerja. All Rights Reserved</atoms-text>
          </div>
        </div>
      </div>
    </atoms-container>
  </footer>
</template>
