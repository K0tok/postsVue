<template>
  <div id="app">
    <h2>Создание поста</h2>
    <div>
      <input 
        v-model="title"
        class="title" 
        type="text"
        placeholder="Название поста"
      >
    </div>
    <div>
      <input 
        v-model="text"
        class="text" 
        type="text"
        placeholder="Содержание поста"
      >
    </div>
    <button @click="addPost">Выложить пост</button>

    <h2>Список постов</h2>
    <div 
      v-if="posts.length === 0"
    >
      Добавленных постов нет
      </div>
    <div 
      v-for="(post, index) in posts" 
      :key="index" 
      class="post" 
    >
      <h4>Название поста: {{ post.title }}</h4>
      <p>Содержание поста: {{ post.text }}</p>
      <button @click="deletePost(index)">Удалить пост</button>
    </div>

    <!-- <div>
      Количество лайков: {{likes}}
    </div>
    <div>
      Количество дизлайков: {{dislikes}}
    </div>
    <div>
      <button class="like" @click="addLike">Лайк</button>
      <button class="dislike" @click="addDislike">Дизлайк</button>
    </div> -->
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      // likes: 0,
      // dislikes: 0,
      posts: [
        {
          id: 1,
          title: 'Пост 1',
          text: '111111'
        },        
        {
          id: 2,
          title: 'Пост 2',
          text: '222222222222'
        },
      ],
      title: '',
      text: '',
    }
  },
  methods: {
    // addLike() {
    //   this.likes += 1
    // },
    // addDislike() {
    //   this.dislikes += 1
    // },
    addPost() {
      this.posts.push(
        {
          title: this.title,
          text: this.text
        }
      )
      this.title = this.text = ''
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
  margin-top: 60px;
}
/* .like {
  border-radius: 3px;
  font-size: 20px;
  background-color: greenyellow;
  cursor: pointer;
}
.dislike {
  border-radius: 3px;
  font-size: 20px;
  background-color: red;
  color: white;
  cursor: pointer;
} */
.post {
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
