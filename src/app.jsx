var React =  require( 'react' );
var ReactDOM =  require( 'react-dom' );

var ToDoForm = require( './components/ToDoForm.jsx');
var ToDoList = require( './components/ToDoList.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      tasks: [
        { text: "Hello World", completed: false },
        { text: "Flux", completed: false },
        { text: "ReactJS", completed: false },
        { text: "AngularJS", completed: true }
      ]
    }
  },
  addTask: function(task) {
    if( task.text ){
      this.state.tasks.push(task);
      this.setState( this.state );
    }
  },
  removeTask: function(index) {
    if( index >= 0 && this.state.tasks.length > 0 ){
      this.state.tasks.splice(index, 1);
      this.setState( this.state );
    }
  },
  taskAction: function(index){
    this.state.tasks[index].completed = !this.state.tasks[index].completed;
    this.setState( this.state );
  },
  render: function() {
    return (
        <div>
          <ToDoForm action={this.addTask} />
          <ToDoList 
            tasks={this.state.tasks} 
            removeTask={this.removeTask} 
            taskAction={this.taskAction} />
        </div>
      );
  }
});

ReactDOM.render( <App />, document.getElementById('container') );