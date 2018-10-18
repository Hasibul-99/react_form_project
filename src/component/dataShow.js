import React, { Component } from 'react';

class FriendsShow extends Component{
    render() {

        const friendData = this.props.friends.map((firend) =>  
            <div key={firend.id}>
                <span> Name: {firend.name}</span>,  <span> Age:{firend.age}</span>
            </div>
        );

        return(
           <div>
            <h1>Output</h1>
            {friendData}
           </div> 
        )
    }
}

export default FriendsShow;