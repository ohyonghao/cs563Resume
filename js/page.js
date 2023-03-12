function generateSections() {
    let app = document.getElementsByTagName("main")[0];

    ["about", "previous", "projects", "contact"]
        .map((name) => {
            let section = document.createElement("section");
            section.setAttribute("id", name);
            section.setAttribute("class", "text-center");
            console.log(name);
            return section;
        })
        .forEach((section) => app.appendChild(section));
}

generateSections();
