import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>
                    Sidebar
                    {this.props.smg}
                </h1>
            </div>
        );
    }
}

export default Sidebar;