
import React from 'react'

class TaskItem extends React.Component {
  render() {
    var {task,index}= this.props
    return (
        <tr>
            <td>{index +1}</td>
            <td>{task.name}</td>
            <td class="text-center">
              <span class={task.status === true ? "label label-success" : "label label-warning"}>
                {task.status === true ? 'Kich Hoat':'An'}
                                      </span>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-warning">
                <span class="fa fa-pencil mr-5"></span>Sửa
                              </button>
              &nbsp;
                              <button type="button" class="btn btn-danger">
                <span class="fa fa-trash mr-5"></span>Xóa
                              </button>
            </td>
        </tr>
    )
  }
}
export default TaskItem;
