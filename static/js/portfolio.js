class ProjectHolder {
    constructor() {
        if(window.innerHeight > window.innerWidth){
            this.projectPerRow = 2;
        } else {
            this.projectPerRow = 4;
        }
        this.rows = 0;
        this.lastRowProjects = 0;
        this.numProjects = 0;
        this.htmlSelf = document.getElementById("projectHolder");
        this.makeRow()
    }

    makeRow() {
        let row = document.createElement('div');
        row.className = 'projectRow';

        let projectsDiv = document.createElement('div');
        projectsDiv.className = 'projectRowProjects';
        row.appendChild(projectsDiv);

        let expandingDiv = document.createElement('div');
        expandingDiv.className = 'expandingDiv';
        row.appendChild(expandingDiv);

        let titleCloseDiv = document.createElement('div');
        titleCloseDiv.className = 'titleCloseDiv';
        expandingDiv.appendChild(titleCloseDiv);

        let titleElem = document.createElement('h1');
        titleElem.setAttribute("class", "expandingDivTitle");
        titleElem.appendChild(document.createTextNode("Title"));
        let titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.appendChild(titleElem);
        titleCloseDiv.appendChild(titleDiv);

        let closeElem = document.createElement('h3');
        closeElem.setAttribute("class", "closeElem");
        closeElem.appendChild(document.createTextNode("×"));
        let closeDiv = document.createElement('div');
        closeDiv.className = 'closeDiv';
        closeDiv.appendChild(closeElem);
        titleCloseDiv.appendChild(closeDiv);

        closeDiv.onclick = function() {
            let allProjects = document.getElementsByClassName('project');
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].classList.add('hide-after','hide-before');
            }

            let allExpanding = document.getElementsByClassName('expandingDiv');
            for (let i = 0; i < allExpanding.length; i++) {
                allExpanding[i].style.display = "none";
            }
        };

        let descImg = document.createElement('div');
        descImg.className = 'descImg';

        let descElem = document.createElement('p');
        descElem.setAttribute("class", "expandingDivDesc");
        descElem.appendChild(document.createTextNode("Description"));
        let descDiv = document.createElement('div');
        descDiv.className = 'description';
        descDiv.appendChild(descElem);
        descImg.appendChild(descDiv);

        let imgElem = document.createElement('img');
        imgElem.setAttribute("class", "expandingDivImg");
        imgElem.setAttribute('src', 'projects/images/project.jpg');
        let imgDiv = document.createElement('div');
        imgDiv.className = 'image';
        imgDiv.appendChild(imgElem);
        descImg.appendChild(imgDiv);

        expandingDiv.appendChild(descImg);

        let linkElem = document.createElement('a');
        linkElem.setAttribute("class", "expandingDivLink");
        linkElem.appendChild(document.createTextNode("Link"));
        descDiv.appendChild(linkElem);

        this.htmlSelf.appendChild(row);
        this.rows++;
    }

    makeProject(title, description, imageSource, linkText, link) {
        if (this.lastRowProjects >= this.projectPerRow) {
            this.makeRow();
            this.lastRowProjects = 0;
        }

        this.numProjects++;

        let projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.style.backgroundImage = "url(" + imageSource + ")";
        projectDiv.style.backgroundPosition = "center";
        projectDiv.style.backgroundSize = "cover";
        projectDiv.dataset.row = this.rows - 1;
        projectDiv.classList.add('hide-after','hide-before');
        projectDiv.onclick = function() {
            let allProjects = document.getElementsByClassName('project');
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].classList.add('hide-after','hide-before');
            }

            let allExpanding = document.getElementsByClassName('expandingDiv');
            for (let i = 0; i < allExpanding.length; i++) {
                allExpanding[i].style.display = "none";
            }

            projectDiv.classList.remove('hide-after','hide-before');
            document.getElementsByClassName('expandingDiv').item(projectDiv.dataset.row).style.display = "flex";
            document.getElementsByClassName('expandingDivTitle').item(projectDiv.dataset.row).innerHTML = title;
            document.getElementsByClassName('expandingDivDesc').item(projectDiv.dataset.row).innerHTML = description;
            document.getElementsByClassName('expandingDivImg').item(projectDiv.dataset.row).src = imageSource;
            document.getElementsByClassName('expandingDivLink').item(projectDiv.dataset.row).innerHTML = linkText;
            document.getElementsByClassName('expandingDivLink').item(projectDiv.dataset.row).href = link;
            projectDiv.scrollIntoView(true);
        };

        let titleElem = document.createElement('p');
        titleElem.appendChild(document.createTextNode(title));
        let titleDiv = document.createElement('div');
        titleDiv.className = 'titleDiv';
        titleDiv.appendChild(titleElem);
        projectDiv.appendChild(titleDiv);

        document.getElementsByClassName('projectRowProjects')[this.rows - 1].appendChild(projectDiv);
        this.lastRowProjects++;
    }
}

$(document).ready(function() {
    let projectHolder = new ProjectHolder();

    for (let i = 0; i < projectsJSON.length; i++) {
        projectHolder.makeProject(projectsJSON[i].Title, projectsJSON[i].Description, projectsJSON[i].Images[0],
            projectsJSON[i].Link.Text, projectsJSON[i].Link.URL);
    }
});