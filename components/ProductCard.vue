<template>
    <div class="card text-center">
        <img :src="product.image" alt="product" class="w-full h-48 object-contain thumb">
        <p class="text-gray-500 m-4 font-bold truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>