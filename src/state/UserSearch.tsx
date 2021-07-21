import { useState } from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    //for the found user
    //because it can be two types of state, undefined, and object, you provide a generic type in the angled brackets
    const [user, setUser] = useState<{ name: string, age: number | undefined }>()

    const onClick = () => {
        //through the iteration if the truthy value is true it returns the user to find and assigns it to foundUser variable. if it finds none it will return undefined
        const foundUser = users.find(user => user.name === name)
        setUser(foundUser)
    }

    return <div>
        User Search
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        {/* only use user.name if user is a truthy value */}
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch