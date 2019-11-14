import React from 'react';
import './App.css'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEdidting: null,
      filter:{
        name:'',
        status: -1
      },
      keyword:'',
      sort:{
        by:'',
        value: 1
      }
    }
  }
  componentWillMount(){
    console.log(localStorage.getItem('tasks'));
    
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      }) 
    }
  }
  
  onToggleForm = () =>{
    if(this.state.isDisplayForm && this.state.taskEdidting){
      this.setState({
        isDisplayForm : true,
        taskEdidting: null
      })
    }else{
      this.setState({
        isDisplayForm : !this.isDisplayForm,
        taskEdidting: null
      })
    }
    
  }
  onCloseForm = () =>{
    this.setState({
      isDisplayForm : false
    })
    
  }
  onShowForm = () =>{
    this.setState({
      isDisplayForm : true
    })
    
  }
  onSubmit=(data)=>{
    var tasks = this.state.tasks;
    if(data.id===''){
      var task = {
        id:Math.floor(Math.random() * 100000000),
        name : data.name,
        status: data.status
      }
      tasks.push(task)
    }
    else{
      var index = this.findIndex(data.id);
      tasks[index]=data;
    }
    
    this.setState({
      tasks:tasks,
      taskEdidting : null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks)) 
    this.onToggleForm();
  }
  onGenerateDta =()=>{
    var tasks = [
      {
        id : 1,
        name: 'Hoc lap trinh',
        status: true
      },
      {
        id : 2,
        name: 'Di choi',
        status: true
      },
      {
        id : 3,
        name: 'Di Xem Phim',
        status: false
      }
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        return result = index;
      }
    });
    return result;
  }
  onDelete = (id)=>{
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index,1)
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  onUpdate = (id)=>{
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      var taskEdidting = tasks[index]
      this.setState({
        taskEdidting: taskEdidting
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onShowForm();
  }
  onFilter = (filterName, filterStatus)=>{
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter:{
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
    
  }
  onSearch = (keyword)=>{
    this.setState({
      keyword:keyword
    })
  }
  onSort =(sortBy,sortValue)=>{
    console.log(sortBy,sortValue);
    
    this.setState({
      sort:{
        by:sortBy,
        value: sortValue
      }
    })
    
  }
  render() {
    var {tasks,isDisplayForm,taskEdidting, keyword,sort} =this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm = {this.onCloseForm} task ={taskEdidting}></TaskForm>:''
    var filter = this.state.filter;
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter((task)=>{
        if(filter.status === -1){
          return task;
        }
        else{
          return task.status === (filter.status === 1 ? true: false)
        }
      })
    }
    if(keyword){
      tasks = tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if(sort.by === 'name'){
      console.log(tasks);
      
      if(sort.value === 1){
        tasks.sort((a,b)=>{
          return a.name - b.name;
        })
      }else{
        tasks.sort((a,b)=>{
          return (b.name - a.name);
        })
      }
    }else {
      if(sort.value === 1){
        tasks.sort((a,b)=>{
          return b.status - a.status;
        })
      }else{
        tasks.sort((a,b)=>{
          return a.status - b.status;
        })
      }
    }
    return (
      <div class="container">
        <div class="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div class="row">
          <div class={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ""}>
            {elmTaskForm}
          </div>
          <div class={isDisplayForm? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button 
            type="button" 
            class="btn btn-primary"
            onClick={this.onSubmit}
            >
              <span class="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
            <button 
            type="button" 
            class="btn btn-danger ml-5" 
            onClick = {this.onGenerateDta}>
              <span class="fa fa-plus mr-5"></span>Generate Data
                </button>
            <Control onSearch ={this.onSearch} onSort ={this.onSort}></Control>
            <div class="row mt-15">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks = {tasks} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onUpdate ={this.onUpdate} onFilter = {this.onFilter}></TaskList>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
