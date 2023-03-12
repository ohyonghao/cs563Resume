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

        let a = document.createElement("a");
        a.setAttribute("class", "nav-link");
        a.setAttribute("href", "#" + name);
        a.textContent = name;
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
    job = document.createElement("div");
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
