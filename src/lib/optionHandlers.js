export function handleFullscreen() {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

export function handleFileDownload() {
  const innerText = window.localStorage.getItem('innerText');
  const blob = new Blob([innerText], { type: 'text/plain' });
  const link = document.createElement('a');

  const fileName = `${getFormattedDateString()} Online Text Editor`;

  link.setAttribute('download', fileName);
  link.setAttribute('href', URL.createObjectURL(blob));
  link.click();
}

function getFormattedDateString() {
  return new Date().toLocaleDateString().replaceAll('/', '-');
}
