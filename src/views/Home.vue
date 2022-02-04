<template>
  <div class='home'>
    <h1>Страница с постами</h1>

    <my-input
      class='full-width'
      v-model='searchQuery'
      placeholder='Поиск...'
    />

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
      :posts='sortedAndSearchedPosts'
      @remTodo='removeTodo'
      v-if='!isPostLoading' />

    <div v-else>Идет загрузка....</div>
<<<<<<< HEAD

    <div class='observer' ref='observer'></div>


=======
    <div ref='observer' class='observer'>

    </div>
>>>>>>> 9d384aa154f05ca5a32cc05bbd120af31e98f54f
<!--    <div class='page__wrapper'>-->
<!--      <div-->
<!--        v-for='pageNumber in totalPage'-->
<!--        :key='pageNumber'-->
<!--        class='page__wrapper-page'-->
<!--        :class="{-->
<!--          'current-page': page === pageNumber-->
<!--        }"-->
<!--        @click='changePage(pageNumber)'-->
<!--      >{{ pageNumber }}</div>-->
<!--    </div>-->
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
import MyInput from '@/components/UI/MyInput'

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      totalPage: 0,
      page: 1,
      Limit: 10,
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
    // changePage(pageNumber) {
    //   console.log(pageNumber)
    //     this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.Limit
          }
        })
        this.totalPage = Math.ceil( responce.headers['x-total-count'] / this.Limit)
        this.posts = responce.data
      } catch (e) {
        alert('error')
      } finally {
        this.isPostLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.Limit
          }
        })
        this.totalPage = Math.ceil( responce.headers['x-total-count'] / this.Limit)
        this.posts = [...this.posts, ...responce.data]
      } catch (e) {
        alert('error')
      }
    },
    selectProp(value) {
      this.selectedSort = value
    }
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {

      entries.forEach(entry => {
          if (entry.isIntersecting && this.page < this.totalPage) {
            this.loadMorePosts();
          }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  components: {
    PostForm, PostList, MyButton, MyDialog, MySelect,
    'app-switch': Switch,
    editor,
    MyInput
  },
  watch: {
    value(val) {
      this.text = val ? 'Yes' : 'No'
    },
    // page() {
    //   this.fetchPosts();
    // }
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
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
.full-width {
  width: 100%;
  margin: 20px 0;
}
.page__wrapper {
  display: flex;
  margin: 15px 0;
}
.page__wrapper-page {
  border: 1px solid #2c3e50;
  padding: 10px;
  margin-right: 5px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
}
</style>