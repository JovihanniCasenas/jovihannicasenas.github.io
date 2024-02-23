<script setup>
import MarkdownContent from './MarkdownContent.vue'
import { useRouter } from 'vue-router'
import colors from '@/assets/styles/colors.js'

const router = useRouter()

defineProps({
    id: {
        default: ''
    },
    title: {
        default: 'no title'
    },
    published: {
        default: 'unknown'
    },
    mdContent: {
        default: 'empty'
    }
})

const toContent = (id) => {
    router.push({ name: 'content', params: { id: id }})
}
</script>

<template>
    <v-card 
    class="content-card"
    variant="elevated"
    @click="toContent(id)"
    >
        <v-card-title 
        class="content-card-title"
        :style="{ '--content-card-title': colors.primary }"
        >
            {{ title }}
        </v-card-title>
        <v-card-subtitle>{{ published }}</v-card-subtitle>
        <MarkdownContent
            class="content-card-body"
            :source="mdContent"
        />
    </v-card>
</template>