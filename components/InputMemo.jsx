import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_INPUT = gql`
    mutation AddInput($title:String!,$content: String!) {
        addInput(title:$title,content: $content) {
            id
            title
            content
        }
    }
`;

export default function InputMemo ()  {
    const [title, setTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [addInput] = useMutation(ADD_INPUT);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setInputContent(event.target.value);
    };

    async function handleSubmit(){
        try {
            await addInput({ variables: { title: title, content: inputContent } });
            setTitle('');
            setInputContent('');
            alert('Input submitted successfully!');
        } catch (error) {
            console.error('Error creating input:', error);
            alert('An error occurred while submitting input.');
        }
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter your title..."
            />
            <input
                type="text"
                value={inputContent}
                onChange={handleContentChange}
                placeholder="Enter your input..."
            />
            <button title="Add Memo" onClick={handleSubmit}>Add Memo</button>
        </div>
    );
};
