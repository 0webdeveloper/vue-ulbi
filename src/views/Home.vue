<template>
  <div class='home'>
    <h1>Страница с постами</h1>

    <div class='app_btns'>
      <my-button
        @click.native='showDialog' class='forTest'
      >
        Создать пост
      </my-button>

      <my-select
        v-model='selectedSort'
        :options='sortedOptions'
        @update='selectProp' />

      <app-switch
        classes='is-warning'
        v-model='value'
        checked>
        {{ text }}
      </app-switch>

      <editor v-model='date'></editor>
      <h2>{{ date }}</h2>

    </div>

    <my-dialog :show='dialogVisible' @value='dialogVisible = false'>
      <post-form @addPost='addPost' />
    </my-dialog>

    <post-list
      :posts='sortedPost'
      @remTodo='removeTodo'
      v-if='!isPostLoading' />

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
import editor from '@/components/Editor'

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
        // {value: 'id', name: 'По id'}
      ],
      value: false,
      text: '',
      date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
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
      this.dialogVisible = false
    },
    removeTodo(post) {
      this.posts = this.posts.filter(p => p.id !== post)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = responce.data
      } catch (e) {
        alert('error')
      } finally {
        this.isPostLoading = false
      }
    },
    selectProp(value) {
      this.selectedSort = value
    }
  },
  mounted() {
    this.fetchPosts()
  },
  components: {
    PostForm, PostList, MyButton, MyDialog, MySelect,
    'app-switch': Switch,
    editor
  },
  watch: {
    value(val) {
      this.text = val ? 'Yes' : 'No'
    }
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // }
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
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

.app_btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>