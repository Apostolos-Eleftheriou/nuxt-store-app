<template>
    <div class="flex items-center justify-center flex-col">
        <BackButton />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
// use prodcuts layout
definePageMeta({
    layout: 'products'
})

const { data: products} = await useFetch("https://fakestoreapi.com/products")

// change the title and meta tags per component basis
useHead({
    title: 'Nuxt Store | Merch',
    meta: [
        {
            name: 'description',
            content: 'List of products'
        }
    ]
})

</script>

<style scoped>

</style>