import useCurrenciesStore from "@/api/currencies/currencies.store";
import {copyDeep} from "@/utils/copy-deep";

const currenciesStore = useCurrenciesStore()

export default {
    computed: {
        currenciesLoading() {
            return currenciesStore.loading
        },
        baseCurrency() {
            return currenciesStore.base
        },
        currencies() {
            return currenciesStore.currencies
        },
        rates() {
            return currenciesStore.rates
        }
    },
    data() {
        return {
            currenciesStore: currenciesStore
        }
    },
    methods: {
        getCurrenciesFirstBase() {
            const currencies = copyDeep(this.currencies)
            const index = this.currencies
                .findIndex(item => item.label === this.baseCurrency)
            currencies.unshift(
                currencies.splice(index, 1)[0]
            )
            return currencies
        },
        changeBaseCurrency(value) {
            this.currenciesStore.setBaseCurrency(value)
        },
        changeConvertUrlParam(value) {
            if (this.$route.name === 'convert') {
                this.$router.replace({
                    name: 'convert',
                    params: {
                        ...this.$route.params,
                        ...value
                    }
                })
            }
        }
    }
}
