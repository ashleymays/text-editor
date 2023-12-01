function TextField() {
  const handleChange = (event) => {
    window.localStorage.setItem('innerText', event.target.value);
  };

  return (
    <div
      contentEditable={true}
      placeholder="Once upon a time..."
      className="font-mono text-gray-900 p-4 lg:px-80 lg:py-16 xl:px-80 xl:py-16 2xl:px-80 2xl:py-16 text-base inline-block leading-10 w-full min-h-screen whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-500"
      onChange={handleChange}
      spellCheck={false}
    >
      {window.localStorage.getItem('innerText')}
    </div>
  );
}

export default TextField;
