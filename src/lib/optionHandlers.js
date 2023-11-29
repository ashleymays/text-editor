export function toggleFullscreen() {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

export function downloadFile() {
  const innerText = window.localStorage.getItem('innerText');
  const link = document.createElement('a');

  link.setAttribute(
    'download',
    `${getFormattedDateString()} Online Text Editor`
  );
  link.setAttribute(
    'href',
    URL.createObjectURL(new Blob([innerText], { type: 'text/plain' }))
  );
  link.click();
}

function getFormattedDateString() {
  return new Date().toLocaleDateString().replaceAll('/', '-');
}
