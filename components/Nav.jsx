import Link from "next/link";
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 20%;
    background-color: cadetblue;
    text-align: center;
`;
const MyNav = styled.nav`
    display: flex;
    background-color: gray;
    justify-content: space-between;
    padding: 0 20%;
    
`;
export default function Nav(){
    return(
        <Header>
            <h1> Memo</h1>
            <MyNav>
                <Link href="/update">Update Memo</Link>
                <Link href="/display">Display Memo</Link>
            </MyNav>
        </Header>
    )
}
