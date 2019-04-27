import React, { Component } from 'react';
//import _ from 'lodash'


export class Completedsection extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.items.length} {this.props.title} </h1>
        {
          this.props.title!=="Task"?
          <button onClick={this.props._changeComplateHide}>{this.props.showPanel?"Hide":"Show"}</button>
          :null
        }
      </div>
    );
  }
}

export default Completedsection;
