export class CollapsibleElement extends HTMLElement {
  header;
  content;
  constructor(_header, _content) {           
    super();
    if(_header!=null) {
      this.#setHeader(_header);
      this.#setContent(_content);
    }
  }
  #setHeader(_header) {
    this.header = _header;
  }
  #setContent(_content) {
    this.content = _content;
    if(this.content!=null) {
      const button = document.createElement("button");
      button.className = "collapsible";
      const collapsibleContent = document.createElement("div");
      collapsibleContent.className="collapsible-content";
      collapsibleContent.appendChild(this.content);
      this.header.appendChild(button);
      this.header.appendChild(collapsibleContent); 
      this.#addEventListeners(button);   
    }    
  }
  #addEventListeners(button) {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
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
  connectedCallback() {
    console.log("Collapsible element added to page.");
    this.appendChild(this.header);
    
  }
}
customElements.define("collapsible-element", CollapsibleElement);
