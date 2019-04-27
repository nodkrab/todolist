import React, { Component } from 'react';
//import _ from 'lodash'



export class Listitem extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.showPanel?
          <ul>
            {
              this.props.items.length>0?
              this.props.items.map((value)=>{
                return (
                  <li>
                    <input type="radio" id={value.id} checked={value.isSelected} onClick={this.props._changeSelected} />&nbsp;{value.title}
                  </li>
                )
              })
              :null
            }
            {/* <li>test</li> */}
          </ul>
          :null
        }
      </div>
    );
  }
}

export default Listitem;
