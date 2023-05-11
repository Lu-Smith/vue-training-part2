const app = Vue.createApp({
    //data, functions
// template: '<h2> I am a template </h2>'
data() {
    return {
        showBooks: true,
        title: 'The final empire',
        author: 'Luna Smith',
        age: 35,
        x: 0,
        y: 0,
        color: ''
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
    },
    handleMouseMove(e) {
        this.x= e.offsetX
        this.y = e.offsetY
        if(e.offsetX > 200 && e.offsetY > 100) {
            this.color = 'blue'
        } else if(e.offsetX > 200 && e.offsetY < 100) {
            this.color = 'green'
        } else if(e.offsetX < 200 && e.offsetY < 100) {
            this.color = 'yellow'
        } else {
            this.color = 'red'
        }
    }
}
})
app.mount('#app')