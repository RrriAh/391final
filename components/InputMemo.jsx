import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
//made by Yu Han

// GraphQL mutation
const ADD_INPUT = gql`
    mutation AddInput($title:String!,$content: String!) {
        addInput(title:$title,content: $content) {
            id
            title
            content
        }
    }
`;

// InputMemo component to add memos
export default function InputMemo ()  {
    // set initial values for inputs.
    const [title, setTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    // Mutation hook to execute GraphQL mutation
    const [addInput] = useMutation(ADD_INPUT);

    // update inputs
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setInputContent(event.target.value);
    };


    // Function to handle form submission
    async function handleSubmit(){
        try {
            // Execute GraphQL mutation to add input
            await addInput({ variables: { title: title, content: inputContent } });
            // Clear input fields after submission
            setTitle('');
            setInputContent('');
            // Show success message
            alert('Input submitted successfully!');
        } catch (error) {
            console.error('Error creating input:', error);
            alert('An error occurred while submitting input.');
        }
    }

    // using in-line style here to avoid some refreshing bug caused by styled-components in Next.js.
    // bug is when you refresh your page multiple times, it will fail to load styles made by styled-components.
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <h1 style={{fontFamily: "Book Antiqua,serif"}}>Update Memo Wall</h1>
            {/*input to put title*/}
            <input style={{padding: "1vmin", margin: "1vmin 0"}}
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter your title..."
            />
            {/*textarea is a text box, which is a good choice to put memo's contents in. 300x200 box is the
            same size as the result box in displayMemo */}
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
