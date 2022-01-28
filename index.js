import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", ()=>{
     App();
});

//RECUERDA QUE EL "hashchange" SE APLICA ES A WINDOWS Y NO AL DOCUMENT
window.addEventListener("hashchange", async() =>{
     App();
});