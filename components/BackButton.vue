<template>
    <div class="flex items-center justify-start mr-2" v-if="showOnNav">
        <button @click="goBack" class="shadow-md flex justify-center items-center p-2 hover:bg-slate-100 bg-slate-50 rounded-lg text-[#8a4c2f]">
            <i class="material-icons">arrow_back</i>
        </button>
    </div>
</template>

<script setup>
defineProps(['showOnNav'])

const goBack = () => {
    window.history.back()
}
</script>

<style scoped>

</style>