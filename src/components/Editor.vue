<template>
  <div>
    <input type='text' ref='dayPicker' placeholder='Day' :value='splitDate.day' @input='updateDate($event.target.value)'>
    <input type='text' ref='monthPicker' placeholder='Month' :value='splitDate.month' @input='updateDate($event.target.value)'>
    <input type='text' ref='yearPicker' placeholder='Year' :value='splitDate.year' @input='updateDate($event.target.value)'>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['value'],
  computed: {
    splitDate() {
      let splitValue = this.value.split('/');

      return {
        day: splitValue[0],
        month: splitValue[1],
        year: splitValue[2]
      }
    }
  },
  methods: {
    updateDate(value) {
      this.$emit('input', `${this.$refs.dayPicker.value}/${this.$refs.monthPicker.value}/${this.$refs.yearPicker.value}`)
    }
  }
}
</script>

<style scoped>

</style>