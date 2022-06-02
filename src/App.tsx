import './App.css';
import styled, {keyframes} from 'styled-components';
import Circle from './Circle';
import React, { useState } from 'react';

const Container = styled.div`
  background: ${props => props.theme.bgColor}
`;
const H1 = styled.h1`
  color:${props => props.theme.textColor}
`;

const Button = styled.button`
  color:${props => props.theme.btnColor}
`;

interface DummyProps {
  text: string;
  active?:boolean;
}

function Dummy({text, active = false}: DummyProps){
  return (<h1>{text}</h1>)
}

function App() {
  const onClick = (e:React.FormEvent<HTMLButtonElement>) =>{

  }
  return (
    <Container>
      <Dummy active={true} text="hello"></Dummy>
      <H1>protected</H1>
      <form>
      <Button onClick={onClick}>submit</Button>
      </form>
    </Container>
  )
}

export default App;
