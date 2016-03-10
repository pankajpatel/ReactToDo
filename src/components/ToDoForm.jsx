var React =  require( 'react' );

var ToDoForm = React.createClass({
  handleAdd: function(){
    var task = {text: this.refs.task.value, completed: false};
    this.props.action( task );
  },
  render: function() {
    return (
      <div className="jumbotron">
        <form>
          <div className="row">
            <div className="col-md-9">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Task" ref="task" />
              </div>
            </div>
            <div className="col-md-3">
              <button type="button" onClick={this.handleAdd} className="btn btn-primary btn-block">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = ToDoForm;