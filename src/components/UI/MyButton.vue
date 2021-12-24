<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>

</template>

<script>
export default {
  name: 'my-button', 
}
</script>

<style scoped>
  button {
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
  }
</style>