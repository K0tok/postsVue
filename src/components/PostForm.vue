<template>
    <div>
        <h2>Создание поста</h2>
        <div style="display: flex">
            <div>
                <input 
                    v-model="post.title"
                    class="title" 
                    type="text"
                    placeholder="Название поста"
                >
                <input 
                    v-model="post.body"
                    class="text" 
                    type="text"
                    placeholder="Содержание поста"
                >
            </div>
            
            <button class="but" @click="addPost">Выложить пост</button>
        </div>
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
.title {
    width: 100%; 
    font-size: 40px; 
    border-radius: 5px
}
.text {
    width: 100%; 
    font-size: 40px; 
    border-radius: 5px; 
    margin-top: 10px
}
</style>