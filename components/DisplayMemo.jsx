import React from 'react';
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
    const { loading, error, data } = useQuery(GET_INPUTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Memos:</h2>
            <div>
                {data.inputs.map(input => (
                    <div key={input.id}>
                        <h3>{input.title}</h3>
                        <p>{input.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
