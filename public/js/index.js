function uploadFiles(url, formData, callback) {
  progressBar.textContent = '🔵 uploading...';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      callback(JSON.parse(this.responseText), false);
    } else {
      // We reached our target server, but it returned an error
      callback(this, JSON.parse(this.responseText));
    }
  };

  xhr.onerror = function (err) {
    progressBar.textContent = '🔴 error!';
    // There was a connection error of some sort
    callback(this, err);
  };

  // multipart/form-data
  xhr.send(formData);
}

const progressBar = document.querySelector('#progress');
const pre = document.querySelector('pre');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    uploadFiles(event.target.action, data, (res) => {
      console.log(res);
      progressBar.textContent = '✅ done!';
      pre.innerText = JSON.stringify(res, null, 2);
    });
    return false;
  });
});
