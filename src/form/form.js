import Framebus from "framebus";
import { createApp } from 'petite-vue';

const bus = new Framebus();

const resizeObserver = new ResizeObserver(() => {
  bus.emit("contribution:resize")
});

resizeObserver.observe(document.body);

bus.emit("contribution:resize")

createApp({
  message: '',
  submit() {
    bus.emit("contribution:submit", this.message);
  }
}).mount()