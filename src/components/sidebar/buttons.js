import { CornersOut, DownloadSimple } from '@phosphor-icons/react';
import { toggleFullscreen, downloadTextFile } from './button-event-handlers';

const sidebarItems = [
  {
    title: 'fullscreen',
    icon: CornersOut,
    onClick: toggleFullscreen
  },
  {
    title: 'download',
    icon: DownloadSimple,
    onClick: downloadTextFile
  }
];

export default sidebarItems;
