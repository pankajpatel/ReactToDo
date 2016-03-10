var React =  require( 'react' );

var TaskAction = require( './TaskAction.jsx');

var ToDoList = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <h4>Tasks</h4>
          <hr/>
          <ul className="list-group">
            {
              this.props.tasks.map(function(task, index){
                var cssClass = 'list-group-item list-group-item-';
                if( task.completed ){
                  cssClass += 'info';
                } else {
                  cssClass += 'success';
                }
                return (
                  <li key={index} className = {cssClass}>
                    <TaskAction 
                      index={index} 
                      completed={task.completed} 
                      setStatus={this.props.taskAction}
                      remove={this.props.removeTask}/>
                    {task.text}
                  </li>
                )
              }, this)
            }
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = ToDoList;