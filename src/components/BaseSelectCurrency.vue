<template>
  <div class="base-select-currency">
    <el-select
        :model-value="modelValue"
        :disabled="disabled"
        filterable
        @change="change"
    >
      <el-option
          v-for="item in currencies"
          :key="item.label"
          :label="item.label"
          :value="item.label"
      />
    </el-select>
  </div>
</template>

<script>
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'base-select-currency',
  mixins: [currenciesMixin],
  props: {
    modelValue: { type: String },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    change(value) {
      this.$emit('change-currency', value)
    }
  }
}
</script>

<style scoped lang="scss">
.base-select-currency {
  :deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: none!important;
  }
  :deep(.el-input__wrapper) {
    background: transparent;
    box-shadow: none!important;
    .el-icon path {
      fill: #FFFFFF;
    }
    .el-input__inner {
      width: 40px;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  }
}
</style>
