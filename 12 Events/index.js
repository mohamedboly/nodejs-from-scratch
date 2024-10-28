import EventEmitter from "events";

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`user ${name} - ${id}`);
});

customEmitter.emit("response", "laye", 233);
