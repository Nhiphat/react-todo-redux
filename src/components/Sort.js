import React from 'react';


class Sort extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sort:{
                by:'',
                value:1
            }
        }
    }
    onClick = (sortBy,sortValue)=>{
        this.props.onSort(sortBy,sortValue)
    }
  render() {
    return (
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sắp Xếp <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick ={()=>this.onClick('name', 1)}>
                <a role="button" >
                    <span class="fa fa-sort-alpha-asc pr-5">
                        Tên A-Z
                                </span>
                </a>
            </li>
            <li onClick ={()=>this.onClick('name', -1)}>
                <a role="button">
                    <span class="fa fa-sort-alpha-desc pr-5">
                        Tên Z-A
                                </span>
                </a>
            </li>
            <li role="separator" class="divider"></li>
            <li onClick ={()=>this.onClick('status', 1)}><a role="button">Trạng Thái Kích Hoạt</a></li>
            <li onClick ={()=>this.onClick('status', -1)}><a role="button">Trạng Thái Ẩn</a></li>
        </ul>
    </div>
    )
  }
}
export default Sort;
