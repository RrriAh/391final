import { useState } from "react";
export default function Calculator(){
    const [input, setInput] = useState('');

    const appendInput = (value) => {
      setInput(input + value);
    };
  
    const calculateResult = () => {
      try {
        // Use eval carefully - in production, consider a safer alternative like a math library
        setInput(String(eval(input)));
      } catch (error) {
        setInput('Error');
      }
    };
  
    const clearInput = () => {
      setInput('');
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h1>Calculator</h1>
        <input style={{ width: '100%', marginBottom: '10px' }} value={input} readOnly />
        <div>
          {'789+456-123*0/.C='.split('').map(char => (
            <button
              key={char}
              onClick={() => {
                if (char === '=') {
                  calculateResult();
                } else if (char === 'C') {
                  clearInput();
                } else {
                  appendInput(char);
                }
              }}
              style={{ width: '22%', height: '50px', fontSize: '20px', margin: '1%' }}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    );
}