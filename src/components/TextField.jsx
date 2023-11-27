import ContentEditable from "react-contenteditable";

function TextField() {
  const updateText = (event) => {
    window.localStorage.setItem('text', event.target.value);
  }

  return (
    <ContentEditable
      html={window.localStorage.getItem('text')}
      className="p-4 lg:px-80 lg:py-24 2xl:px-80 2xl:py-24 text-lg inline-block leading-normal w-full min-h-full whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
      placeholder="Once upon a time..."
      onChange={updateText}
    />
  );
}

export default TextField;
