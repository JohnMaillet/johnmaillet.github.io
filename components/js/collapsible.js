var jobs;
var coll = document.getElementsByClassName("collapsible");
function setJobs(_jobs) {
    console.log('setting jobs', _jobs);
    jobs = _jobs;    
}
function getJobs() {
    console.log('getting jobs', jobs);
}
function addEventListeners(coll) {
    var i;
    // console.log('coll.length', coll.length);
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // console.log('this.nextElementSibling;', this.nextElementSibling);
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }          
      });
    }
}
function populateJobs(jobs,elementId) {
    for (var i = 0; i < jobs.length; i++) 
    {
      appendJob(jobs[i], elementId);               
    };
}
function appendJob(job, elementId) {
    const work = document.getElementById(elementId);
    const contentWrap = work.getElementsByTagName("content-wrap");

    // Create an "div" node:
    const jobNode = document.createElement("job");
    const node = document.createElement("div");
    node.className="col-container neon-border"
    
    const h3 = document.createElement("h3");
    h3.className = "role";
    h3.innerText = job.role;

    const pCompany = document.createElement("p");
    pCompany.className = "company";
    pCompany.innerText = job.company;
    
    const pDates = document.createElement("p");
    pDates.className = "dates";
    pDates.innerText = `${job.startDate} - ${job.endDate}`;
    
    const pHonors = document.createElement("p");
    pHonors.className = "honors";
    pHonors.innerText = job.honors;

    const button = document.createElement("button");
    button.className = "collapsible";

    const collapsibleNode = document.createElement("div");
    collapsibleNode.className="collapsible-content";

    const h4 = document.createElement("h4");
    h4.className = "summary";
    h4.innerText = job.summary;

    const ul = document.createElement("ul");

    for (var i = 0; i< job.duties.length; i++) {
      const li = document.createElement("li");
      li.className = "duties";
      li.innerText = job.duties[i];
      ul.appendChild(li);
    }
    collapsibleNode.appendChild(h4);
    collapsibleNode.appendChild(ul);

    node.appendChild(h3);
    node.appendChild(pCompany);
    node.appendChild(pDates);      
    node.appendChild(pHonors);
    if(job.duties.length) {
      node.appendChild(button);
      node.appendChild(collapsibleNode);
    }
    jobNode.appendChild(node);
    work.appendChild(jobNode);

}

class Jobs extends HTMLElement {
    constructor() {      
      super();
      getJobs();
    }
    // Element functionality written in here
    connectedCallback() {
        console.log("Jobs element added to page.");
        console.log(this.getAttribute('value'));        
    }
    
    disconnectedCallback() {
        console.log("Jobs element removed from page.");
    }
    
    adoptedCallback() {
        console.log("Jobs element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
        console.log(this.getAttribute('value'));
    }    
}

class Job extends HTMLElement {
    constructor() {      
      super();      
    }
    // Element functionality written in here
    connectedCallback() {
        console.log("Job element added to page.");
        console.log(this.getAttribute('value'));        
    }
    
    disconnectedCallback() {
        console.log("Job element removed from page.");
    }
    
    adoptedCallback() {
        console.log("Job element moved to new page.");
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
        console.log(this.getAttribute('value'));
    }    
}

customElements.define("jobs-info", Jobs);
customElements.define("job-info", Job);
  