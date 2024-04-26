import Link from "next/link";
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    background-color: cornflowerblue;
    text-align: center;
    text-transform: uppercase;
    h1{color:white; padding: 2%}
`;
const MyNav = styled.nav`
    display: flex;
    background-color: skyblue;
    padding: 1% 20%;
    ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        li{
            list-style-type: none;
            &:hover{
                font-weight: bolder;
            }
        }
    }
    
`;
export default function Nav(){
    return(
        <Header>
            <h1> Memo</h1>
            <MyNav>
                <ul>
                    <li><Link href="/update">Update Memo</Link></li>
                    <li><Link href="/display">Display Memo</Link></li>
                </ul>
            </MyNav>
        </Header>
    )
}
