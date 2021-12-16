<template>
  <div class="home">
      <post-form @addPost="addPost"/>
      <post-list :posts="posts"/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'

export default {
  name: 'Home',
  data() {
    return {
      posts: [{
          id: 1,
          title: 'Описание',
          body: 'Описание поста'
        },
        {
          id: 2,
          title: 'Описание 2',
          body: 'Описание поста 2'
        },
        {
          id: 3,
          title: 'Описание 3',
          body: 'Описание поста 3'
        }
      ]
    }
  },
  methods: {
    addPost(data) {
      const newPost = {
        id: Date.now(),
        title: data.title,
        body: data.body
      }
      this.posts.push(newPost)
    }
  },
  components: {
    PostForm, PostList
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