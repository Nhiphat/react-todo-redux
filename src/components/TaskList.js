import React from 'react';
import TaskItem from './TaskItem'


class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filterName:'',
            filterStatus: -1
        }
    }
    onChange= (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        console.log(value);
        
        this.props.onFilter(
            name ==='filterName'? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]:value
        })
    }
  render() {
      var tasks = this.props.tasks
      var {filterName, filterStatus}= this.state
      var elmTasks = tasks.map((task,index)=>{
          return <TaskItem key={tasks.id} index = {index} task = {task} onUpdateStatus={this.props.onUpdateStatus} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}></TaskItem>
      })
    return (
        <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center">STT</th>
            <th class="text-center">Tên</th>
            <th class="text-center">Trạng Thái</th>
            <th class="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input 
              type="text" 
              class="form-control"
              name ="filterName"
              value ={filterName}
              onChange ={this.onChange}
              />
            </td>
            <td>
              <select class="form-control" name= "filterStatus" value={filterStatus} onChange={this.onChange}>
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    )
  }
}
export default TaskList;
