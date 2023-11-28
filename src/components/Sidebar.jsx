import { Download, Maximize } from 'react-feather';
import Option from './Option';

const options = [
  {
    icon: <Maximize size={20} />,
    title: 'Fullscreen'
  },
  {
    icon: <Download size={20} />,
    title: 'Download'
  }
];

function Sidebar() {
  const optionsList = options.map(({ title, icon }) => (
    <Option icon={icon}>{title}</Option>
  ));
  return (
    <aside className="fixed top-1/2 right-0 px-3.5 flex flex-col items-end gap-y-6">
      {optionsList}
    </aside>
  );
}

export default Sidebar;
