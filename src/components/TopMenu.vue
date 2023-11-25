<template>
    <div class="w-full flex lg:flex-col items-center mt-10 sm:mt-20 sm:mb-10 pl-10 pr-10 lg:pl-0 lg:pr-0">
        <div class="max-w-[2200px] lg:w-4/5 flex flex-row flex-1">
            <div class="flex items-center">
                <a aria-label="@vltn/goto home" href="/">
                    <p class="group text-4xl font-medium sm:font-normal sm:text-5xl color-900 w-fit">
                        @<span class="color-accent">vltn</span>/<span class="opacity-0 duration-150 group-hover:opacity-100 color-800 text-3xl lg:text-4xl">goto home</span>
                        <!-- <span class="hover:opacity-0">{{ $route.name }}</span> -->
                    </p>
                </a>
            </div>

            <div class="flex-1 flex flex-row justify-end items-center gap-5 md:gap-7">
                <a aria-label="Lien vers la section A propos" href="#about"><div class="hidden sm:flex justify-center items-center p-5 rounded-full cursor-pointer hover:scale-105 duration-200 hover-effect">
                    <img alt="Logo empreinte digitale" class="h-14 aspect-square" src="@/assets/icons/finger-print.svg">
                </div></a>

                <a aria-label="Lien vers la section Projets" href="#projects"><div class="hidden sm:flex justify-center items-center p-5 rounded-full cursor-pointer hover:scale-105 duration-200 hover-effect">
                    <img alt="Logo tiroir" class="h-14 aspect-square" src="@/assets/icons/tray.svg">
                </div></a>

                <a aria-label="Lien vers la section Contact" href="#contact"><div class="hidden sm:flex justify-center items-center p-5 rounded-full cursor-pointer hover:scale-105 duration-200 hover-effect">
                    <img alt="Logo arobase" class="h-14 aspect-square" src="@/assets/icons/at.svg">
                </div></a>

                <a aria-label="Curriculum" href="/resume/Valentin LE LIEVRE - CV.pdf" target="_blank"><div class="work rounded-full p-5 sm:p-6 pl-6 pr-6 sm:pl-14 sm:pr-14 cursor-pointer duration-200 hover:-translate-y-2.5 hover:scale-105 sm:ml-3 md:ml-20">
                    <p class="text-3xl sm:text-4xl color-900"> Curriculum </p>
                </div></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
.hover-effect:hover {
    box-shadow: 0px 0px 0px 3px var(--color-accent-1);
}
</style>