import useCurrenciesStore from "@/api/currencies/currencies.store";
import {http} from "@/api/axios.config";

export default () => ({
    currenciesStore: useCurrenciesStore(),
    async getRates(base = 'USD') {
        this.currenciesStore.setLoading(true)
        const { data } = await http.get(`/latest?base=${base}`, {
            headers: {
                apikey: process.env.VUE_APP_API_KEY
            }
        })
        this.currenciesStore.setCurrencies(data)
        this.currenciesStore.setLoading(false)
        return data
    }
})
