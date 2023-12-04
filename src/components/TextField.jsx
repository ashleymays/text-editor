import TextareaAutosize from 'react-textarea-autosize';
import useLocalStorage from '../hooks/useLocalStorage';

function TextField() {
  const [text, setText] = useLocalStorage('text', '');

  const updateText = (event) => {
    setText(event.target.value);
  };

  const scrollToBottom = (height) => {
    window.scrollTo(0, height);
  };

  return (
    <div className="flex w-full h-full">
      <TextareaAutosize
        placeholder="Once upon a time..."
        className="min-h-full border-none outline-none text-neutral-900 placeholder:text-neutral-400 dark:text-zinc-600 dark:placeholder:text-zinc-900 font-mono text-base leading-8 flex-1 resize-none overflow-hidden bg-transparent mr-10 md:mr-12 lg:mr-0 xl:mr-0 2xl:mr-0 pb-72 pt-4 pl-4 pr-0 md:px-28 md:pt-16 lg:px-60 lg:pt-16 xl:px-80 xl:pt-16 2xl:px-80 2xl:pt-16"
        spellCheck={false}
        onInput={updateText}
        onHeightChange={scrollToBottom}
        value={text}
        autoFocus
      />
    </div>
  );
}

export default TextField;
