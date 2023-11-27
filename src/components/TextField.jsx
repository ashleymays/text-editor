import { useState } from 'react';
import ContentEditable from "react-contenteditable";

function TextField() {
  const [html, setHtml] = useState("");

  return (
    <ContentEditable
      html={html}
      className="p-4 lg:px-80 lg:py-20 2xl:px-80 2xl:py-20 text-lg inline-block leading-normal w-full min-h-full whitespace-pre-wrap break-words outline-none empty:before:pointer-events-none empty:before:content-[attr(placeholder)] empty:before:text-gray-400"
      placeholder="Once upon a time..."
      onChange={(event) => setHtml(event.target.value)}
    />
  );
}

export default TextField;
