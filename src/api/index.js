import currenciesService from "@/api/currencies/currencies.service";

export function useApi(app) {
    app.config.globalProperties.$currencies = currenciesService()
}
