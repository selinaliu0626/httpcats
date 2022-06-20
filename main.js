const app = Vue.createApp({
    data() {
        return {
            current: 0,
            first: true,
            last: false,
            favorites: [],
            images: [
                {
                    id: 1,
                    url: "https://http.cat/100",
                },
                {
                    id: 2,
                    url: "https://http.cat/200",
                },
                {
                    id: 3,
                    url: "https://http.cat/301",
                },
                {
                    id: 4,
                    url: "https://http.cat/404",
                },
            ],
        };
    },

    methods: {
        updateCat() {
            if (this.current >= 1) {
                this.current -= 1;
            } else {
                this.first = true;
            }
        },
        nextCat() {
            if (this.current <= 2) {
                this.current += 1;
                this.first = false;
            } else {
                this.last = true;
                this.current = 3;
            }
        },
        addFave() {
            this.favorites.push(this.images[this.current].url);
        },
    },
})

