<template>
  <v-app>
    <v-main
    :style="{ backgroundColor: colors.surface }"
    >
      <AppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/AppBar.vue'
import colors from '@/assets/styles/colors'
</script>
