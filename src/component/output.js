import React, { Component } from 'react';
import FriendsShow from './dataShow';
import FormEntre from './form';

class Output extends Component{
    state = {
        friends: [
            {name: "ali", age: "30", id: "1"},
            {name: "Isha", age: "40", id: "2"},
            {name: "mitu", age: '50', id: '3'}
        ]
    }


    addFriends = (friend) => {
        friend.id = Math.random();
        let friendes = [...this.state.friends, friend];
         
        this.setState({
             friends: friendes
         })
     }

    render() {
        return(
           <div>
            <h1>Result</h1>

            <FriendsShow friends={this.state.friends} />

            < FormEntre addFriend = {this.addFriends} />
           </div> 
        )
    }
}

export default Output;
