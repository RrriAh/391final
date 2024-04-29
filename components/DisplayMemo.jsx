import React, { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

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
    const { loading, error, data } = useQuery(GET_INPUTS, { pollInterval: 500 });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "Book Antiqua,serif" }}>Memos</h1>
            <div style={{
                padding: "1vmin", display: "flex", flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {data.inputs.map(input => (
                    <div style={{
                        backgroundColor: "white",
                        margin: "1% 2%",
                        padding: "1vmin",
                        height: "200px",
                        width: "300px",
                        overflowY: "auto",
                        borderRadius: "3px",
                        border: "3px solid darkgray"
                    }} key={input.id}>
                        <h3 style={{ textTransform: "uppercase" }}>{input.title}</h3>
                        <p>{input.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
