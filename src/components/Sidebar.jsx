import FullscreenOption from "./FullscreenOption";
import DownloadOption from './DownloadOption';

function Sidebar() {
  return (
    <aside className="fixed top-1/2 right-0 px-3.5 flex flex-col items-end gap-y-7">
      <FullscreenOption />
      <DownloadOption />
    </aside>
  );
}

export default Sidebar;
