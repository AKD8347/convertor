import { defineStore } from 'pinia'

export default defineStore({
    id: 'app-store',
    state: () => ({
        windowWidth: document.documentElement.clientWidth
    }),
    actions: {
        setWindowWidth() {
            this.windowWidth = document.documentElement.clientWidth
        },
    }
})
