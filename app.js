new Vue({
    el:'#vue-app',
    data: {
       health: 100,
       ended: false
    },
    methods: {
        punch: function() {
            var changeStyle = document.getElementById("indicator").style;

            this.health -= 10;

            if (this.health <= 0) {
                this.ended = true;
            }
            if (this.health <= 60) {
                changeStyle.background = ("orange");
            }
            if (this.health <= 30) {
                changeStyle.background = ("red");
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
            document.getElementById("indicator").style.background = ("green");
        }
    },
    computed: {

    }
});