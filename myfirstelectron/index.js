const remote = require("electron").remote;
const main = remote.require("./main.js");

document.getElementById("bear").addEventListener("click", () => {
    main.openWindow();
});
document.getElementById("quit").addEventListener("click", () => {
    main.quit();
});
