import TextareaAutosize from 'react-textarea-autosize';
import useLocalStorage from '../hooks/useLocalStorage';

function TextField() {
  const [text, setText] = useLocalStorage('text', '');

  return (
    <div className="flex w-full h-full">
      <TextareaAutosize
        placeholder="Once upon a time..."
        className="border-none outline-none min-h-full font-mono text-neutral-400 text-base tracking-tight leading-10 placeholder:text-neutral-700 flex-1 resize-none overflow-hidden bg-transparent mr-12 pb-48 pt-4 pl-4 pr-0 lg:px-80 lg:pt-16 xl:px-80 xl:pt-16 2xl:px-80 2xl:pt-16"
        spellCheck={false}
        onInput={(event) => setText(event.target.value)}
        value={text}
        autoFocus
      />
    </div>
  );
}

export default TextField;
