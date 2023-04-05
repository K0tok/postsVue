<template>
    <div>
        <div v-if="posts.length === 0">
            Добавленных постов нет
        </div>
        <div 
        v-for="(post, index) in posts" 
        :key="index" 
        class="post" 
        
        >
            <div style="display: flex">
                <div style="width: 100%; cursor: pointer" @click="showDetails(post.id)">
                    <div><b>Название поста:</b> {{ post.title }}</div>
                    <div><b>Содержание поста:</b> {{ post.body }}</div>
                </div>
                <button class="pulse" @click="deletePost(index)">Удалить пост</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostList',
        props: {
            posts: {
                type: Array,
                default() {
                    return []
                },
                required: false,
            },
        },
        methods: {
            deletePost(index) {
                this.$emit('deletePost', index)
            },
            showDetails(postId){
                this.$router.push({
                    name: 'post',
                    params: {
                        id: postId,
                    },
                })
            },
        },
    }
</script>

<style>
.pulse:hover, 
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff,0);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}
</style>