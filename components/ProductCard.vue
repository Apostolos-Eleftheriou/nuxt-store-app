<template>
    <div class="card text-center" :class="carouselWidth ? 'w-full' : 'max-w-96'">
        <img :src="product.image" alt="product" class="w-full h-48 object-contain thumb">
        <p class="text-gray-500 m-4 font-bold truncate" :title="product.title">{{ product.title }}</p>
        <div class="flex justify-center items-center">
            <p class="text-gray-500 truncate m-4" :title="product.description">{{ product.description }}</p>
            <p class="text-gray-800 m-4 text-end whitespace-nowrap font-bold">{{ product.price }} €</p>
        </div>
        
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product, carouselWidth } = defineProps(['product', 'carouselWidth'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>