const app = Vue.createApp({
    //data, functions
// template: '<h2> I am a template </h2>'
data() {
    return {
        showBooks: true,
        url: 'https://www.lunasmithart.com/',
        books: [
            {title: 'The final empire',  author: 'Max Wood', img: 'assets/book1.jpg'},
            {title: 'Music',  author: 'Luna Smith', img: 'assets/book2.jpg'},
            {title: 'The Last War',  author: 'Robin Maxwell', img: 'assets/book3.jpg'},
            {title: 'You are my puppy',  author: 'Lucy Darwing', img: 'assets/book4.jpg'},
        ],
        age: 35,
        x: 0,
        y: 0,
        color: ''
    }
},
methods: {
    changeTitle(title) {
        this.books[0].title = title
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