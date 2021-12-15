<template>
    <form class='forma' @submit.prevent="addPost">
      <input type="text" placeholder="Название" v-model="post.title"/>
      <input type="text" placeholder="Описание" v-model="post.body"/>
      <button>Добавать пост</button>
    </form>
</template>

<script>
export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      addPost() {
        this.$emit('addPost', this.post);

          
          this.post.title = '';
          this.post.body = '';
      }
    }
}
</script>

<style scoped lang='scss'>
.forma {
  display: flex;
  flex-direction: column;
  input{
    border: 2px solid rgb(196, 47, 255);
    margin: 0 15px 10px 15px;
    padding: 10px;
  }
  button{
    align-self: flex-end;
    border: 2px solid rgb(196, 47, 255);
    background: none;
    margin-right: 15px;
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>