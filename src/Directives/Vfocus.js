export default {
    name: 'focus',
    inserted(el) {
        console.log(el);
        el.focus();
    }
}