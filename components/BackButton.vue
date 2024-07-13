<template>
    <div class="flex items-center justify-start w-full">
        <button @click="goBack" class="shadow-md flex justify-center items-center p-2 hover:bg-slate-100 bg-slate-50 rounded-lg mb-3">
            <i class="material-icons">arrow_back</i>
        </button>
    </div>
</template>

<script setup>
const goBack = () => {
    window.history.back()
}
</script>

<style scoped>

</style>