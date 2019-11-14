import React from 'react';
import Search from './Search'
import Sort from './Sort';


class Control extends React.Component {
    render() {
        return (
            <div class="row mt-20">
                <Search onSearch = {this.props.onSearch}></Search>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort onSort={this.props.onSort}></Sort>
                </div>
            </div>
        )
    }
}
export default Control;
