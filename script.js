function addProject() {
    const name = document.getElementById("projectName").value;
    const status = document.getElementById("projectStatus").value;

    if (name === "") {
        alert("Please enter a project name");
        return;
    }

    const list = document.getElementById("projectList");

    const li = document.createElement("li");
    li.textContent = name + " - " + status;

    list.appendChild(li);

    document.getElementById("projectName").value = "";
}
