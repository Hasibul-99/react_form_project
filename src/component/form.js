import React, {Component} from 'react';

class FormEntre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addFriend(this.state);
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type="text" id='name' onChange={this.handelChange}/>

                <label>Age</label>
                <input type="text" id="age" onChange={this.handelChange}/>

                <button>Submit</button>
            </form>
        )
    }
}

export default FormEntre;