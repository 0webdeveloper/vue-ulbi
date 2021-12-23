<template>
    <form class='forma' @submit.prevent="addPost">
      <my-input placeholder="Название" v-model="post.title"/>
      <my-input placeholder="Описание" v-model="post.body"/>
      <my-button style="align-self: flex-end">Добавать пост</my-button>
    </form>
</template>

<script>
import MyButton from '@/components/UI/MyButton';
import MyInput from '@/components/UI/MyInput';
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
        if(this.post.title.trim() && this.post.body.trim()) {
          this.$emit('addPost', this.post);

          this.post.title = '';
          this.post.body = '';
        }
      }
    },
    components: {
      MyButton, MyInput
    }
}
</script>

<style scoped lang='scss'>
.forma {
  display: flex;
  flex-direction: column;

}
</style>