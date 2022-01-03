<template>
    <div class='dialog' v-if='show' @click ='$emit("value", false)'>
      <div @click.stop class='dialog__content'>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
  .dialog {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: rgba(0, 0, 0, .5);
  }
  .dialog__content {
    margin: auto;
    min-width: 320px;
    min-height: 50px;
    background: #fff;
    border-radius: 12px;
    padding: 15px;
  }
</style>