import Link from "next/link";
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 20%;
    background-color: red;
    text-align: center;
`;
const Title= styled.h1`
    color: white;
    font-family: Roboto;
`
const MyNav = styled.nav`
    display: flex;
    background-color: gray;
    justify-content: space-between;
    padding: 0 20%;
    
`;
export default function Nav(){
    return(
        <Header>
            <Title> Cool School Tools</Title>
            <MyNav>
                <Link href="/update">Update Memo</Link>
                <Link href="/display">Display Memo</Link>
                <Link href="/calculator">Calculator</Link>
            </MyNav>
        </Header>
    )
}
