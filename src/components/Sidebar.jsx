import { Download, Maximize } from 'react-feather';
import Option from './Option';

const options = [
  {
    icon: <Maximize size={20} />,
    title: 'Fullscreen',
    onClick: () => {
      console.log('Fullscreen clicked')
    }
  },
  {
    icon: <Download size={20} />,
    title: 'Download',
    onClick: () => {
      console.log('Download clicked')
    }
  }
];

function Sidebar() {
  const optionsList = options.map((option) => (
    <Option key={option.title} {...option}>{option.title}</Option>
  ));
  return (
    <aside className="fixed top-1/2 right-0 px-3.5 flex flex-col items-end gap-y-7">
      {optionsList}
    </aside>
  );
}

export default Sidebar;
