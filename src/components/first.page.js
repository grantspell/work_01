import React, { Component } from 'react';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-around;
    font-family: 'Rokkitt', serif;
`
const SideBar = styled.div`
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    background-color: #fff;
    color: #fdb39b;
    letter-spacing: 8px;
`
const Feed = styled.div`
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .postOne {
        height: 45vh;
        width: 600px;
        border-radius: 7px;
        text-align: center;

        p {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
        }
    }
    .postOne:hover {
        background-color: rgb(245,245,245);
    }
    .postTwo {
        height: 45vh;
        width: 600px;
        border-radius: 7px;
        text-align: center;
    }
    .postTwo:hover {
        background-color: rgb(245,245,245);
    }
`
const Logo = styled.div`
    height: 50%;

    h1 {
        padding-left: 15px;
    }
`
const Links = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a {
        text-decoration: none;
        color: #fdb39b;
        font-size: 20px;
        padding: 0px 0px 15px 15px;
    }
`

class FirstPage extends Component {
    render() {
        return (
            <Wrapper>

                <SideBar>

                    <Logo>
                        <h1>@kaylanspell</h1>
                    </Logo>
                    <Links>
                        <a href="https://www.instagram.com/kaylanspell/" target="__blank">instagram</a>
                    </Links>

                </SideBar>

                <Feed>
                    <div className="postOne">
                        <p>Hello, and today we are talking about products! Products, products, products!<br/>Great and good things are about to be on your head, I just hope you're ready!</p>
                    </div>
                    <div className="postTwo">
                    </div>

                </Feed>

            </Wrapper>
        );
    }
}

export default FirstPage;