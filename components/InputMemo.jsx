import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    h1{
      font-family: "Book Antiqua",serif;  
    }
    input{
        padding: 1vmin;
        margin: 1vmin 0;
    }
    textarea{
        padding: 1vmin;
        width: 300px;
        height: 200px;
    }
    button{
        margin-top: 1vmin;
        padding: 1vmin;
        border-radius: 3px;
        background-color: lightsteelblue;
        border-color: lightsteelblue;
    }
`;

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
        <MyDiv>
            <h1>Update Memo Wall</h1>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter your title..."
            />
            <textarea
                value={inputContent}
                onChange={handleContentChange}
                placeholder="Put your memo here..."
            />
            <button title="Add Memo" onClick={handleSubmit}>Add Memo XD</button>
        </MyDiv>
    );
};
