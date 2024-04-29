import { useState } from 'react';
import styled from 'styled-components';
import Header from "@/components/Nav";

// this calculator component was made by Isaac Chan

// styled-components for overall calculator layout
// had some issues with refreshing
// adjusted styles based on inspecting element on browser
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CalculatorContainer = styled.div`
  flex: 1;  // take half the space in AppContainer
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalculatorInput = styled.input`
  width: 100%;
  font-size: 24px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

// styling for all buttons in calculator
const CalculatorButton = styled.button`
  width: 22%;
  height: 50px;
  font-size: 20px;
  margin: 1%;
  background-color: #6495EDFF;
  border: none;
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
    color: black;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// container for the image
const ImageContainer = styled.div`
  flex: 1;  // Take half the space in AppContainer
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Calculator() {
    const [input, setInput] = useState('');

    // function to append a character to the input string
    const append = (value) => {
        const display = value === '*' ? 'x' : value;
        setInput(input + display + " "); 
    };

    // calculate the result using eval
    const calculate = () => {
        try {
            // replace 'x' with '*' in the string before evaluation
            const computation = input.replace(/x/g, '*');
            setInput(String(eval(computation)));  // convert result to string and update input
        } catch (error) {
            setInput('Error');  // handle errors in evaluation
        }
    };

    // clear input
    const clear = () => {
        setInput('');  // reset the input to an empty string
    };

    // remove the last character from the input
    const remove = () => {
        if (input.length > 0) {
            setInput(input.slice(0, -1));  // slice to remove the last character
        }
    };

    return (
        <>
        <Header/>
        <AppContainer>
            <ImageContainer>
                <img src="haha.jpg" alt="meme" style={{ maxWidth: '100%', height: 'auto' }}/>
            </ImageContainer>
            <CalculatorContainer>
                <h1>Calculator!</h1>
                <CalculatorInput value={input} readOnly />
                <ButtonsContainer>
                    {'789+456-123x0/.C=⇐'.split('').map(char => (
                        <CalculatorButton
                            key={char}
                            onClick={() => {
                                switch (char) {
                                    case '=':
                                        calculate();
                                        break;
                                    case 'C':
                                        clear();
                                        break;
                                    case '⇐':
                                        remove();
                                        break;
                                    default:
                                        append(char);
                                }
                            }}
                        >
                            {char}
                        </CalculatorButton>
                    ))}
                </ButtonsContainer>
            </CalculatorContainer>
            <ImageContainer>
                <img src="haha2.jpg" alt="haha2" style={{ maxWidth: '100%', height: 'auto' }}/>
            </ImageContainer>
        </AppContainer>
        </>
    );
}
