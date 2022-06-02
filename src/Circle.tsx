import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps> `
    width: 200px;
    height: 200px;
    background: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps{
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text= "default text"}: CircleProps){
    const [counter, setCounter] = useState(1);
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
        {text}
    </Container>;
}

interface playerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj:playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({name:"nick", age: 13})



export default Circle;