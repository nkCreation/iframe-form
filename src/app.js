import Framebus from "framebus";

const bus = new Framebus();

bus.on("contribution:resize", () => {
  document.querySelectorAll('iframe.contribution').forEach(iframe => resizeFrame(iframe))
})

document.querySelectorAll('iframe.contribution').forEach(iframe => iframe.onload = resizeFrame(iframe))

bus.on("contribution:submit", (data) => {
  document.getElementById('message').textContent = data;
});


function resizeFrame(i) {
  i.style.height = i.contentWindow.document.body.scrollHeight + 'px'
}