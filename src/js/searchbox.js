import React from 'react';
import ReactDom from 'react-dom';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    searchList(event){
        var value = event.target.value.toLowerCase();
        this.props.onSearch(value);
    }

    render() {
        return (
            <div className="search-container d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-10 col-sm-7 col-md-7 col-lg-7 col-xl-8 input-group add-on">
                            <input className="form-control" placeholder="Search by app name or technology name" name="srch-term" id="srch-term" type="text" onChange={this.searchList.bind(this)}/>
                            <span className="search">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}