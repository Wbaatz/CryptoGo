import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '04d1216a57msh748e314d919c21cp11816cjsna9e16d8bfd6b',
  'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
};

const baseUrl = 'https://duckduckgo10.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:
   cryptoNewsHeaders 
  });

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ Search }) => {
       
          return createRequest(`/search/news?term=${Search}&region=wt-wt&safeSearch=off`);
        },
      })
    })
  });

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


