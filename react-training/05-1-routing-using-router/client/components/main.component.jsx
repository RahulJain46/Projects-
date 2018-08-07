import React, {Component} from 'react';

class Main extends Component {
    render(){
        return(
            <div style={{ backgroundColor: 'orange' }}>
                <div style={{textAlign: 'center'}}>
                    <h1>This is Main Component</h1>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#car">Car</a></li>
                    <li><a href="#about">About</a></li>
                </ul>

                <div className="container" style={{ padding: 20 }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main