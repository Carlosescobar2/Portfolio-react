import React from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';

function About() {
  return (
    <Container id="aboutSection">
        
        <h2>About Me</h2>
            <p>I am a 19-year-old Web Developer from Modesto, California. My journey began in the middle of 2021 when I attended DevMountain for a rigorous 4-month coding Bootcamp. During my time coding, I specialized in React, JavaScript, CSS and HTML. 
            </p>
            <SkillBox>
              
              <h2 >Skills</h2>
              <SkillSection>
                   <span><Icon icon="vscode-icons:file-type-html" /></span>
                   <span><Icon icon="logos:javascript" /></span>
                   <span><Icon icon="vscode-icons:file-type-node" /></span>
                   <span><Icon icon="logos:react" /></span>

                   <span><Icon icon="logos:redux" /></span>
                   <span><Icon icon="vscode-icons:file-type-css" /></span>
                   <span><Icon icon="logos:git-icon" /></span>
                   <span><Icon icon="vscode-icons:file-type-pgsql" /></span>

                </SkillSection>
                </SkillBox>
    </Container>

  )
}
const Container = styled.div`
    background: rgb(121,9,77);
    background: linear-gradient(0deg, rgba(121,9,77,1) 0%, rgba(255,255,255,1) 94%);    
p{
    width: 95vw;
    font-size: 1.5rem;
}

h2{ 
    font-size: 2vw;
    
}

@media (max-width: 767px) {
    h2{
        font-size: 4vw;
    }
}

`

const SkillBox = styled.div`
    margin-top: 8vh;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
    font-size: 2vw;
    margin-top: 5vh;
    color: black;

    }

    @media (max-width: 767px) {
    h2{
        font-size: 4vw;
    }

    }
`



const SkillSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    place-items: center;
    font-size:55px;
    height: 60%;
    width: 80%;
    margin-top: 2vh;

`
export default About;
