// ChildAsFC tells ts that it is a react component and allows typescript to recognize default props, children props and etc.
import { ChildAsFC } from './Child'


//this will accomplish to questions, are we providing the correct props ot the Child when we show 
//it in Parent? and Are we using the correctly name typed props in Child?
const Parent = () => {
    // pass in an anonymous function
    return <ChildAsFC color='red' onClick={() => console.log('clicked')} >
        {/* passed in as a child prop when it is between to opening and closing component tags */}
        text
    </ChildAsFC>

}

export default Parent;