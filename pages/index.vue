<template>
    <div class="text-center">
        <div class="relative">
            <img class="contrast-50 brightness-50 rounded-xl landing_img"
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="">
            <div
                class="text-white absolute text-5xl top-0 bottom-0 left-0 right-0 mx-auto text-center w-full flex items-center justify-center">
                <div class="flex items-center justify-center p-6 bg-clip-text bg-gradient-to-r from-emerald-400  my-4 text-center text-transparent to-indigo-400">
                    Welcome
                </div>
            </div>
        </div>
        <h2 class="my-4 p-2 text-4xl text-center">Everything you need <br> We got it</h2>
        <div class="container mx-auto">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="p in products.slice(0, 6)" :key="p.id">
                <ProductCard :product="p" :carouselWidth="true"/>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
        </div>
        <div class="container mx-auto">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="p in products.slice(8, 14)" :key="p.id">
                <ProductCard :product="p" :carouselWidth="true"/>
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
const { data: products} = await useFetch("https://fakestoreapi.com/products")
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
</script>

<style scoped>
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
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>