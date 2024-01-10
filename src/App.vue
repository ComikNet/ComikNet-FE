<!--
 * @Author: nongchatea
 * @Date: 2024-01-09 15:31:15
 * @LastEditors: nongchatea
 * @LastEditTime: 2024-01-10 16:34:50
 * @Description: ~
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/pinia/modules/settings';
import { useI18n } from 'vue-i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { messages, locale }: any = useI18n();
const settingStore = useSettingStore();
// 同步store.setting
const { lang } = storeToRefs(settingStore);
const elocale = ref(messages.value[locale.value]);

const changeLocale = () => {
  locale.value = lang.value;
  console.log(lang.value);
  elocale.value = messages.value[locale.value];
};
lang.value = 'zh-cn';

// 监听store.lang的变化同步至整个项目
watch(
  () => lang.value,
  () => {
    changeLocale();
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <div id="cls-app">
    <router-view />

    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
