<template>
    <div>
        <header class="shadow-sm sticky top-0 w-full z-50 backdrop-blur-md">
            <nav class="container mx-auto p-4">
                <div class="flex items-center justify-start">
                    <BackButton :showOnNav="true"/>
                    <NuxtLink to="/" class="font-bold text-[#8a4c2f]">Nuxt Store Merch</NuxtLink>
                </div>
            </nav>
        </header>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2 ">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
/* .router-link-active {
    color: #12b488;
} */
</style>