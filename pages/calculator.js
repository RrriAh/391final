import { useState } from 'react';
import styled from 'styled-components';
import Header from "@/components/Nav";

// Styled-components for overall calculator layout
const CalculatorContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled input to display the calculator's current input or result
const CalculatorInput = styled.input`
  width: 100%;
  font-size: 24px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

// Styling for each button in the calculator
const CalculatorButton = styled.button`
  width: 22%;
  height: 50px;
  font-size: 20px;
  margin: 1%;
  background-color: #grey;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

// Container for the grid of calculator buttons
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Calculator component definition
export default function Calculator() {
    const [input, setInput] = useState('');

    // Function to append a character to the input string
    const appendInput = (value) => {
        setInput(input + value);
    };

    // Function to calculate the result using eval (note: eval can be risky and a safer parser is recommended for production)
    const calculateResult = () => {
        try {
            setInput(String(eval(input)));  // Convert calculation result to string and update input state
        } catch (error) {
            setInput('Error');  // Handle errors in evaluation, such as syntax errors
        }
    };

    // Function to clear the calculator input
    const clearInput = () => {
        setInput('');  // Reset the input to an empty string
    };

    // Function to remove the last character from the input
    const removeLastInput = () => {
        if (input.length > 0) {
            setInput(input.slice(0, -1));  // Use slice to remove the last character
        }
    };

    return (
        <>
        <Header/>
        <CalculatorContainer>
            <h1>Calculator</h1>
            <CalculatorInput value={input} readOnly />
            <ButtonsContainer>
                {'789+456-123*0/.C=⇐'.split('').map(char => (
                    <CalculatorButton
                        key={char}
                        onClick={() => {
                            switch (char) {
                                case '=':
                                    calculateResult();
                                    break;
                                case 'C':
                                    clearInput();
                                    break;
                                case '⇐':
                                    removeLastInput();
                                    break;
                                default:
                                    appendInput(char);
                            }
                        }}
                    >
                        {char}
                    </CalculatorButton>
                ))}
            </ButtonsContainer>
        </CalculatorContainer>
        </>
    );
}
