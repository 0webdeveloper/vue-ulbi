<template>
    <div>
        <h3>Список постов</h3>
        <post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
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

</style>