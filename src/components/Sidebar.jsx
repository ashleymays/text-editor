import { Download, Maximize } from 'react-feather';
import Option from './Option';
import { toggleFullscreen, downloadFile } from '../lib/optionHandlers';

const optionIconSize = 18;

const options = [
  {
    title: 'Fullscreen',
    icon: <Maximize size={optionIconSize} />,
    onClick: toggleFullscreen
  },
  {
    title: 'Download',
    icon: <Download size={optionIconSize} />,
    onClick: downloadFile
  }
];

function Sidebar() {
  return (
    <aside className="fixed top-0 bottom-0 right-0 w-12 h-full flex flex-col items-center gap-y-7 py-6 lg:py-16 xl:py-16 2xl:py-16">
      {options.map((option) => (
        <Option key={option.title} {...option} />
      ))}
    </aside>
  );
}

export default Sidebar;
