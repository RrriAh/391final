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
        <div style={{ display: "flex", flexDirection: "column"}}>
            <h1 style={{fontFamily: "Book Antiqua,serif"}}>Update Memo Wall</h1>
            <input style={{padding: "1vmin", margin: "1vmin 0"}}
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter your title..."
            />
            <textarea style={{padding: "1vmin", width: "300px", height: "200px"}}
                value={inputContent}
                onChange={handleContentChange}
                placeholder="Put your memo here..."
            />
            <button style={{marginTop: "1vmin",
                padding: "1vmin",
                borderRadius: "3px",
                backgroundColor: "#B0C4DEFF",
                borderColor: "#B0C4DEFF"}}
                title="Add Memo" onClick={handleSubmit}>Add Memo XD</button>
        </div>
    );
};
