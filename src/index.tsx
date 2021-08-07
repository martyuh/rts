import ReactDOM from "react-dom";
// import EventComponent from "./events/EventComponent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";


const App = () => {
    return <div>
        {/* <GuestList />
        <UserSearch />
        <EventComponent /> */}
        <UserSearch />

    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)