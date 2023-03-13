function generateNavbar(pages) {
    let app = document.getElementById("navbar");
    app.innerHTML = "";
    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-list");

    pages.forEach((callback, name) => {
        let li = document.createElement("li");
        li.setAttribute("class", "list-item");
        li.setAttribute("id", "nav" + name);

        let a = document.createElement("a");
        a.setAttribute("class", "nav-link");
        a.setAttribute("href", "#" + name);
        a.setAttribute("onclick", callback);
        a.textContent = name;

        li.appendChild(a);
        ul.appendChild(li);
    });

    app.appendChild(ul);
}

function setActiveNavbar(active) {
    let nav = document.getElementById("navbar");
    Array.from(navbar.getElementsByClassName("list-item")).forEach((item) =>
        item.setAttribute("class", "list-item")
    );
    let li = document.getElementById("nav" + active);
    li.setAttribute("class", "list-item active");
}

function clearApp() {
    let app = document.getElementById("app");
    app.innerHTML = "";
    return app;
}

function generateAbout() {
    // Set Navbar
    setActiveNavbar("About");
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
    // Set Navbar
    setActiveNavbar("Previous");
    // Main content
    job1descr = [
        `UPS was my first job which I got while I was working in highschool.`,
    ];
    job2descr = [
        `While working at Baard Energy I learned a lot about computer science. I had worked 
    there for about two years before leaving to go and live in Taiwan for six years.`,
        `Projects that I had worked on there included mass email, phone PBXs, and ERP systems.`,
    ];
    job3descr = [
        `I worked here for five years as a contractor on two different teams. The first team was an 
        Android feature team for a technology called WiDi.`,
        `The second team I worked on was an Intel lab that was essentially an internal kickstarter.
        People with ideas would come to us and we would create prototypes of these ideas to be 
        demonstrated internally to see if it would be worth developing further.`,
    ];
    job4descr = [
        `ICS is a pretty exciting place to work at. One thing you have to understand is the nature
        of the work. As a software consulting firm that specializes in UI development our projects
        tend to be the final touches on systems.`,
        `I've worked on systems from railway to aerospace, along with medical devices and chemical
        analysis.`,
    ];

    // Grab the main section
    let app = clearApp();

    let jobdiv = document.createElement("div");
    jobdiv.setAttribute("id", "Previous");
    jobdiv.setAttribute("class", "container");

    let rowdiv = document.createElement("div");
    rowdiv.setAttribute("class", "row row-cols-auto");
    rowdiv.append(addJob("job1", "UPS", "Sorter", job1descr));
    rowdiv.append(addJob("job2", "Baard Energy", "Code Monkey", job2descr));
    rowdiv.append(addJob("job3", "Intel", "Gate Keeper", job3descr));
    rowdiv.append(
        addJob(
            "job4",
            "Integrated Computer Solutions",
            "Software Engineer",
            job4descr
        )
    );
    jobdiv.appendChild(rowdiv);
    app.appendChild(jobdiv);
}

function addJob(id, name, position, other) {
    let job = document.createElement("div");
    job.setAttribute("class", "figure text-wrap col-md");

    let h2 = document.createElement("h2");
    h2.textContent = name;

    let pos = document.createElement("h3");
    pos.setAttribute("class", "text-wrap");
    pos.textContent = "Position: " + position;

    job.appendChild(h2);
    job.appendChild(pos);

    other.forEach((text) => {
        let descr = document.createElement("p");
        descr.setAttribute("id", id);
        descr.setAttribute("class", "text-wrap");
        descr.textContent = text;
        job.appendChild(descr);
    });

    return job;
}

function generateProjects() {
    // Set Navbar
    setActiveNavbar("Projects");
    // Main content
    proj1descr = [
        `Pixelater2 is a simple image processing library written in C++ using modern C++ language 
        coding practices as of C++17. These include templates, iterators, multithreading, lambdas,
        and various STL Algorithms.`,
    ];
    proj2descr = [
        `While using a particular VPN service in Linux there was lack of GUI support, 
    but it did come with a good command line interface which could poll state and other information
    useful information.`,
        `As such, I sought out to create a GUI which encapsulates the use of this CLI. Using the Qt
        framework for the GUI creation, I created this program which also includes a large colored
        icon that is easy to see whether or not one is currently connected to the VPN.`,
    ];
    proj3descr = [
        `As part of my schoolwork for Computer Graphics we were tasked with creating a themepark 
    using OpenGL. Originally this used FTLK, but I decided to port this projeect to the Qt framework.`,
        `This project uses an OOP hierarchy concept to construct the environment. Taking primatives 
        and building upon them. This includes reading of TGA images, vertex shader programming, and 
        various concepts of Computer Graphics.`,
    ];
    proj4descr = [``];

    // Grab the main section
    let app = clearApp();

    let projdiv = document.createElement("div");
    projdiv.setAttribute("id", "Previous");
    projdiv.setAttribute("class", "container");

    let rowdiv = document.createElement("div");
    rowdiv.setAttribute("class", "row row-cols-auto");
    rowdiv.append(
        addProject(
            "proj1",
            "Pixelater2",
            "https://github.com/ohyonghao/Pixelater2",
            "C++ Qt",
            "",
            proj1descr
        )
    );
    rowdiv.append(
        addProject(
            "proj2",
            "SuiDaoGai",
            "https://github.com/ohyonghao/SuiDaoGai",
            "C++ Qt",
            "GPL v3.0",
            proj2descr
        )
    );
    rowdiv.append(
        addProject(
            "proj3",
            "RollerCoaster",
            "https://github.com/ohyonghao/RollerCoaster",
            "C++ Qt",
            "GPL v3.0",
            proj3descr
        )
    );
    projdiv.appendChild(rowdiv);
    app.appendChild(projdiv);
}

function addProject(
    id,
    projectName,
    projectURL,
    projectFrameworks,
    projectLicense,
    projectDescr
) {
    let projdiv = document.createElement("div");
    projdiv.setAttribute("class", "figure text-wrap col-md");

    let h2 = document.createElement("h2");
    let url = document.createElement("a");
    url.setAttribute("href", projectURL);
    url.textContent = projectName;
    h2.appendChild(url);

    let frameworks = document.createElement("h3");
    frameworks.setAttribute("class", "text-wrap");
    frameworks.textContent = "Frameworks: " + projectFrameworks;

    let license = document.createElement("h3");
    license.setAttribute("class", "text-wrap");
    license.textContent = "License: " + projectLicense;

    projdiv.appendChild(h2);
    projdiv.appendChild(frameworks);
    projdiv.appendChild(license);

    projectDescr.forEach((text) => {
        let descr = document.createElement("p");
        descr.setAttribute("id", id);
        descr.setAttribute("class", "text-wrap");
        descr.textContent = text;
        projdiv.appendChild(descr);
    });
    return projdiv;
}

function generateContact() {
    // Set Navbar
    setActiveNavbar("Contact");
    clearApp();

    let contdiv = document.createElement("div");
    contdiv.setAttribute("id", "Projects");
    contdiv.setAttribute("class", "container");

    app.appendChild(contdiv);
}

let pageCallback = new Map([
    ["About", "generateAbout()"],
    ["Previous", "generatePrevious()"],
    ["Projects", "generateProjects()"],
    ["Contact", "generateContact()"],
]);

generateNavbar(pageCallback, "About");
generateAbout();
