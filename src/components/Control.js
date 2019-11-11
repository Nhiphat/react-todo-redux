import React from 'react';
import Search from './Search'
import Sort from './Sort';


class Control extends React.Component {
    render() {
        return (
            <div class="row mt-20">
                <Search></Search>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort></Sort>
                </div>
            </div>
        )
    }
}
export default Control;
