import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'b0eddbc0e7mshadee708ebd9c37fp173168jsncf90b727b15d',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
//reminder,need to make a video of this.
const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest= (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query({
        query:(count)=> createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query:(coinID)=> createRequest(`/coin/${coinID}`),
  }),
  getCryptoHistory: builder.query({
    query:({coin,timePeriod})=> createRequest(`/coin/${coin}/history?timePeriod=${timePeriod}`),
})
  })
});




export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
   
}=cryptoApi;




