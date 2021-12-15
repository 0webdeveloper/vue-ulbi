<template>
    <div>
        <div>
            <div class="post">
                <div><strong>Название</strong> {{post.title}}</div>
                <div><strong>Описание</strong> {{post.body}}</div>
            </div>
        </div>
        <div class='post__btns'>
            <button>Удалить</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
  .post {
    border: 2px solid rgb(196, 47, 255);
    margin: 0 15px 15px 15px;
    padding: 15px;
  }
</style>