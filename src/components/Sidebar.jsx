import { Download, Maximize } from 'react-feather';
import Option from './Option';
import { toggleFullscreen, downloadFile } from '../lib/optionHandlers';

function Sidebar() {
  const options = [
    {
      title: 'Fullscreen',
      icon: <Maximize size={18} />,
      onClick: toggleFullscreen
    },
    {
      title: 'Download',
      icon: <Download size={18} />,
      onClick: downloadFile
    }
  ];

  return (
    <aside className="sticky top-0 h-screen px-2 py-6 lg:px-4 lg:py-16 xl:px-4 xl:py-16 2xl:px-4 2xl:py-16 flex flex-col gap-y-7">
      {options.map((option) => (
        <Option key={option.title} {...option} />
      ))}
    </aside>
  );
}

export default Sidebar;
