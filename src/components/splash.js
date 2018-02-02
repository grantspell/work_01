import React, { Component } from 'react';
import styled from 'styled-components';

// font-family: 'Anton', sans-serif;
// font-family: 'Abel', sans-serif;
// font-family: 'Rokkitt', serif; ** letter-spacing: 40px
// font-family: 'Libre Barcode 39 Text', cursive;
// font-family: 'Playfair Display SC', serif;
// font-family: 'Arapey', serif; X
// font-family: 'Vidaloka', serif;
// font-family: 'Gentium Book Basic', serif;
// font-family: 'Julius Sans One', sans-serif;
// font-family: 'Lora', serif;

// #EAAE95 : "pretty peachy" : top blush on google image

// STYLES
const Wrapper = styled.div`
    background-color: #fdb39b;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    color: rgba(255, 255, 255, .7);
    font-size: 3vw;
    letter-spacing: 37px;
    text-align: center;
    font-family: 'Rokkitt', serif;

    h1:hover {
        color: white;
    }

    .blink-1{-webkit-animation:blink-1 .6s both;animation:blink-1 .6s both}
   
   @-webkit-keyframes blink-1{0%,50%,100%{opacity:1}25%,75%{opacity:0}}@keyframes blink-1{0%,50%,100%{opacity:1}25%,75%{opacity:0}}
`

class Splash extends Component {
    state = {
        atHidden: false
    }

    hovered = (e) => {
        e.preventDefault();
        console.log('HIT');
        this.setState({ atHidden: !this.state.atHidden });
    }

    render() {
        return (
            <Wrapper>
                <h1 className="blink-1" onMouseOver={this.hovered}>@kaylanspell</h1>
            </Wrapper>
        );
    }
}

export default Splash;