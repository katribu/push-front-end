import { Component } from "react";
import { getUsersFromServer } from "../functions/fetch";



export class Users extends Component {

// need to use Hooks if we are to use functional components with async JS!!!

constructor(props) {
    super(props); 

    this.state = {
        users: [],
    }

}

async componentDidMount() {
    const usersArray = await getUsersFromServer(); 

    this.setState({
        users: usersArray
    }) 

}

render() {
        const {users} = this.state
      
        const user = users.map((user) => {
        return (
        <div>
            <h1>{user.name}</h1>
         </div>
         
        )
        })


        return(
            <div>{user}</div>
        )
    }

}