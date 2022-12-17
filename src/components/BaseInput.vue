<template>
  <label class="base-input">
    <div class="base-input__content">
      <span class="base-input__label">{{ label }}</span>
      <div class="base-input__inner">
        <input
            :value="modelValue"
            type="text"
            @input="input"
            ref="input"
        >
        <base-select-currency
            :model-value="currency"
            @change-currency="$emit('change-currency', $event)"
        />
      </div>
    </div>
    <div class="base-input__rate">{{ bottomLabel }}</div>
  </label>
</template>

<script>
import BaseSelectCurrency from "@/components/BaseSelectCurrency";
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'base-input',
  mixins: [currenciesMixin],
  components: { BaseSelectCurrency },
  props: {
    modelValue: { type: Number },
    label: { type: String },
    bottomLabel: { type: String },
    currency: { type: String }
  },
  methods: {
    input($event) {
      if ($event.target.value) {
        this.$emit('update:modelValue', Number.parseFloat($event.target.value))
      } else {
        this.$emit('update:modelValue', 0)
        this.$refs.input.value = '0'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  position: relative;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 360px;
  height: 70px;
  background: #F0F3F8;
  border-radius: 4px;
  @media screen and (max-width: 400px) {
    width: 300px;
  }
  &__rate {
    position: absolute;
    left: 2px;
    bottom: -20px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #343647;
  }
  &__label {
    display: block;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #9597B0;
  }
  &__content {
    width: 100%;
  }
  &__inner {
    position: relative;
    margin-top: 2px;
    width: 100%;
    > input {
      height: 22px;
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #1D2043;
      background-color: transparent;
      border: none;
      outline: none;
    }
    :deep(.base-select-currency) {
      position: absolute;
      top: -5px;
      right: 0;
      .el-icon path {
        fill: #1D2043;
      }
      .el-input__inner {
        color: #1D2043;
      }
    }
  }
}
</style>
