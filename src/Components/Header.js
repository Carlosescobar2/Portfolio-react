import React from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';


function Header() {
 
    return (
        <Container>
            <RightMenu>
            <a href="https://github.com/Carlosescobar2"><Icon icon="akar-icons:github-fill" /></a>
            <a href='https://www.linkedin.com/in/carlos-escobar11/'><Icon icon="akar-icons:linkedin-fill" /></a>
            </RightMenu>
        </Container>
    )
}



const Container = styled.div`
    min-height:60px;
    background-color: black;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between; 
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;

`
const RightMenu = styled.div`
    display: flex;
     position: absolute;
    right: 0px;
    a{  
        padding:0 30px ;
        font-size: 30px;
        text-decoration: none;
        color: white;
    }
`
export default Header;

