import useAppStore from '@/store/app.store'

const appStore = useAppStore()

export default {
    computed: {
        windowWidth() {
            return appStore.windowWidth
        }
    }
}
