import { useState, useRef, useEffect } from 'react';


const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 }
]

const UserSearch: React.FC = () => {
    // use a ref to focus on the input
    // the type must describe the type of element that the ref is going into
    // but TS doesn't know if this inputref will be assigned any html element yet
    //because it is not applied it might be null. to account for it not being assigned to any element you can annotate the type with or null and give the ref a default value of null
    // pointer, you can use any between the angle brackets to indicate any type
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    //for the found user
    //because it can be two types of state, undefined, and object, you provide a generic type in the angled brackets
    const [user, setUser] = useState<{ name: string, age: number | undefined }>();

    useEffect(() => {
        //reference the input element to focus it.
        //but before that TS wants you to assign inputRef to some html element and is not null
        //do that by using conditional to see if there is a defined inputRef.current value return early from useEffect.
        //this conditional check is called a type guard
        if (!inputRef.current) {
            return;
        }
        //the conditional makes TS sure that the inputref is assigned to an html element
        inputRef.current.focus()

        //ensure that the inner function is only invoked once so set the empty array.
    }, [])

    const onClick = () => {
        //through the iteration if the truthy value is true it returns the user to find and assigns it to foundUser variable. if it finds none it will return undefined
        const foundUser = users.find(user => user.name === name)
        setUser(foundUser)
    }

    return <div>
        User Search
        {/* ref puts the focus on the input */}
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        {/* only use user.name if user is a truthy value */}
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch