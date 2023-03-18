<template>
  <div id="app">
    <post-form
      @add="addPost"
    ></post-form>
    <div>
      <h2>Список постов</h2>
      <post-list
        :posts="posts"
      ></post-list>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  name: 'App',
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Пост 1',
          body: 'Текст поста №1'
        },        
        {
          id: 2,
          title: 'Пост 2',
          body: 'Текст поста №2'
        },
      ],
      title: '',
      text: '',
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
    },
    deletePost(index) {
      this.posts.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 60px 20px;
}

.post {
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
