<template>
    <div>
      <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name='post-list'>
          <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @removeTodo="$emit('remTodo', post.id)"
          />
        </transition-group>

    </div>
      <h3 v-else>Список постов пуст</h3>
    </div>

</template>

<script>
import PostItem from '@/components/PostItem';

export default {
    props: {
        posts: {
            type: Array,
            requited: true
        }
    },
    components: {
        PostItem
    }
}
</script>

<style scoped>
  h3 {
    margin: 15px auto;
  }

  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all .5s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .post-list-move {
    transition: transform .8s ease;
  }
</style>