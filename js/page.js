function generateNavbar(pages) {
    let app = document.getElementById("navbar");
    app.innerHTML = "";
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-list");

    pages.forEach((callback, name) => {
        let li = document.createElement("li");
        li.setAttribute("class", "list-item");
        li.setAttribute("id", name);
        li.textContent = name;
        ul.appendChild(li);
    });

    app.appendChild(ul);
}

function generateAbout() {}
function generatePrevious() {}
function generateProjects() {}
function generateContact() {}

let pageCallback = new Map([
    ["About", generateAbout],
    ["Previous", generatePrevious],
    ["Projects", generateProjects],
    ["Contact", generateContact],
]);

generateNavbar(pageCallback);
