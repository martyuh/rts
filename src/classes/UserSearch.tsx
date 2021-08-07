import React, { Component } from 'react'

//create an interface for user object to clean up the code below
interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    // an array of objects as type for users prop
    users: User[]

}

interface UserSearchState {
    name: string;
    //type for user can be object or undefined
    user: User | undefined;
}
// apply the interface type annotations by using angle brackets
class UserSearch extends Component<UserSearchProps> {
    // create a separate interface to define the state object
    //apply it after state
    state: UserSearchState = {
        name: '',
        user: undefined
    }
    //onclick is a callback function and to prevent 'this' from being undefined you should bind it into an arrow function
    onClick = () => {
        //through the iteration if the truthy value is true it returns the user to find and assigns it to foundUser variable. if it finds none it will return undefined
        const foundUser = this.props.users.find(user => user.name === this.state.name)
        this.setState({ user: foundUser })
    }

    render() {
        //destructure the state
        const { name, user } = this.state;

        return (
            <div>
                User Search
                <input value={name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={this.onClick}>Find User</button>
                {/* only use user.name if user is a truthy value */}
                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
            </div>
        )
    }
}
export default UserSearch