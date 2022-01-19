<template>
    <select 
     @change="changeOption"
     >
        <option disabled selected value="">Выберите пост из списка</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
        {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update', event.target.value);
        }
    }
}
</script>