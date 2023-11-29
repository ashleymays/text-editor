import { Download, Maximize } from 'react-feather';
import Option from './Option';
import { toggleFullscreen, downloadFile } from '../lib/optionHandlers';

function Sidebar() {
  const options = [
    {
      title: 'Fullscreen',
      icon: <Maximize size={20} />,
      onClick: toggleFullscreen
    },
    {
      title: 'Download',
      icon: <Download size={20} />,
      onClick: downloadFile
    }
  ];

  return (
    <aside className="fixed top-1/2 right-0 px-3.5 flex flex-col items-end gap-y-7">
      {options.map((option) => (
        <Option key={option.title} {...option}>
          {option.icon}
        </Option>
      ))}
    </aside>
  );
}

export default Sidebar;
