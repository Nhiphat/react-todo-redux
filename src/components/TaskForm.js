import React from 'react';

class TaskForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id:'',
            name:'',
            status:false
        }
        
    }
    componentWillMount(){
        if(this.props.task){
            this.setState({
                id:this.props.task.id,
                name: this.props.task.name,
                status:this.props.task.status
            })
        }
    }
    componentWillReceiveProps(nextprops){
        if(nextprops&& nextprops.task){
            this.setState({
                id:nextprops.task.id,
                name: nextprops.task.name,
                status:nextprops.task.status
            })
        }
    }
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name ==='status'){
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]:value
        })
    }
    onSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.onClear();
        this.onCloseForm();
        
    }
    onClear = ()=>{
        this.setState({
            name:'',
            status:false 
        }
        )
    }
    render() {
        var id = this.state.id;
        return (
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">{id===''?"Thêm Công Việc":"Cap nhat Cong Viec"}
            <span class="fa fa-times-circle text-right" onClick ={this.onCloseForm}></span>
                    </h3>
                </div>
                <div class="panel-body">
                    <form onSubmit = {this.onSubmit}>
                        <div class="form-group">
                            <label>Tên :</label>
                            <input 
                            type="text" 
                            class="form-control"
                            name ="name"
                            value = {this.state.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                        class="form-control" 
                        required="required"
                        name="status"
                        value ={this.state.status}
                        onChange={this.onChange}
                        >
                            <option value={true} >Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning">Thêm</button>&nbsp;
                            <button 
                            type="button" 
                            class="btn btn-danger"
                            onClick={this.onClear}
                            >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default TaskForm;
