export function toggleFullscreen() {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

export function downloadTextFile() {
  const text = JSON.parse(window.localStorage.getItem('text'));
  const link = document.createElement('a');

  link.setAttribute(
    'download',
    `${getFormattedDateString()} Minimal Text Editor`
  );
  link.setAttribute(
    'href',
    URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
  );
  link.click();
}

function getFormattedDateString() {
  return new Date().toLocaleDateString().replaceAll('/', '-');
}
