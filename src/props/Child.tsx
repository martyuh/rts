// an interface to define what props Child expects to receive
interface ChildProps {
    //it will receive a prop called color
    color: string;
    //callback function type with a return type of void
    onClick: () => void;
}

//destructure color out of props and annotate with type ChildProps. adding this interface
//makes sure that the the prop is being used correctly
//typescript knows now that color should be a string
//tyepscript does not know that this is a react component
//and so typesript does not recognize assigned properties to the component itself such as propTypes, displayName,defaultProps,and contextTypes
// this approach would not recognize the children prop passed in from the parent unless it was defined in the interface
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            <h1>{color}</h1>
            {/* passed in onClick prop */}
            <button onClick={onClick}>Click Me!</button>
        </div>
    )
}
//this is how you tell typeScript that this is a react component and it will receive a props type object of the interface ChildProps. React.FC can also be written as React.FunctionalComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click Me!</button>
    </div>
}

