//Imports the contents of "section-content-manager.js".
import * as SectionContentManager from "./section-content-manager.js";

//Set the hash to default
if(!location.hash){
    location.hash = "#section1";
};

//Update Section on Load
UpdateSection();

//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})

//Update Section calls update section contents in the "section-content-manager" script.
function UpdateSection(){
    var sectionName = location.hash.substring(1);
    console.log(sectionName);
    SectionContentManager.UpdateSectionContent(sectionName);
}