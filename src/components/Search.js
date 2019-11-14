import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            keyword:''
        }
    }
    onChange =(event)=>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState({
            [name]:value
        })
    }
    onSearch =()=>{
        this.props.onSearch(this.state.keyword)
    }
  render() {
     var keyword = this.state.keyword
    return (

        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="input-group">
            <input value= {keyword} onChange ={this.onChange} name="keyword" type="text" class="form-control" placeholder="Nhập từ khóa..." />
            <span class="input-group-btn">
                <button class="btn btn-primary" type="button" onClick ={this.onSearch}>
                    <span class="fa fa-search mr-5"></span>Tìm
                </button>
            </span>
        </div>
        </div>
    )
  }
}
export default Search;
