import TextareaAutosize from 'react-textarea-autosize';
import useLocalStorage from '../../hooks/use-local-storage';

const placeholder = `Minimal Text Editor is designed to emulate the simplicity of a typewriter.\nIt automatically saves your work even if you close the browser.\nUse the sidebar to adjust your settings and download your work.\nNow start writing...`;

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
        placeholder={placeholder}
        className="min-h-full border-none outline-none text-neutral-900 placeholder:text-neutral-500 dark:text-zinc-300 dark:placeholder:text-zinc-600 font-mono text-base max-xs:text-xs max-sm:text-xs leading-loose flex-1 resize-none overflow-hidden bg-transparent ml-10 md:ml-12 lg:ml-0 xl:ml-0 2xl:ml-0 pb-[45vh] pt-4 pl-0 pr-4 md:px-28 md:pt-20 lg:px-60 lg:pt-20 xl:px-80 xl:pt-20 2xl:px-80 2xl:pt-20"
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
