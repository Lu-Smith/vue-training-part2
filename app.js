const app = Vue.createApp({
    //data, functions
// template: '<h2> I am a template </h2>'
data() {
    return {
        title: 'The final empire',
        author: 'Luna Smith',
        age: 35
    }
},
methods: {
    changeTitle() {
        this.title = "Words"
    }
}
})
app.mount('#app')