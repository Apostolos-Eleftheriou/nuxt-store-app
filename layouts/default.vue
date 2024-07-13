<template>
    <div>
        <header class="shadow-sm sticky w-full z-50 backdrop-blur-md top-0">
            <nav class="container mx-auto p-4 flex justify-between">
                <BackButton :showOnNav="false" />
                <NuxtLink to="/" class="font-bold text-[#8a4c2f]">Nuxt Store</NuxtLink>
                <ul class="flex gap-4">
                    <!-- <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li> -->
                    <!-- <li @click="showCat = !showCat" class="relative">
                        <span class="btn cursor-pointer">Categories</span>
                        <div v-if="showCat" class="absolute top-10 left-0 flex flex-col justify-center items-center bg-[#b1a59f] text-white w-44 rounded-xl">
                            <NuxtLink v-for="cat in categories" :to="`/products/${cat}`" class="p-4 font-medium [&:not(:last-child)]:border-b-2 w-full capitalize">{{ cat }}</NuxtLink>
                        </div>
                    </li> -->
                    <li>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div class="mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<script setup>
const showCat = ref(false);
const { data: categories } = await useFetch("https://fakestoreapi.com/products/categories");
</script>
<style scoped>
/* .router-link-active {
    color: #12b488;
} */
</style>