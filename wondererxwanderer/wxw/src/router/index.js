import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            meta: { layout: 'home' },
            components: {
                default: () => import('@/pages/ContentList.vue'),
            }
        },
        {
            path: '/content/:id',
            name: 'content',
            meta: { layout: 'content' },
            components: {
                default: () => import('@/pages/ContentView.vue'),
            }
        }
    ]
})

export default router