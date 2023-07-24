import { defineStore } from 'pinia'
import axios from 'axios'
import { useSnackbar } from "vue3-snackbar"

export const useSubmitStore = defineStore('submit', {
    state: () => ({
        loading: false,
        message: '',
        data: [] | {} ,
    }),
    actions: {
        setLoading(loading = true) {
            this.loading = loading
        },
        
    }
})
