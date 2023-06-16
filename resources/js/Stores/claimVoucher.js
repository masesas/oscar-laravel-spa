import { defineStore } from 'pinia'
import { claimVoucher, test } from '@/Apis/googleAds'
import { logging, uuidv4 } from '@/Utils/logging'

export const useClaimVoucherStore = defineStore('claimVoucher', {
    state: () => ({
        isLoading: false,
        isError: false,
        countSubmit: 0,
        responseMessage: "",
    }),
    actions: {
        submit(formObject) {
            this.countSubmit++
            if (this.countSubmit > 2 && !this.isError)
            {
                this.responseMessage = "Voucher Sudah di Klaim, Silahkan Check Whatsapp"
                this.isError = false
                return
            }

            this.isLoading = true
            if (formObject)
            {
                this.reset()
                claimVoucher(formObject)
                    .then((response) => {
                        logging(response, 'success submit')
                        this.responseMessage = response.message
                        this.isLoading = false
                    })
                    .catch((error) => {
                        if (error.response)
                        {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            this.responseMessage = error.response.data.message
                            /* console.log('data', error.response.data);
                            console.log('status', error.response.status);
                            console.log('headers', error.response.headers); */
                        } else if (error.request)
                        {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser
                            // and an instance of http.ClientRequest in node.js
                            //console.log('request', error.request);
                            this.responseMessage = error.request
                        } else
                        {
                            // Something happened in setting up the request that triggered an Error
                            //console.log('Error', error.message);
                            this.responseMessage = error.message
                        }

                        this.isError = true
                        this.isLoading = false
                    })
            }
            else
            {
                this.isLoading = false
                this.responseMessage = "Form Null"
                this.isError = true
            }
        },
        setUserSubmitted() {
            if (isLocalStorage())
            {
                //const userUuid = localStorage.getItem('storedData') ? localStorage.getItem('storedData') : uuidv4()
                //localStorage.setItem('claim_voucher_oscar', userUuid)
            }
        },
        reset() {
            this.isError = false
            this.responseMessage = ""
        }
    }
})
