<template>
  <div class="base-wrapper">
    <div class="base-wrapper__header">
      <base-header/>
    </div>
    <main class="base-wrapper__main">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <div class="base-wrapper__loading"
         v-loading="currenciesLoading"/>
  </div>
</template>

<script>
import BaseHeader from "@/components/baseWrapper/components/BaseHeader";
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'base-wrapper',
  mixins: [currenciesMixin],
  components: { BaseHeader }
}
</script>

<style scoped lang="scss">
.base-wrapper {
  padding-top: 100px;
  min-height: 100vh;
  background: url('../../assets/images/bg-lines.webp') fixed;
  background-size: 100%;
  &__main {
    margin: 0 auto;
    max-width: 1200px;
  }
  &__loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    pointer-events: none;
  }
}
</style>
