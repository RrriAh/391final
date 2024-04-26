import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from "styled-components";

const Title = styled.h1`
    font-family: "Book Antiqua",serif;
`;

const Box = styled.div`
    padding: 1vmin;
    display: flex;
    div{
        background-color: white;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 1% 2%;
        padding: 1vmin;
        height: 200px;
        width: 300px;
        overflow-y: auto;
        border-radius: 3px;
        border: darkgray 3px solid;
        h3{
            text-transform:uppercase;
        }
    }
`;

const GET_INPUTS = gql`
    query GetInputs {
        inputs {
            id
            title
            content
        }
    }
`;

export default function InputDisplay() {
    const { loading, error, data } = useQuery(GET_INPUTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Title>Memos</Title>
            <Box>
                {data.inputs.map(input => (
                    <div key={input.id}>
                        <h3>{input.title}</h3>
                        <p>{input.content}</p>
                    </div>
                ))}
            </Box>
        </div>
    );
}
