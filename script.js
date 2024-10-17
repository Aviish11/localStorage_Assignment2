const displayName = document.getElementById("display-name");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const uname = document.getElementById("username");
const reloadButton = document.getElementById("reload-btn");


saveButton.addEventListener("click" , () => {
    let inputName = uname.value.trim();
    localStorage.setItem("localName", inputName);
    displayName.innerHTML = `Hi, ${inputName}`;
})



clearButton.addEventListener("click", () => {
    localStorage.clear();
    displayName.innerHTML = "";

})

reloadButton.addEventListener("click", () => {
    window.location.reload();
    // let inputName =  localStorage.getItem("localName");
    // displayName.innerHTML = `Hi, ${inputName}`;

})

window.addEventListener("load", () => {
    let inputName = localStorage.getItem("localName");
    displayName.innerHTML = `Hi, ${inputName}`;
})






