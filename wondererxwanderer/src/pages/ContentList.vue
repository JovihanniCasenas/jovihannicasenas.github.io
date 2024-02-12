<script setup>
import { onMounted, ref } from 'vue'
import ContentCard from '@/components/ContentCard.vue'
import Content from '@/types/content.js'
import EmptyContent from '@/types/content.js'
import { sortAndFormatDates } from '@/helper/dateformatter.js'

let isLoading = ref(true)

let mdContents = ref([Content])

const getContentStr = async (path) => {
    let content = { ...EmptyContent }
    const resp = await fetch(`/src${path}`)
    const respTxt = await resp.text()
    content.key = path
    const match = respTxt.match(/^([^\n]+)\n(\d{8})([\s\S]{0,150})/m)
    content.title = match[1]. trim()
    content.published = match[2].trim()
    content.body = match[3].trim() + '...'
    
    return content
}

const getContents = async () => {
    let out = []
    const files = import.meta.glob('/src/content/*.md')
    for (const path in files) {
        const pathSlice = path.slice(4)
        out.push(await getContentStr(pathSlice))
    }
    isLoading.value = false
    return out
}
 onMounted(async () => {
    mdContents.value = await getContents()
    mdContents.value = sortAndFormatDates(mdContents.value)
 })
</script>

<template>
    <ContentCard
    v-for="md in mdContents"
    :key="md.key"
    :id="md.key"
    :title="md.title"
    :published="md.published"
    :md-content="md.body"
    ></ContentCard>
</template>