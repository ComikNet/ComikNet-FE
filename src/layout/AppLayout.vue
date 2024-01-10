<!--
 * @Author: nongchatea
 * @Date: 2024-01-10 17:29:19
 * @LastEditors: nongchatea
 * @LastEditTime: 2024-01-10 17:29:19
 * @Description: ~
-->
<template>
  <div class="layout-wrapper">
    <app-topbar></app-topbar>
    <div class="layout-sidebar">
      <app-sidebar></app-sidebar>
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
    <app-config></app-config>
    <div class="layout-mask"></div>
  </div>
</template>

<style lang="scss" scoped></style>
