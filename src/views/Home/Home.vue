<template>
    <div id="page" class="flex flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <TopMenu class="z-10" />

        <!-- Halo circles -->
        <div id="circle1" class="circle-1 z-0"></div>
        <div id="circle2" class="circle-2 z-0"></div>
        <div id="circle3" class="circle-3 z-0"></div>
        <div id="circle4" class="circle-4 z-0"></div>

        <!-- Head -->
        <div class="w-full flex sm:justify-center z-10 mt-32 lg:mt-64">
            <div class="pl-12 pr-12 sm:pl-0 sm:pr-0 sm:w-4/5 max-w-[2200px]">
                <p class="hidden sm:block text-6xl color-900 font-medium poppins"> Hey 👋, </p>
                <h1 class="hidden sm:block text-8xl mt-2 color-900"> Je m'appelle <span class="text-gradient font-bold">Valentin Le Lièvre</span> </h1>

                <h1 class="text-left sm:hidden text-6xl color-900"> Hey 👋, je&nbsp;m'appelle <span class="text-gradient font-bold">Valentin&nbsp;Le&nbsp;Lièvre</span> </h1>
            
                <p class="text-left color-900 text-4xl sm:text-5xl mt-20">
                    Je suis étudiant&nbsp;ingénieur à Polytech&nbsp;Sorbonne en informatique et électronique, passionné de 
                    developpement web, d'electronique et d'IOT.
                </p>

                <a href="#contact" aria-label="Me contacter ->">
                    <div class="work p-5 pl-12 pr-12 rounded-full w-fit flex flex-row mt-20 justify-center items-center gap-6 duration-200 cursor-pointer hover:-translate-y-2.5 hover:scale-105">
                        <p class="text-4xl color-900"> Me contacter </p>

                        <img alt="Fleche vers la droite" class="h-12 aspect-square" src="@/assets/icons/arrow-forward.svg" />
                    </div>
                </a>
            </div>
        </div>

        <!-- About cards -->
        <div id="about" class="w-full flex justify-center z-10 pt-20 mt-12 sm:mt-64">
            <div class="pl-8 pr-8 lg:pl-0 lg:pr-0 lg:w-4/5 max-w-[2200px] flex flex-col lg:flex-row gap-10">
                <div class="flex flex-col flex-1 p-10 lg:p-12 rounded-3xl bg-300">
                    <h2 class="color-900 text-5xl lg:text-6xl font-medium"> A propos </h2>

                    <div class="flex-1 mt-10 lg:mt-5 flex justify-center items-center">
                        <p class="color-900 text-35xl lg:text-4xl text-justify">
                            Je suis étudiant ingénieur en première année à Polytech Sorbonne spécialité système embarqué. <br /><br/>
                            La formation est séparé en deux morceaux: l'informatique et l'electronique.<br /><br class="lg:hidden" /> De nombreuses notions sont abordées, de l'étude et 
                            la conception de systèmes électronique à la programmation bas niveau de puces RISC-V en assembleur ou de FPGA en VHDL en 
                            passant par la programmation en C et orienté objets.
                            <br /><br />
                            En parallèle de mes études je travaille sur des projets web et crée des objets connectés pour mon appartement.<br />
                            Scrollez un peu pour voir quelques-une de mes realisations.
                            <br /><br />
                            En ce moment je travaille sur l'application d'emploi du temps 
                            <a aria-label="Lien vers l'application MonUFR" class="cursor-pointer underline color-accent" target="_blank" :href=monufr>MonUFR</a> 
                            et sur le jeu WikiChallenge.
                            <br /><br />
                            J'ai aussi la chance de pouvoir participer à la coupe de France de robotique 2024 avec l'association de Robotech de Polytech Sorbonne.
                        </p>
                    </div>
                </div>

                <div class="flex-1 flex flex-col-reverse lg:flex-col gap-10">
                    <div class="p-12 rounded-3xl bg-300">
                        <h2 class="color-900 text-5xl lg:text-6xl font-medium"> Hobby </h2>

                        <p class="color-900 text-35xl lg:text-4xl text-justify mt-10 lg:mt-5">
                            La programmation occupe une petite partie de mon temps extra-scolaire.
                            <br /><br />
                            Mais lorsque je ne travail pas, je suis probablement sorti avec mes amis, en train de cuisiner ou de jouer de la guitare.
                            <br /><br />
                            Au fait, j'adore le sport, je fais de l'escalade depuis 5 ans.
                        </p>
                    </div>

                    <div class="relative overflow-hidden flex-1 work rounded-3xl p-10">
                        <h2 class="color-900 text-5xl lg:text-6xl font-medium"> Travail </h2>

                        <div class="circle-2 z-0"></div>

                        <p class="color-900 text-35xl lg:text-4xl text-justify mt-10 lg:mt-5">
                            Je suis actuellement à la recherche d'un stage d'un mois dans le domaine de l'informatique embarquée. Je suis motivé et travailleur.
                            <br /><br />
                            Si mon profil vous intéresse, envoyez moi un mail, je serais ravi d'essayer de vous convaincre que je suis le meilleur candidat.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects -->
        <div id="projects" class="pl-8 pr-8 lg:pl-0 lg:pr-0 w-full flex flex-col items-center z-10 pt-20 mt-12 lg:mt-20 gap-8 lg:gap-10">
            <div class="lg:w-4/5 max-w-[2200px] flex flex-col gap-10 p-10 lg:p-12 rounded-3xl bg-300">
                <a aria-label="Lien vers l'application MonUFR" :href=monufr target="_blank"><div class="flex flex-row gap-5 items-center justify-center lg:justify-normal">
                    <img alt="Logo de l'application MonUFR" src="@/assets/icons/monufr.png" class="h-14 sm:h-20" />
                    <h2 class="color-900 text-6xl flex flex-row gap-5 items-end font-medium"> MonUFR <span class="hidden lg:block color-accent text-3xl font-normal">({{monufr}})</span> </h2>
                </div></a>
                <p class="color-accent text-3xl lg:hidden -mt-7 text-center"><a aria-label="Lien vers l'application MonUFR" :href=monufr target="_blank"> ({{monufr}}) </a></p>
            
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:mt-8">
                    <div class="relative lg:w-1/3 flex justify-center overflow-hidden">
                        <div class="lg:absolute top-0 max-h-[300px] lg:max-h-none overflow-hidden">
                            <img class="w-[400px]" alt="Capture d'ecran de l'application MonUFR" src="@/assets/images/monufr.webp" />
                            <div class="absolute lg:hidden top-full -translate-y-full w-full h-28 inset-shadow"></div>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col gap-14">
                        <p class="color-900 text-3xl lg:text-4xl text-justify">
                            MonUFR est une application qui permet aux étudiants d'accéder à tous les services de leur FAC. L'application est personnalisée en
                            fonction des villes et des ecoles, retrouvez ainsi suivant votre localisation:
                        </p>

                        <ul class="color-900 text-3xl lg:text-4xl -mt-8 list-disc pl-16 text-justify">
                            <li> l'emploi du temps dans un format simple et clair, même sur mobile </li>
                            <li> la liste des taches liée a chaque cours </li>
                            <li> de nombreux raccourcis pour simplifier l'usage des services connectés des universités </li>
                        </ul>

                        <p class="color-900 text-3xl lg:text-4xl text-justify">
                            Accesible depuis l'écran d'accueil de votre télephone en un clique, MonUFR est en fait PWA: un site internet installable. L'application
                            a ainsi l'avantage d'etre disponible sur toutes les platformes tout en permettant l'accès hors ligne comme une veritable application.
                        </p>
                    </div>
                </div>
            </div>

            <div class="lg:w-4/5 max-w-[2200px] flex flex-col gap-10 p-10 lg:p-12 rounded-3xl bg-300">
                <a aria-label="Lien vers le site de Cyclow-tech" href="https://cyclowtech.org" target="_blank"><div class="flex flex-row gap-5 items-center justify-center lg:justify-normal">
                    <h2 class="color-900 text-6xl flex flex-row gap-5 items-end font-medium"> Cyclow-tech <span class="hidden lg:block color-accent text-3xl font-normal">(https://cyclowtech.org)</span> </h2>
                </div></a>
                <p class="color-accent text-3xl lg:hidden -mt-7 text-center"><a aria-label="Lien vers le site de Cyclow-tech" href="https://cyclowtech.org" target="_blank"> (https://cyclowtech.org) </a></p>
            
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:mt-4">
                    <div class="relative lg:w-1/3 flex justify-center overflow-hidden">
                        <div class="lg:absolute top-0 max-h-[300px] lg:max-h-none overflow-hidden rounded-xl">
                            <img class="w-[400px]" alt="Capture d'ecran du site Cyclow-tech" src="@/assets/images/cyclowtech.webp" />
                            <div class="absolute lg:hidden top-full -translate-y-full w-full h-28 inset-shadow"></div>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col gap-14">
                        <p class="color-900 text-3xl lg:text-4xl text-justify">
                            Le site internet cyclow-tech, réalisé pour l'association étudiante éponyme, a permis de donner de la visibilité aux étudiants créateur de l'association.
                        </p>

                        <p class="color-900 text-3xl lg:text-4xl text-justify">
                            Avec pour but de promouvoir la low-tech au travers d'un périple à vélo au travers de l'europe, l'association avait besoin d'un site pour mettre en avant
                            son action et communiquer au travers la publication d'articles.
                        </p>

                        <p class="color-900 text-3xl lg:text-4xl text-justify">
                            L'aspect écologique étant est un des arguments principaux du projet, le site internet devait aussi suivre en adoptant les bonnes pratiques
                            de la sobriété numerique. <br /><br class="lg:hidden" />
                            Cela passe principalement par la réduction du poids total du site en utilisant des images et des icones à plus faible resolution ou en optimisant le code.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact -->
        <div id="contact" class="pl-8 pr-8 lg:pl-0 lg:pr-0 w-full flex lg:flex-col items-center z-10 pt-20 mt-12 lg:mt-20">
            <div class="lg:w-4/5 max-w-[2200px] flex-1 p-10 lg:p-12 rounded-3xl bg-300">
                <h2 class="color-900 text-5xl lg:text-6xl font-medium"> En savoir plus </h2>

                <div class="flex flex-col md:flex-row gap-10">
                    <p class="color-900 text-3xl lg:text-4xl text-justify mt-6 md:w-2/3">
                        Félécitations, vous êtes arrivé jusqu'ici ! Mon profil vous intéresse ? 
                        <br />
                        Pour en savoir plus vous, pouvez aller visiter mes reseaux ou consulter mon CV.
                    </p>

                    <div class="flex flex-row gap-8 mt-5 flex-1 min-w-fit justify-center items-center">
                        <a aria-label="Lien vers ma page GitHub" class="duration-200 cursor-pointer hover:-translate-y-2.5" href="https://github.com/valentin-llv" target="_blank"> <img alt="Logo GitHub" class="h-20 aspect-square" src="@/assets/icons/github.svg" /> </a>

                        <a aria-label="Lien vers ma page Linkedin" class="duration-200 cursor-pointer hover:-translate-y-2.5" href="https://linkedin.com/in/valentin-le-lievre" target="_blank"> <img alt="Logo Linkedin" class="h-20 aspect-square" src="@/assets/icons/linkedin.svg" /> </a>
                    
                        <a aria-label="Lien pour telecharger mon CV" href="/resume/Valentin LE LIEVRE - CV.pdf" target="_blank"><div class="bg-accent rounded-full p-5 sm:p-6 pl-6 pr-6 sm:pl-14 sm:pr-14 cursor-pointer duration-200 hover:-translate-y-2.5">
                            <p class="text-3xl sm:text-4xl color-900"> Curriculum </p>
                        </div></a>
                    </div>
                </div>

                <p class="color-900 text-3xl lg:text-4xl text-justify mt-14">
                    Et pour travailler avec moi ou pour toute autre demande, mon adresse mail est la suivante: <span class="color-accent">lelievre.valentin17@gmail.com</span>
                </p>

                <a aria-label="Envoyer un mail" href="mailto:lelievre.valentin17@gmail.com" target="_blank">
                    <div class="work p-5 pl-12 pr-12 rounded-full w-fit flex flex-row mt-10 justify-center items-center gap-6 duration-200 cursor-pointer hover:-translate-y-2.5 hover:scale-105">
                        <p class="text-4xl color-900"> Envoyer un mail </p>

                        <img alt="Fleche vers la droite" class="h-12 aspect-square" src="@/assets/icons/arrow-forward.svg" />
                    </div>
                </a>
            </div>
        </div>

        <Footer class="mt-32" />
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    
    import TopMenu from '../../components/TopMenu.vue';
    import Footer from '../../components/Footer.vue';

    const monufr = ref("https://app.monufr.fr");

    onMounted(() => {
        document.getElementById("page")!.addEventListener("scroll", () => {
            if(document.documentElement.clientWidth >= 640) {
                let scroll = document.getElementById("page")!.scrollTop / 2;
                document.getElementById("circle1")!.style.top = (100 + scroll) + "px";
                document.getElementById("circle2")!.style.top = (500 + scroll) + "px";
                document.getElementById("circle3")!.style.top = (1200 + scroll) + "px";
            }
        });
    });
</script>

<style scoped>
.circle-1 {
    position: absolute;
    left: 0%;
    top: 100px;
    transform: translate(-0%, -0%);

    width: 300px;
    height: 300px;

    background-color: var(--color-accent-1);  
    filter: blur(200px);
}

.circle-2 {
    position: absolute;
    left: 100%;
    top: 500px;
    transform: translate(-100%, -0%);
    margin-left: -50px;

    width: 400px;
    height: 400px;
    border-radius: 300px;

    background-color: var(--color-accent-1);  
    filter: blur(300px);
}

.circle-3 {
    position: absolute;
    left: 0%;
    top: 1200px;
    transform: translate(-0%, -0%);

    width: 400px;
    height: 400px;
    border-radius: 300px;

    background-color: var(--color-accent-1);  
    filter: blur(300px);
}

@media screen and (max-width: 640px) {
    .circle-1 {
        left: 0%;
        top: 60px;
        transform: translate(-0%, -0%);
        margin-left: -30px;

        width: 220px;
        height: 220px;

        filter: blur(140px);
    }

    .circle-2 {
        left: 100%;
        top: 900px;
        transform: translate(-100%, -0%);
        margin-left: 100px;

        width: 300px;
        height: 300px;

        filter: blur(200px);
    }

    .circle-3 {
        left: 0%;
        top: 2300px;
        transform: translate(-0%, -0%);

        width: 300px;
        height: 300px;

        filter: blur(200px);
    }

    .circle-4 {
        position: absolute;
        left: 100%;
        top: 4000px;
        transform: translate(-100%, -0%);
        margin-left: 100px;

        width: 300px;
        height: 300px;

        filter: blur(200px);
        background-color: var(--color-accent-1); 
    }
}

.inset-shadow {
    box-shadow: inset 0px -95px 30px -40px var(--color-300);
}

.poppins {
    font-family: Poppins, sans-serif;
}
</style>