<script setup>
import colors from '@/assets/styles/colors'
import { useRouter } from 'vue-router'

const router = useRouter()

const toHome = () => {
    router.push('/home')
}
</script>

<template>
    <v-app-bar
        height="70"
        :color="colors.secondary"
        :elevation="2"
    >
        <template v-slot:prepend>
            <img
            class="wxw-logo"
            src="@/assets/astronaut-no-bg.png"
            alt="wxw logo"
            @click="toHome"
            >
        </template>

        <v-app-bar-title class="app-header-title">wondererxwanderer</v-app-bar-title>

        <template v-slot:append>
            <a href="mailto:casenasjovihanni@gmail.com">
                <img
                class="logo"
                src="@/assets/socials/Gmail_white.png"
                alt="Gmail"
                >
            </a>
            <a href="https://www.linkedin.com/in/jovihanni-casenas-189438286/">
                <img
                class="logo"
                src="@/assets/socials/LinkedIN_white.png"
                alt="LinkedIn"
                >
            </a>
            <a href="https://github.com/JovihanniCasenas">
                <img
                class="logo"
                src="@/assets/socials/Github_white.png"
                alt="Github"
                >
            </a>
        </template>
    </v-app-bar>
</template>