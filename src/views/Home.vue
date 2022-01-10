<template>
  <div class="home">
    <h1>Страница с постами</h1>

    <div class="app_btns">
      <my-button
        @click.native='showDialog' class='forTest'
      >
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortedOptions"
        @fromMySelect="selectProp"/>

        <app-switch classes="is-warning" v-model="value" checked>Test</app-switch>
    </div>
        
    <my-dialog :show='dialogVisible' @value='dialogVisible = false'>
      <post-form @addPost="addPost"/>
    </my-dialog>

      <post-list 
      :posts="posts"
      @remTodo='removeTodo'
      v-if="!isPostLoading"/>

      <div v-else>Идет загрузка....</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyButton from '@/components/UI/MyButton'
import MyDialog from '@/components/UI/MyDialog'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect'
import Switch from '@/components/Switch'

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortedOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
        {value: 'id', name: 'По id'}
      ],
                      value: false,
                text: ''
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
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true
          const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = responce.data;
      } catch(e) {
        alert('error');
      }
       finally {
        this.isPostLoading = false;
      }
    },
    selectProp(value) {
      this.selectedSort = value;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  components: {
    PostForm, PostList, MyButton, MyDialog, MySelect,
    'app-switch': Switch
  },
          watch: {
            value(val) {
                this.text = val ? 'Yes' : 'No'
            }
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
  .app_btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>