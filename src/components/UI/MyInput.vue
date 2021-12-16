<template>
  <input type="text" :value="value" @input="updateInput"/>
</template>

<script>
export default {
name: 'my-input',
props: {
    value: [String, Number]
},
methods: {
    updateInput(event) {
        this.$emit('input', event.target.value)
    }
}
}
</script>

<style scoped>
  input{
    border: 2px solid teal;
    margin-bottom: 15px;
    padding: 10px;
  }
</style>