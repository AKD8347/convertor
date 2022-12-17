<template>
  <header class="base-header">
    <div class="base-header__content">
      <div class="base-header__title">
        <router-link to="/">конвертер валюты</router-link>
      </div>
      <div class="base-header__currency">
        <select-base-currency/>
      </div>
    </div>
  </header>
</template>

<script>
import SelectBaseCurrency from "@/components/baseWrapper/components/SelectBaseCurrency";

export default {
  name: 'base-header',
  components: { SelectBaseCurrency }
}
</script>

<style scoped lang="scss">
.base-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #1D2043;
  z-index: 10;
  &__content {
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
  &__title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    @media screen and (max-width: 920px) {
      right: unset;
      left: 20px;
    }
    > a {
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      text-decoration: none;
      color: #FFFFFF;
      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }
  }
  &__currency {
    width: max-content;
    margin-left: auto;
  }
}
</style>
