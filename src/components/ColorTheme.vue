<template>
    <div class="change-color-theme">
        <span :class="{active: color}" @click="changeColor">
            <my-button>
                {{ colorName }}
            </my-button>
        </span>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
    data(){
        return {
            colorName: 'Темная тема',
            color: true,
        }
    },
    components: {
        MyButton
    },
    methods: {
        changeColor() {
            this.color = this.color ? false : true;

            this.$emit('isDark', this.color)
            this.colorName = this.colorName == 'Темная тема' ? 'Светлая тема' : 'Темная тема'
        }
    }
}
</script>

<style lang="scss" scoped>
    .change-color-theme {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
        button {
            background: #fff;
        }
    }
    .active button{
        background: teal;
        color: #fff;
        border-color: teal;
    }
</style>