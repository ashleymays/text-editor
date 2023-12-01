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
    <aside className="sticky top-0 h-screen flex flex-col gap-y-7 px-3 py-6 lg:fixed xl:fixed 2xl:fixed lg:right-0 xl:right-0 2xl:right-0 lg:px-4 lg:py-16 xl:px-4 xl:py-16 2xl:px-4 2xl:py-16">
      {options.map((option) => (
        <Option key={option.title} {...option} />
      ))}
    </aside>
  );
}

export default Sidebar;
