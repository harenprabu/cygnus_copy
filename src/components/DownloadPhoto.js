// export default function downloadPhoto(url: string, filename: string) {
//   if (!filename) filename = url.split('\\').pop().split('/').pop();
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   fetch(proxyUrl + url, {
//     headers: new Headers({
//       'Access-Control-Allow-Origin': '*'
//     }),
//     mode: 'cors'
//   })
//     .then((response) => response.blob())
//     .then((blob) => {
//       const blobUrl = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.download = filename;
//       a.href = blobUrl;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }





//  fetch(url, {
//   headers: new Headers({
//     Origin: location.origin,
//   }),
//   mode: 'no-cors',
// })


export default function downloadPhoto(url, filename) {
  if (!filename) filename = url.split('\\').pop().split('/').pop()
  fetch(url, {
    mode: 'no-cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob)
      forceDownload(blobUrl, filename)
    })
    .catch((e) => console.error(e));
};

function forceDownload(blobUrl, filename) {
  let a = document.createElement('a')
  a.download = filename
  a.href = blobUrl
  document.body.appendChild(a)
  a.click()
  a.remove()
}