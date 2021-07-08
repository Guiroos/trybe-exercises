let header = document.getElementById('header-container');
header.style.background = 'green';

let emergencySection = document.querySelector('.emergency-tasks');
emergencySection.style.background = 'orange';

let h3Emergency = document.querySelectorAll('.emergency-tasks h3');
h3Emergency[0].style.background = 'purple';h3Emergency[1].style.background = 'purple';

let noEmergencySection = document.querySelector('.no-emergency-tasks');
noEmergencySection.style.background = 'yellow';

let h3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
h3NoEmergency[0].style.background = 'black';h3NoEmergency[1].style.background = 'black';

let footer = document.getElementById('footer-container');
footer.style.background = 'darkgreen';