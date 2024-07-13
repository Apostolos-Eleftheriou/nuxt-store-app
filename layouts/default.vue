<template>
    <div>
        <header class="shadow-sm fixed w-full z-50 backdrop-blur-md">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Store</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div class="mx-auto p-4 space-top">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-active {
    color: #12b488;
}
.space-top {
    padding-top: 100px;
}
</style>