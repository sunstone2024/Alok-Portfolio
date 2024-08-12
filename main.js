function ProjectsSelected() {
  var selectBox = document.getElementById("opts");
  selectBox.style.left = "5px";
  var ShowBox = document.getElementById("works_skills");
  ShowBox.style.display = "none";
  var HideBox = document.getElementById("works_projects");
  HideBox.style.display = "grid";
  var HideBox2 = document.getElementById("education");
  HideBox2.style.display = "none";
  
}

function SkillsSelected() {
  var selectBox = document.getElementById("opts");
  selectBox.style.left = "171px";
  var ShowBox = document.getElementById("works_projects");
  ShowBox.style.display = "none";
  var HideBox = document.getElementById("works_skills");
  HideBox.style.display = "grid";
  var HideBox2 = document.getElementById("education");
  HideBox2.style.display = "none";
}


function EducationSelected() {
  var selectBox = document.getElementById("opts");
  selectBox.style.left = "337px";
  var ShowBox = document.getElementById("works_projects");
  ShowBox.style.display = "none";
  var HideBox = document.getElementById("education");
  HideBox.style.display = "grid";
  var HideBox = document.getElementById("works_skills");
  HideBox.style.display = "none";
  
}