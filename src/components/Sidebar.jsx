import { CornersOut, DownloadSimple } from '@phosphor-icons/react';
import SidebarItem from './SidebarItem';
import { toggleFullscreen, downloadTextFile } from '../lib/sidebarItemHandlers';

const sidebarItemIconSize = 20;
const sidebarItems = [
  {
    title: 'fullscreen',
    icon: <CornersOut size={sidebarItemIconSize} />,
    onClick: toggleFullscreen
  },
  {
    title: 'download',
    icon: <DownloadSimple size={sidebarItemIconSize} />,
    onClick: downloadTextFile
  }
];

function Sidebar() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 w-10 md:w-12 lg:w-12 xl:w-14 2xl:w-14 h-full flex flex-col items-center py-6 md:py-20 lg:py-20 xl:py-20 2xl:py-20 gap-y-5">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.title} {...item}>
          {item.icon}
        </SidebarItem>
      ))}
    </aside>
  );
}

export default Sidebar;
