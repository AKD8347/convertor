<template>
  <div class="base-select-base-currency">
    <label>Базовая валюта -</label>
    <base-select-currency
        :model-value="baseCurrency"
        :disabled="currenciesLoading"
        @change-currency="change"
    />
  </div>
</template>

<script>
import BaseSelectCurrency from "@/components/BaseSelectCurrency";
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'base-select-base-currency',
  mixins: [currenciesMixin],
  components: { BaseSelectCurrency },
  methods: {
    change(value) {
      console.log(value)
      this.$currencies.getRates(value)
    }
  }
}
</script>

<style scoped lang="scss">
.base-select-base-currency {
  display: flex;
  align-items: center;
  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 130%;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
