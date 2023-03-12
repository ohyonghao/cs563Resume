function generateNavbar(pages) {
    let app = document.getElementById("navbar");
    app.innerHTML = "";
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-list");

    pages.forEach((callback, name) => {
        let li = document.createElement("li");
        li.setAttribute("class", "list-item");
        li.setAttribute("id", "nav" + name);
        li.setAttribute("onclick", callback);
        li.textContent = name;

        let a = document.createElement("a");
        a.setAttribute("class", "nav-link");
        a.setAttribute("href", "#" + name);
        li.appendChild(a);
        ul.appendChild(li);
    });

    app.appendChild(ul);
}

function clearApp() {
    let app = document.getElementById("app");
    app.innerHTML = "";
    return app;
}

function generateAbout() {
    // Grab the main section
    let app = clearApp();

    let div = document.createElement("div");
    div.setAttribute("id", "About");

    // Img
    let img = document.createElement("img");
    img.setAttribute("src", "img/dpost.webp");
    img.setAttribute(
        "alt",
        "Headshot of a handsome David Post, with dark brown hair and hazel eyes."
    );
    img.setAttribute("class", "headshot");

    let p = document.createElement("p");
    p.textContent = `Good news everyone! My site is now live here on Github Pages. Allow me to
    briefly introduce myself. My name is David Post. I am a graduate student
    here at Portland State University (PSU). I graduated from PSU in June of
    2020 with a Bachelors of Science in Computer Science and Mathematics,
    while minoring in Physics.`;

    div.appendChild(img);
    div.appendChild(p);
    app.appendChild(div);
}
function generatePrevious() {
    // Grab the main section
    let app = clearApp();

    let p = document.createElement("p");
    p.textContent = `Previous work experience:`;

    app.appendChild(p);
}
function generateProjects() {
    clearApp();
}
function generateContact() {
    clearApp();
}

let pageCallback = new Map([
    ["About", "generateAbout()"],
    ["Previous", "generatePrevious()"],
    ["Projects", "generateProjects()"],
    ["Contact", "generateContact()"],
]);

generateNavbar(pageCallback);
generateAbout();
