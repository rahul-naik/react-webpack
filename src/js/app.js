import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { List } from './list';
import { Header } from './header';
import { Footer } from './footer';
import { Search } from './searchbox'
//import  contextPath from '../../../config/config

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            solutions: []
        };
        this.allAvailableSolutions = [];
    }
    componentDidMount() {
        axios.get('./solutions.json').then((response) => {
            console.log(response.data);
            this.setState({ solutions: response.data });
            this.allAvailableSolutions = response.data;
        });
    }

    handleFilter(value) {
         var updatedList = this.allAvailableSolutions;
         updatedList =  updatedList.filter((item) => item.keywords.includes(value));
         this.setState({ solutions: updatedList });
    }

    testAPI() {

    }

    // This is called with the results from from FB.getLoginStatus().
    render() {
        console.log(this.state)
        const {newsItems} = this.state;
        const loading = this.state.solutions.length === 0;
        return (
            <div>
                <Header />
                <Search onSearch={this.handleFilter.bind(this)} />
                {loading ?
                    'Loading ... ' : <List allSolutions={this.state.solutions} />
                }
                <Footer />
            </div>
        );
    }
}
