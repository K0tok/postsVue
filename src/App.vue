<template>
  <div id="app">
    <post-form
      @add="addPost"
    ></post-form>
    <div>
      <div style="display: flex; align-items: center;">
        <h2 style="flex-grow: 3" >Список постов</h2>
        <input 
        v-model="searchText"
        placeholder="Введите название поста"
        style="font-size: 30px; width: 40%; height: 34px;"
        >
        <select v-model="sortType" style="font-size: 30px; height: 40px;">
          <option>Выберите тип сортировки:</option>
          <option>Сортировать по названию</option>
          <option>Сортировать по содержанию</option>
        </select>
      </div>
      <post-list
        :posts="searchedAndSortedPosts"
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
  name: 'App',
  components: {
    PostList, PostForm,
  },
  data() {
    return {
      posts: [],
      title: '',
      text: '',
      searchText: '',
      sortType: 'Выберите тип сортировки:',
    }
  },
  computed: {
    searchedPosts() {
      const sortedPosts = []
      for (const post of this.posts) {
        if (post.title.includes(this.searchText)) {
          sortedPosts.push(post)
        }
      }
      return sortedPosts

    },
    searchedAndSortedPosts() {
      const searchedPostsCopy = [...this.searchedPosts]
      if (this.sortType === 'Сортировать по названию') {
        return searchedPostsCopy.sort((post1, post2) => {
          return post1.title.localeCompare(post2.title)
        })
      } 
      else if (this.sortType === 'Сортировать по содержанию') {
        return searchedPostsCopy.sort((post1, post2) => {
          return post1.body.localeCompare(post2.body)
        })
      }
      else {
        return searchedPostsCopy
      }
    },
  },
  methods: {
    addPost(post) {
      this.posts.push({
        ...post,
      })
    },
    deletePost(index) {
      this.posts.splice(index, 1)
    },
    async getPosts() {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      try {
        const response = await axios.get(url)
        this.posts = response.data
      } catch(error) {
        console.error('ОШИБКА')
        console.error('Произошла ошибка при получении постов')
      }
    },

  },
  watch: {
    // sortType(newValue, oldValue) {
    //   console.log('sortType is changed to:', newValue, '\nfrom:', oldValue)
    //   if (newValue == 'Сортировать по названию') {
    //     this.posts = this.posts.sort((post1, post2) => {
    //       return post1.title > post2.title
    //     })
    //   } else if (newValue == 'Сортировать по содержанию') {
    //     this.posts = this.posts.sort((post1, post2) => {
    //       return post1.body > post2.body
    //     })
    //   }
    // },
  },
  async created() {
    await this.getPosts()
  },
  mounted(){
  
  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy(){

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
