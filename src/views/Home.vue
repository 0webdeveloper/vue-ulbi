<template>
  <div class="home">
    <h1>Страница с постами</h1>
        <my-button
          @click.native='showDialog' class='forTest'
        >Создать пост</my-button>

    <my-dialog :show='dialogVisible' @value='dialogVisible = false'>
      <post-form @addPost="addPost"/>
    </my-dialog>

      <post-list :posts="posts" @remTodo='removeTodo'/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyButton from '@/components/UI/MyButton'
import MyDialog from '@/components/UI/MyDialog'

export default {
  name: 'Home',
  data() {
    return {
      posts: [
        { id: 1, title: 'Описание', body: 'Описание поста'},
        { id: 2, title: 'Описание 2', body: 'Описание поста 2'},
        { id: 3, title: 'Описание 3', body: 'Описание поста 3'}
      ],
      dialogVisible: false,
    }
  },
  methods: {
    addPost(data) {
      const newPost = {
        id: Date.now(),
        title: data.title,
        body: data.body
      }
      this.posts.push(newPost);
      this.dialogVisible = false;
    },
    removeTodo(post) {
      this.posts = this.posts.filter(p=> p.id !== post);
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  components: {
    PostForm, PostList, MyButton, MyDialog
  }
}
</script>

PostList
<style scope>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
  }

</style>