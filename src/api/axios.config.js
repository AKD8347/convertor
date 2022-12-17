import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data'
})
