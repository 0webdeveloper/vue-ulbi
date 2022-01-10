<template>
    <div class="post">
        <div class="post__body">
            <div><strong>Название</strong> {{post.title}}</div>
            <div><strong>Описание</strong> {{post.body}}</div>
        </div>
        <div class='post__btns' @click="$emit('removeTodo', post.id)">
            <my-button>Удалить</my-button>
        </div>
        
    </div>
</template>

<script>
    import MyButton from '@/components/UI/MyButton'
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        components: {
            MyButton
        }
    }
</script>

<style scoped>
  .post {
    border: 2px solid teal;
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post__body{
      text-align: left;
  }
</style>