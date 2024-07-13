export default defineEventHandler(async (event) => {

    //handle query params
    // const { name } = getQuery(event);

    //handle post data, we are accessing the object of the body of the useFetch 
    // const { age } = await readBody(event);

    //api call with private key || when using server side routes with use $fetch instead of useFetch() which is a wrapper for $fetch
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_pLR2FEEgpLGZsWjoH4GkkX85CBSktQT8fk8LWkXR')
    return data
})