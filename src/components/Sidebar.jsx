import { Download, Maximize } from 'react-feather';
import SidebarItem from './SidebarItem';
import { toggleFullscreen, downloadTextFile } from '../lib/sidebarItemHandlers';

const sidebarItemIconSize = 18;
const sidebarItems = [
  {
    title: 'Fullscreen',
    icon: <Maximize size={sidebarItemIconSize} />,
    onClick: toggleFullscreen
  },
  {
    title: 'Download',
    icon: <Download size={sidebarItemIconSize} />,
    onClick: downloadTextFile
  }
];

function Sidebar() {
  return (
    <aside className="fixed top-0 bottom-0 right-0 w-12 h-full flex flex-col items-center gap-y-7 py-6 lg:py-16 xl:py-16 2xl:py-16">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.title} {...item} />
      ))}
    </aside>
  );
}

export default Sidebar;
