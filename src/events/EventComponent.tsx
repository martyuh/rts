import React from "react"

const EventComponent: React.FC = () => {
    //with a defined funtion you must manually type annotate the event argument.
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    //apply a drag event type to the event
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return <div>
        {/* with an inline function e=>console.log(e) ts understands/inferences that onChange is a prop and that we have to provide some sort of callback function to it. it will have a first argument,in this case 'event', and it's type will be a react.ChangeEvent<htmlinputelement>. The type inference is not applied if you define your own function, similar to above. you will have to manually enter the type for the argument.*/}
        <input onChange={onChange} />
        {/* create a drag event */}
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
}
export default EventComponent