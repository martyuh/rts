import { useState } from 'react'

const GuestList: React.FC = () => {

    //TS will use type inference to guess the type of state
    const [name, setName] = useState('');
    //it sees the empty and is not able to determine the type that will be stored, it assigns never when it does not know the type that will go in the array
    //to tell ts the type of state, indicate after useState with angle brackets
    //in this case it is an array of strings
    const [guest, setGuest] = useState<string[]>([]);

    const onClick = () => {
        setName('')
        setGuest([...guest, name])
    }

    const guestList = () => {
        return guest.map(guest => <li key={guest}>{guest}</li>)
    }

    return <div>
        <h3>Guest List</h3>
        <ul>{guestList()}</ul>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Enter</button>
    </div>;
};
export default GuestList