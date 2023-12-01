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
    <aside className="fixed top-4 lg:top-16 xl:top-16 2xl:top-16 right-0 px-5 flex flex-col items-end gap-y-7">
      {options.map((option) => (
        <Option key={option.title} {...option} />
      ))}
    </aside>
  );
}

export default Sidebar;
