import React from 'react';
import ReactDom from 'react-dom';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="container self-card-container">
                <div className="row solutions-card-container row-grid">
                    {
                        this.props.allSolutions.map((item, index) =>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" key={index}>
                                <div className="custom-card">
                                    <div className="card-header align-item-center" style={{backgroundColor: item.color}}>
                                        <div className="custom-header-image mat-card-avatar d-flex justify-content-center align-self-center">
                                            <img src="./images/how-things-get-done.png" className="align-self-center" />
                                        </div>
                                        <div className="custom-header-text d-flex align-self-center">
                                            <div className="custom-card-title">{item.title}</div>
                                        </div>
                                    </div>
                                    <div className="custom-card-content">
                                        {item.description}
                                    </div>
                                    <div className="custom-card-action align-items-center">
                                        <button className="read-more">Read More</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        );
    }
}