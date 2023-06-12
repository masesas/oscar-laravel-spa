import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        isAsideExpanded: false,
        isMobileMenuShow: false,
    }),

    actions: {
        asideToggle() {
            this.isAsideExpanded = !this.isAsideExpanded
        },
        menuShow() {
            this.isMobileMenuShow = !this.isMobileMenuShow
        }
    }
})
