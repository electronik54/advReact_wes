import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta'

class Page extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta></Meta>
                <p> [page component]</p>
                <Header></Header>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Page;