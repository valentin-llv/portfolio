<template>
    <!-- Page viewer start -->
    <router-view v-slot="{ Component }">
        <component class="absolute w-full h-full left-0 top-0 bg-200" :is=Component />
    </router-view>
</template>

<script setup lang="ts">
    import { RouterView } from "vue-router";

    // Analitics
    if(window.location.hostname != "localhost" && !window.location.hostname.includes('192.168')) {
        let analiticsScript = document.createElement('script');
        analiticsScript.setAttribute('src', 'http://analitics.valentinllv.cloud/script.js');
        analiticsScript.dataset.websiteId = "56795c30-0299-4b2b-b985-66233e8be53f";
        
        document.head.appendChild(analiticsScript);
    }
</script>

<style scoped>

</style>