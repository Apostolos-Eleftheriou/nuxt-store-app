<template>
    <div class="text-center">
        <div class="relative rounded-md">
            <!-- <img class="contrast-50 brightness-50 rounded-xl landing_img"
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""> -->
            <Carousel :autoplay="3000" :transition="600" :wrapAround="true">
                <Slide v-for="img in imgs" :key="img.url">
                    <img :src="img.url" alt="designer image" class="lading_page_carousel_image" />
                    <div
                        class="text-white absolute text-5xl top-0 bottom-0 left-0 right-0 mx-auto text-center w-full flex items-center justify-center">
                        <div
                            class="flex items-center justify-center p-6 bg-clip-text bg-gradient-to-r from-[#fff] italic my-4 text-center text-transparent to-[#a89062] drop-shadow-lg">
                            {{ img.text }}
                        </div>
                    </div>
                </Slide>
            </Carousel>

        </div>
        <h2 class="my-4 p-2 text-4xl text-center">Everything you need <br> We got it</h2>
        <div v-if="products != null" class="container mx-auto">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="p in products?.slice(0, 6)" :key="p.id">
                    <ProductCard :product="p" :carouselWidth="true" />
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
        <div v-if="products != null" class="container mx-auto">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="p in products?.slice(8, 14)" :key="p.id">
                    <ProductCard :product="p" :carouselWidth="true" />
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
const products = ref(null)
const { data: productsData } = await useFetch("https://fakestoreapi.com/products")
products.value = productsData.value
const settings = ref({
    itemsToShow: 1,
    wrapAround: false,
    transition: 500
})
const breakpoints = ref({
    768: {
        itemsToShow: 4,
        itemsToScroll: 4
    }
})
const imgs = ref([
    {
        url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Designer Brands"
    },
    {
        url: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Designer Clothing"
    },
    {
        url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Find Your Style"
    },
    {
        url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Designer Accessories"
    }
])
</script>

<style scoped>
.lading_page_carousel_image {
    height: 600px;
    width: 100%;
    object-fit: cover;
    filter: contrast(.5);
    border-radius: 8px;
}

@media screen and (max-width: 768px) {
    .lading_page_carousel_image {
        height: 300px;
    }
}

.landing_img {
    height: 600px;
    width: 100%;
    object-fit: cover;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
    border-radius: 8px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>