<!--
 * @Date: 2024-01-10 21:46:04
 * @LastEditTime: 2024-01-14 11:41:28
 * @Description: ~
-->
<script setup lang="ts">
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig } = useLayout();

const logoUrl = computed(() => {
  return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>

<template>
  <div class="layout-footer">
    <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>
<style lang="scss" scoped></style>
