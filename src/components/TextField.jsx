import ContentEditable from 'react-contenteditable';

function TextField() {
  const updateText = (event) => {
    window.localStorage.setItem('text', event.target.value);
  };

  return (
    <ContentEditable
      html={window.localStorage.getItem('text')}
      placeholder="Once upon a time..."
      className="font-mono p-4 lg:px-80 lg:py-20 xl:px-80 xl:py-20 2xl:px-80 2xl:py-20 text-base inline-block leading-normal w-full min-h-screen whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
      onChange={updateText}
    />
  );
}

export default TextField;
