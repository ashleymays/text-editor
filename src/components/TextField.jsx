import ContentEditable from 'react-contenteditable';

function TextField() {
  const handleOnChange = (event) => {
    window.localStorage.setItem('innerText', event.currentTarget.innerText);
    window.localStorage.setItem('html', event.target.value);
  };

  return (
    <ContentEditable
      html={window.localStorage.getItem('html') || ''}
      placeholder="Once upon a time..."
      className="font-mono p-4 lg:px-80 lg:py-20 xl:px-80 xl:py-20 2xl:px-80 2xl:py-20 text-base inline-block leading-normal w-full min-h-screen whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
      onChange={handleOnChange}
    />
  );
}

export default TextField;
