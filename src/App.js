import React, { Component } from "react";
import Header from "./components/Header";
import Completedsection from "./components/Completedsection";
import Listitem from "./components/Listitem";
import _ from 'lodash'

import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showPanel : true,
      itemsComplate : [],
      itemsTask : [],
      list : [
        {
          id: 1,
          title: "Task 1",
          isSelected: true
        },
        {
          id: 2,
          title: "Task 2",
          isSelected: false
        }
      ]
    }

    this._changeComplateHide = this._changeComplateHide.bind(this)
    this._addTask = this._addTask.bind(this)
  }


  componentDidMount() {
    const itemsComplate = _.filter(this.state.list,function(li) { return li.isSelected===true })
    const itemsTask = _.filter(this.state.list,function(li) { return li.isSelected===false })
    this.setState({
      itemsComplate : itemsComplate,
      itemsTask : itemsTask
    })
  }


  _changeComplateHide = () => {
    const showPanel = !this.state.showPanel
    this.setState({
      showPanel:showPanel //เขียนลดรูปได้ showPanel อย่างเดียวก็ได้
    })
  }

  _changeSelected = (event)  => {
    const target_id = event.target.id
    const list = this.state.list

    const selecteItem = list.find((item)=>{ return parseInt(item.id)===parseInt(target_id) })
    const selected = selecteItem.isSelected
    selecteItem.isSelected = !selected

    const itemsComplate = _.filter(this.state.list,function(li) { return li.isSelected===true })
    const itemsTask = _.filter(this.state.list,function(li) { return li.isSelected===false })

    this.setState({
      list : list,
      itemsComplate : itemsComplate,
      itemsTask : itemsTask
    })
  }

  _addTask = () => {
    let list = this.state.list
    let itemsTask = this.state.itemsTask

    const len = list.length+1
    const newList = {
      id: len,
      title: "Task "+len,
      isSelected: false
    }

    list = [...list,newList]
    itemsTask = [...itemsTask,newList]
    this.setState({
      list : list,
      itemsTask : itemsTask
    })
  }

  render() {

    let {itemsComplate,itemsTask,showPanel} = this.state
    return (
      <div className="App">
        <Header 
            title="New List" 
            _addTask={this._addTask}
        />
        <div style={{backgroundColor:"#00b6ff"}}>
          <Completedsection 
              title="Completed" 
              items={itemsComplate}
              showPanel={showPanel}
              _changeComplateHide={this._changeComplateHide}
          />
          <Listitem 
              items={itemsComplate} 
              showPanel={this.state.showPanel}
              _changeSelected={this._changeSelected}
          />
        </div>

        
        <Completedsection 
            title="Task" 
            items={itemsTask}
            showPanel={showPanel}
            _changeComplateHide={this._changeComplateHide}
        />
        <Listitem 
            items={itemsTask} 
            showPanel={true}
            _changeSelected={this._changeSelected}
        />
      </div>
    );
  }
}

export default App;
