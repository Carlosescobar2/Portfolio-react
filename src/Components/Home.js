import React from 'react';
import styled from 'styled-components';
import About from './About';
function Home() {
  return (

        <Wrap>
            <ItemText>
            <h1>Hello, I'm Carlos Escobar. <br></br> I'm a Web Developer</h1>
            </ItemText>
        <Latestbtn>
         <a href="https://www.youtube.com/watch?v=p7L2zXHgyZc"><button>View latest Work</button></a>
         </Latestbtn>
            
        </Wrap>






  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('/images/rocketBG.gif');
    display:flex; 
    flex-direction:column;
    justify-content:space-between;
    align-items:center; 
`
const ItemText = styled.div`
    display: flex;
    flex-direction: column-reverse;
    text-align:center;
    margin-top:20vw;
    font-style:oblique;
    color: white;
    font-size: 20px;

`

const Latestbtn = styled.div`
    button{
        display: flex;
        margin-bottom: 510px;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        padding: 20px;
        border: none;
    }
    button:hover { 
        -moz-box-shadow:    3px 3px 5px 6px black;
        -webkit-box-shadow: 3px 3px 5px 6px black;
        box-shadow:         3px 3px 5px 6px black;
    }

`

export default Home;
