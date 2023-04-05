import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostsPage
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
