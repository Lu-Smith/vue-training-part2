const app = Vue.createApp({
    //data, functions
// template: '<h2> I am a template </h2>'
data() {
    return {
        showBooks: true,
        title: 'The final empire',
        author: 'Luna Smith',
        age: 35
    }
},
methods: {
    changeTitle(title) {
        this.title = title
    },
    toggleShowBooks() {
        this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
        console.log(e, e.type)
        if (data) {
            console.log(data)
        }
    }

}
})
app.mount('#app')