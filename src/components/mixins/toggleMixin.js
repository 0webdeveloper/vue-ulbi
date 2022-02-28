export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
      hideDialog() {
        this.$emit("value", false)
      }
  },
  mounted() {
    console.log('mixin mounted')
  }
}