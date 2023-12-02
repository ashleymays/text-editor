/**
 * Light Mode:
 *  - text: text-neutral-900
 *  - bg: #f8f8f8
 *  - hover: text-neutral-500
 *
 * Dark Mode:
 *  - text: text-neutral-400
 *  - bg: #141414
 *  - hover: text-neutral-700
 */
function TextField() {
  const handleChange = (event) => {
    window.localStorage.setItem('text', event.target.value);
  };

  const handlePaste = (event) => {
    event.preventDefault();
  };

  return (
    <div
      contentEditable={true}
      placeholder="Once upon a time..."
      className="sm:mr-12 md:mr-12 pb-16 p-4 pr-0 lg:px-80 lg:pt-16 xl:px-80 xl:pt-16 2xl:px-80 2xl:pt-16 font-mono text-neutral-400 text-base tracking-tight leading-10 whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-neutral-700"
      onChange={handleChange}
      onPaste={handlePaste}
      spellCheck={false}
    >
      {window.localStorage.getItem('text') || ''}
    </div>
  );
}

export default TextField;
