import SidebarItem from './sidebar-item';
import buttons from './buttons';

function Sidebar() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 w-10 md:w-12 lg:w-12 xl:w-14 2xl:w-14 h-full flex flex-col items-center py-6 md:py-20 lg:py-20 xl:py-20 2xl:py-20 gap-y-5">
      {buttons.map((item) => (
        <SidebarItem key={item.title} {...item}>
          <item.icon size={21} />
        </SidebarItem>
      ))}
    </aside>
  );
}

export default Sidebar;
