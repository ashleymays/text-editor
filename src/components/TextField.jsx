import { useState, useEffect } from 'react';

function TextField() {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const originalText = window.localStorage.getItem('innerText');
    const newText = event.clipboardData.getData('text/plain');
    setText(originalText + newText);
  };

  useEffect(() => {
    setText(window.localStorage.getItem('innerText'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('innerText', text);
  }, [text]);

  return (
    <div
      contentEditable={true}
      placeholder="Once upon a time..."
      className="font-mono text-gray-900 p-4 lg:px-80 lg:py-20 xl:px-80 xl:py-20 2xl:px-80 2xl:py-20 text-base inline-block leading-7 w-full min-h-screen whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
      onChange={handleOnChange}
      onPaste={handlePaste}
      spellCheck={false}
    >
      {text}
    </div>
  );
}

export default TextField;
