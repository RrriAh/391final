import React, { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
// made by Yu Han

// GraphQL query to fetch inputs
const GET_INPUTS = gql` 
    query GetInputs {
        inputs {
            id
            title
            content
        }
    }
`;

// InputDisplay component to display memos
export default function InputDisplay() {
    // using pollInterval to provide near-real-time synchronization, here we fetch from
    // the server every 0.5 second
    const { loading, error, data } = useQuery(GET_INPUTS, { pollInterval: 500 });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    // using in-line style here to avoid some refreshing bug caused by styled-components in Next.js.
    // bug is when you refresh your page multiple times, it will fail to load styles made by styled-components.
    return (
        <div>
            <h1 style={{ textAlign: "center", fontFamily: "Book Antiqua,serif" }}>Memos</h1>
            {/*align memos in row, and flexWrap can wrap memos onto multiple lines*/}
            <div style={{
                padding: "1vmin", display: "flex", flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {/*make a 300x200 box for each memo, using overflowY to make sure that even when the
                content is long, it will still not exceed the box length. */}
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
