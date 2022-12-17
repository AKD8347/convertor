<template>
  <div class="convert">
    <div class="convert__currencies">
      <currencies/>
    </div>
    <div class="convert__form">
      <convert-form/>
    </div>
  </div>
</template>

<script>
import Currencies from "@/pages/convert/components/Currencies";
import ConvertForm from "@/pages/convert/components/ConvertForm";
import currenciesMixin from "@/api/currencies/currencies.mixin";

export default {
  name: 'convert',
  mixins: [currenciesMixin],
  components: { Currencies, ConvertForm },
  watch: {
    baseCurrency(value) {
      this.changeConvertUrlParam({ from: value })
    }
  }
}
</script>

<style scoped lang="scss">
.convert {
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  &__currencies {
    @media screen and (max-width: 820px) {
      order: 1;
    }
  }
  &__form {
    position: relative;
    :deep(.convert-form) {
      position: fixed;
      @media screen and (max-width: 820px) {
        position: relative;
        order: 0;
      }
    }
  }
}
</style>
