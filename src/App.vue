<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear" mode="out-in">
        <component
            v-if="!loading"
            :is="Component"
        />
        <div v-else
             v-loading="true"
             class="app__loading"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
import useAppStore from '@/store/app.store'

export default {
  name: 'app',
  setup() {
    return {
      appStore: useAppStore()
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    rate() {
      if (this.$route.name === 'convert') {
        return this.$route.params.from
      }
      return 'USD'
    }
  },
  mounted() {
    this.$currencies.getRates(this.rate)
        .then(() => this.loading = false)
    window.addEventListener('resize', this.appStore.setWindowWidth)
  }
}
</script>

<style scoped lang="scss">
.app {
  &__loading {
    height: 100vh;
  }
}
</style>
