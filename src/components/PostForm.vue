<template>
    <div>
        <h2>Создание поста</h2>
        <div>
        <input 
            v-model="post.title"
            class="title" 
            type="text"
            placeholder="Название поста"
        >
        </div>
        <div>
        <input 
            v-model="post.body"
            class="text" 
            type="text"
            placeholder="Содержание поста"
        >
        </div>
        <button @click="addPost">Выложить пост</button>
    </div>
</template>

<script>
export default {
    name: 'PostForm',
    data() {
        return {
            post: {
                title: '', 
                body: '',
            }
        }
    },
    methods: {
        addPost() {
            this.$emit('add', this.post)
            this.$emit()
        },
    },
}
</script>

<style>

</style>