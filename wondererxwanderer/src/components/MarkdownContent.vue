<script setup>
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({ html: true });

defineProps({
    source: {
        default: "",
    }
})
</script>

<template>
    <div v-html="markdown.render(source)"></div>
</template>