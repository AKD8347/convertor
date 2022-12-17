<template>
  <div class="currencies-table">
    <el-table :data="currencies">
      <el-table-column
          prop="label"
          label="Валюта"
          :width="windowWidth > 600 ? '120' : '100'"
          sortable
      />
      <el-table-column
          prop="rate"
          label="Цена"
          :width="windowWidth > 600 ? '220' : '140'"
          sortable
      >
        <template v-slot="scope">
          {{ scope.row.rate.toFixed(6) }}
        </template>
      </el-table-column>
      <el-table-column
          :label="windowWidth > 600 ? 'Действие' : null"
          :width="windowWidth > 600 ? '180' : '50'"
      >
        <template v-slot="scope">
          <router-link
              class="currencies-table__link"
              :to="baseCurrency === scope.row.label ? '' : `/convert/${baseCurrency}/${scope.row.label}`"
              :class="{ disabled: baseCurrency === scope.row.label }"
          >
            <span v-if="windowWidth > 600">Конвертировать</span>
            <span v-else>
              <el-icon :size="20"><refresh/></el-icon>
            </span>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import currenciesMixin from "@/api/currencies/currencies.mixin";
import windowWidthMixin from "@/mixins/window-width.mixin";

export default {
  name: 'currencies-table',
  mixins: [currenciesMixin, windowWidthMixin]
}
</script>

<style scoped lang="scss">
.currencies-table {
  margin: 0 auto;
  padding: 20px;
  width: max-content;
  background: #FFFFFF;
  &__link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #343647;
    text-decoration: none;
    &.disabled {
      cursor: no-drop;
    }
  }
}
</style>
