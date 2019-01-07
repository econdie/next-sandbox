import React, { Component } from 'react';
import '../static/css/styles.css';

class Page extends Component {

    render() {
        return(
            <React.Fragment>
                <div className="container main-container mt-4 mb-5">
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Page;