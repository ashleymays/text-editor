/**
 * Light Mode:
 *  - text: text-neutral-900
 *  - bg: #f8f8f8
 *  - hover: text-neutral-500
 *
 * Dark Mode:
 *  - text: text-
 */
function TextField() {
  const handleChange = (event) => {
    window.localStorage.setItem('innerText', event.target.value);
  };

  return (
    <div
      contentEditable={true}
      placeholder="Once upon a time..."
      className="font-mono text-neutral-400 p-4 lg:px-80 lg:py-16 xl:px-80 xl:py-16 2xl:px-80 2xl:py-16 text-base tracking-tight inline-block leading-10 w-full min-h-screen whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-neutral-700"
      onChange={handleChange}
      spellCheck={false}
    >
      {window.localStorage.getItem('innerText')}
    </div>
  );
}

export default TextField;
