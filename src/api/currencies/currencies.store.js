import { defineStore } from 'pinia'

export default defineStore({
    id: 'currencies',
    state: () => ({
        loading: false,
        base: 'USD',
        currencies: [],
        rates: null
    }),
    actions: {
        setLoading(value) {
            this.loading = value
        },
        setBaseCurrency(value) {
            this.base = value
        },
        setCurrencies({ base, rates }) {
            this.base = base
            this.rates = new Map()
            this.currencies.splice(0)
            Object.keys(rates)
                .forEach(key => {
                    this.currencies.push({
                        label: key,
                        rate: rates[key]
                    })
                    this.rates.set(key, rates[key])
                })
        }
    }
})
