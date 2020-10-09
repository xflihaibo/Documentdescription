import React from 'react';
import ReactDOM from 'react-dom';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numone: 2,
            numtwo: 2,
            numres: 0
        };
    }
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillReceiveProps() {
        console.log(componentWillReceiveProps);
    }

    HandelChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        });
    };

    HandelCount = val => {
        const {numone, numtwo} = this.state;
        let numres = val == 'add' ? parseInt(numone) + parseInt(numtwo) : parseInt(numone) - parseInt(numtwo);
        this.setState({
            numres
        });
    };
    render() {
        const {numone, numtwo, numres} = this.state;
        // console.log(this.props);
        return (
            <div className="container">
                <ul>
                    <li className="libox">12</li>
                    <li className="libox">123</li>
                    <li className="libox">12</li>
                </ul>
                <h2>using from init</h2>
                <div className="HeaderBox" />
                <div>
                    Input 1
                    <input type="text" placeholder="Input 1" value={numone} onChange={e => this.HandelChange(e, 'numone')} />
                </div>
                <div>
                    Input 2 :
                    <input type="text" placeholder="Input 2" value={numtwo} onChange={e => this.HandelChange(e, 'numtwo')} />
                </div>
                <div>
                    Output :
                    <span>{numres} </span>
                </div>
                <div>
                    <button id="add" onClick={() => this.HandelCount('add')}>
                        Add
                    </button>
                    <button id="subtract" onClick={() => this.HandelCount('sub')}>
                        <span>Subtract</span>
                    </button>
                </div>
                <hr />
            </div>
        );
    }
}
