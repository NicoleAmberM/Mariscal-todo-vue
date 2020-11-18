new Vue({
    el: "#vue-main",
    data:{
        tasks: [],
        newTask: ""
    },
    methods: {
        addTask: function(newTask){
            this.tasks.push(this.newTask);
        }
    }
});