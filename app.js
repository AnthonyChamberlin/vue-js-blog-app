new Vue({
    el:'#vue-app',
    data: {
        first_name: 'Ant',
        last_name: 'Chamberlin',
        job: 'Frontend Developer',
        company: 'MNA Digital'
    }, 
    methods: {
        greet: function(time) {
            return 'Good' + ' ' + time + ' ' + this.first_name;  
        }
    }
});