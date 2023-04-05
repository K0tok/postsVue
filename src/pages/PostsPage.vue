<template>
  <div id="app">
    <post-form
      @add="addPost"
    ></post-form>
    <div>
      <h2>Список постов</h2>
      <input 
        v-model="searchString"
        placeholder="поиск поста">
      <post-list
        :posts="searchedPost"
        @deletePost="deletePost"
      ></post-list>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import axios from 'axios'

export default {
  name: 'PostsPage',
  components: {
    PostList, PostForm,
  },
 data(){
    return{
      title: '',
      body: '',
      posts: [],
      searchString: '',
    };
  },
  computed: {
    searchedPost(){
      const sortedPost = [];
      for (const post of this.posts){
        if (post.title.includes(this.searchString)){
          sortedPost.push(post);
        }
      }
      return sortedPost;
    },
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
    },
    deletePost(index) {
      this.posts.splice(index, 1)
    },
    async getPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      try {
        const response = await axios.get(url)
        this.posts = response.data
      }
      catch(error) {
        console.error('ОШИБКА')
        console.error('произошла ошибка при получении постов')
      }
    },
  },
 async created(){
    await this.getPosts()
  },
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