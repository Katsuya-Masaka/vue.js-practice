let app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  watch: {
    todos: {
      handler: function() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  mounted: function(){
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  methods: {
    addItem: function() {
      let item = {
        title: this.newItem,
        isDone: false
      };
      this.todos.push(item);
      this.newItem = '';
    },
    deleteItem: function(index){
      this.todos.splice(index, 1);
    }
  },
  computed: {
    remaining: function() {
      let items = this.todos.filter(function(todo) {
        return !todo.isDone;
      });
      return items.length
    }

  },
})