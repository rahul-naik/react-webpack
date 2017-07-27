import React from 'react';
import ReactDom from 'react-dom';

export class Footer extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            &copy; 2017 BFS DigitalWorks Lab. All rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}