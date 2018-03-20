new Vue ({
    el: ".container",
    data: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: '12'
    },

    methods: {
        increase: function() {
            var font = 12;
            this.fontSize = '17px';
        },
        increaseSecond: function() {
            var font = 12;
            this.fontSize = '22px';
        },
        increaseThird: function() {
            var font = 12;
            this.fontSize = '30px';
        },
    }

    
})