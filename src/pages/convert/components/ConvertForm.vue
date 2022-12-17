<template>
  <div class="convert-form">
    <base-input
        label="У меня есть"
        v-model="from"
        :bottom-label="`1 ${$route.params.from} = ${this.rates.get($route.params.to).toFixed(10)} ${$route.params.to}`"
        :currency="$route.params.from"
        @change-currency="changeFrom"
        @update:modelValue="updateFrom"
    />
    <div class="convert-form__icon">
      <el-icon><sort/></el-icon>
    </div>
    <base-input
        label="Хочу приобрести"
        v-model="to"
        :bottom-label="`1 ${$route.params.to} = ${(1 / this.rates.get($route.params.to)).toFixed(10)} ${$route.params.from}`"
        :currency="$route.params.to"
        @change-currency="changeTo"
        @update:modelValue="updateTo"
    />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'convert',
  mixins: [currenciesMixin],
  components: { BaseInput },
  data() {
    return {
      from: 1,
      to: 0
    }
  },
  watch: {
    '$route.params.to'() {
      this.updateFrom(this.from)
    },
    '$route.params.from'() {
      this.updateFrom(this.from)
    }
  },
  created() {
    this.updateFrom(1)
  },
  methods: {
    updateFrom(value) {
      this.to = Number.parseFloat(
          (value * this.rates.get(this.$route.params.to)).toFixed(10)
      )
    },
    updateTo(value) {
      this.from = Number.parseFloat(
          (value * (1 / this.rates.get(this.$route.params.to))).toFixed(10)
      )
    },
    changeFrom(value) {
      this.$currencies.getRates(value)
    },
    changeTo(value) {
      this.changeConvertUrlParam({ to: value })
    }
  }
}
</script>

<style scoped lang="scss">
.convert-form {
  padding-left: 40px;
  width: max-content;
  @media screen and (max-width: 820px) {
    padding-left: 0;
    margin: 0 auto;
    width: max-content;
  }
  &__icon {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    width: 100%;
  }
}
</style>
