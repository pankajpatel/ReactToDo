var React =  require( 'react' );

var TaskAction = React.createClass({
  getButton: function(){
    if( !this.props.completed ){
      return (
          <button type="button" 
            onClick={this.props.setStatus.bind(null, this.props.index)} 
            className="btn btn-xs btn-success">
              <i className="glyphicon glyphicon-ok"></i>
          </button>   
      )
    } else {
      return (
          <button type="button" 
            onClick={this.props.setStatus.bind(null, this.props.index)} 
            className="btn btn-xs btn-info">
              <i className="glyphicon glyphicon-repeat"></i>
          </button>   
        )
    }
  },
  render: function () {
    return (
      <div className="btn-group btn-group-xs pull-right" role="group">
        {this.getButton()}
        <button type="button" 
          onClick={this.props.remove.bind(null, this.props.index)}
          className="btn btn-xs btn-danger" >
            <i className="glyphicon glyphicon-remove"></i>
        </button>
      </div>
    )
  }
});


module.exports = TaskAction;