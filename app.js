var one = new Vue({
    el:'#vue-app-one',
    data: {
      title: 'Vue App One'
    },
    methods: {
        
    },
    computed: {
        greet: function(){
            return 'Hello from app one!';
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title overwritten by app two! Muhaha"
        }
    },
    computed: {
        greet: function() {
            return 'Yo this is app two speaking!';
        }
    }
});