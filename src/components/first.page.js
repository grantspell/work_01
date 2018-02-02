import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Container = styled.div`
    border: solid 10px black;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .one {
        height: 30%;
        border: solid 5px red;
        width: 100%;
    }
    .two {
        height: 30%;
        width: 100%;
        border: solid 5px green;
    }
    .three {
        height: 30%;
        width: 100%;
        border: solid 5px yellow;
    }
`

class FirstPage extends Component {
    render() {
        return (
            <Wrapper>

                <Container>

                    <div className="one">
                        
                    </div>

                    <div className="two">
                    </div>

                    <div className="three">
                    </div>

                </Container>

            </Wrapper>
        );
    }
}

export default FirstPage;