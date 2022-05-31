const content = document.querySelector("#content");

const searchRouteScreen = ()=>{
    content.innerHTML = "";

    const form = document.createElement("form");
    form.autocomplete = "false";
    form.action = "/map";
    
    const idField = document.createElement("input");
    idField.autocomplete = "false";
    idField.id = "idField"
    idField.name = "id";

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "submitButton"

    form.appendChild(idField);
    form.appendChild(submitButton);

    content.appendChild(form);
}

searchRouteScreen()