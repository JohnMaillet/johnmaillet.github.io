import { CollapsibleElement } from "./collapsible.js"
var jobs;

export function setJobs(_jobs) {
    jobs = _jobs;    
}
export function populateJobs(jobs,elementId) {
    for (var i = 0; i < jobs.length; i++) 
    {
      const work = document.getElementById(elementId);
      var header = createJobHeader(jobs[i]);
      var content = createJobContent(jobs[i]);
      var collapsible = new CollapsibleElement(header, content);     
      const jobNode = new Job();      
      jobNode.appendChild(collapsible);
      work.appendChild(jobNode);
    };
}
export function createJobHeader(job) {
  
    // Create an "div" node:
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
  
    node.appendChild(h3);
    node.appendChild(pCompany);
    node.appendChild(pDates);      
    node.appendChild(pHonors);
    return node;
}
export function createJobContent(job) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.className = "summary";
    h4.innerText = job.summary;
    const ul = document.createElement("ul");
    if(job.duties.length > 0) {  
        for (var i = 0; i< job.duties.length; i++) {
            const li = document.createElement("li");
            li.className = "duties";
            li.innerText = job.duties[i];
            ul.appendChild(li);
        }
        div.appendChild(h4);
        div.appendChild(ul);

        return div;
    }
    return null;    
  }
export class Jobs extends HTMLElement {
    constructor() {      
      super();
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

export class Job extends HTMLElement {
    constructor() {      
      super();      
    }
    // Element functionality written in here
    connectedCallback() {
        console.log("Job element added to page.");
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
    