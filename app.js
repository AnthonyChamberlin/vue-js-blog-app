new Vue({
    el:'#vue-app',
    data: {
        first_name: 'Ant',
        last_name: 'Chamberlin',
        job: 'Frontend Developer',
        website: 'https://www.amazon.co.uk',
        websiteTag: '<a href="https://www.amazon.co.uk" target="_blank">Portfolio Site</a>',
        company: 'MNA Digital'
    }, 
    methods: {
        greet: function(time) {
            return 'Good' + ' ' + time + ' ' + this.first_name;  
        }
    }
});