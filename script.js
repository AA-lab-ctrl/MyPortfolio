const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(t => t.classList.remove("active"));
sections.forEach(s => s.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.tab)
.classList.add("active");

});

});

function openProject(id){

document.getElementById("projects").style.display = "none";

const project = document.getElementById(id);
project.style.display = "block";

}

function closeProject(){

document.querySelectorAll(".project-detail").forEach(section=>{
section.style.display = "none";
});

document.getElementById("projects").style.display = "block";

}
