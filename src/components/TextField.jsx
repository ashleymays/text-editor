import TextareaAutosize from 'react-textarea-autosize';
import useLocalStorage from '../hooks/useLocalStorage';

function TextField() {
  const [text, setText] = useLocalStorage('text', '');

  return (
    <div className="flex w-full h-full">
      <TextareaAutosize
        placeholder="Once upon a time..."
        className="min-h-full border-none outline-none text-neutral-900 placeholder:text-neutral-400 dark:text-zinc-400 dark:placeholder:text-zinc-800 font-mono text-base tracking-tight leading-10 flex-1 resize-none overflow-hidden bg-transparent mr-10 md:mr-12 lg:mr-12 xl:mr-14 2xl:mr-14 pb-48 pt-4 pl-4 pr-0 md:px-28 md:pt-16 lg:px-60 lg:pt-16 xl:px-80 xl:pt-16 2xl:px-80 2xl:pt-16"
        spellCheck={false}
        onInput={(event) => setText(event.target.value)}
        value={text}
        autoFocus
      />
    </div>
  );
}

export default TextField;
