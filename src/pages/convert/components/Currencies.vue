<template>
  <div class="currencies">
    <button
        class="currencies__item"
        :class="{ 'active': label === $route.params.to }"
        v-for="{ label, rate } of list" :key="label"
        :disabled="baseCurrency === label"
        @click="changeTo(label)"
    >
      {{ label }} - {{ (1 / rate).toFixed(2) }} {{ baseCurrency }}
    </button>
  </div>
</template>

<script>
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'currencies',
  mixins: [currenciesMixin],
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list.push(
        ...this.getCurrenciesFirstBase()
    )
  },
  methods: {
    changeTo(value) {
      this.changeConvertUrlParam({ to: value })
    }
  }
}
</script>

<style scoped lang="scss">
.currencies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  &__item {
    height: 45px;
    background: #F0F3F8;
    border-radius: 4px;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 130%;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #343647;
    cursor: pointer;

    transition-duration: 600ms;
    &:disabled {
      background-color: #afafaf!important;
      color: #FFFFFF!important;
      cursor: no-drop;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
    &.active, &:hover {
      background: #1D2043;
      color: #FFFFFF;
    }
  }
}
</style>
