function workButton(){
    let educationStyle = document.getElementById("education-timeline").style;
    let workStyle = document.getElementById("work-timeline").style;
    let educationIcon = document.getElementById("uil-graduation-cap").style;
    let suitcaseIcon = document.getElementById("uil-suitcase").style;

    if(educationStyle.display === 'block'){
        educationStyle.display = 'none' 
        workStyle.display = 'block';
        educationIcon.color="#0706066e";
        suitcaseIcon.color="var(--purple)";
    }else{
        educationStyle.display = 'block' 
        workStyle.display = 'none';
        educationIcon.color=" var(--purple)";
        suitcaseIcon.color="#0706066e";
    }
}

function settings(){
    let settingsContainer = document.getElementById("settingsContainer");

    if (settingsContainer.style.display === "none"){
        settingsContainer.style.display = "block"
    }else{
        settingsContainer.style.display = "none"
    }
}

function openSidebar(){
    const sidebarContainer = document.getElementById("sidebar");

    if (sidebarContainer.style.display != "none"){
        sidebarContainer.style.display = 'none'
    }else {
        sidebarContainer.style.display = 'flex'
    }
}