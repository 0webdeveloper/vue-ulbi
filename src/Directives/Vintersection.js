export default {
    name: 'intersection',
    inserted: function(el, binding) {
        // console.log(el, binding);
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    binding.value()
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    }
}