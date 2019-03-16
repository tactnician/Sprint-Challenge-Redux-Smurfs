import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        });
    };

    addSmurf = event => {
        event.preventDefault();
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };

    render() {
        return (
        <div>
            <form>
            <input
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleChange}
            />
            <input
                className="input"
                value={this.state.age}
                name="age"
                type="text"
                placeholder="Age"
                onChange={this.handleChange}
            />
            <input
                className="input"
                value={this.state.email}
                name="height"
                type="text"
                placeholder="Height"
                onChange={this.handleChange}
            />
            <button onClick={() => this.addSmurf()}>
                Smurf It Baby!
            </button>
        </form>
        </div>
        )
    }
}


export default connect(()=>{}, {addSmurf})(SmurfForm);