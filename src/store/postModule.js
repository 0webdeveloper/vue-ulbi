import axios from 'axios'

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPost(state) {
      return [state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      })
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPages(state, totalPage) {
      state.totalPage = totalPage
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true);
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.Limit
          }
        })
        commit('setTotalPages', Math.ceil( responce.headers['x-total-count'] / state.Limit))
        commit('setPosts', responce.data);
      } catch (e) {
        alert('error')
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.pate + 1);
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.Limit
          }
        })
        commit('setTotalPages', Math.ceil( responce.headers['x-total-count'] / state.Limit));
        commit('setPosts', [state.posts, ...responce.data]);
      } catch (e) {
        alert('error')
      }
    },
  }
}