function onLoad() {
  console.log("aaaa");
  var storageKey = 'darkMode';
  var currentState = localStorage.getItem(storageKey)
  var classNameDark = 'dark-mode';
  var classNameLight = 'light-mode';

  var sun = document.getElementById('sun')
  var moon = document.getElementById('moon')

  switch (currentState) {
    case 'false':
     document.body.classList.add(classNameLight);
     document.body.classList.remove(classNameDark);
     sun.style = "visibility: visible"
     moon.style = "visibility: hidden"
      break;

    case 'true':
     document.body.classList.add(classNameDark);
     document.body.classList.remove(classNameLight);
     moon.style = "visibility: visible"
     sun.style = "visibility: hidden"
     break;

    default:
     console.log("error lol");
  }
}

function switchModes() {

   var storageKey = 'darkMode';
   var currentState = localStorage.getItem(storageKey)
   //console.log(currentState);

   var classNameDark = 'dark-mode';
   var classNameLight = 'light-mode';

   var sun = document.getElementById('sun')
   var moon = document.getElementById('moon')

   switch (currentState) {
     case 'true':
      currentState = 'false';
      document.body.classList.add(classNameLight);
      document.body.classList.remove(classNameDark);
      document.getElementById('sun').style = "visibility: visible"
      document.getElementById('moon').style = "visibility: hidden"
       break;

     case 'false':
      currentState = 'true';
      document.body.classList.add(classNameDark);
      document.body.classList.remove(classNameLight);
      document.getElementById('moon').style = "visibility: visible"
      document.getElementById('sun').style = "visibility: hidden"
      break;

     default:
      console.log("error lol");
   }

   //console.log(currentState);

   localStorage.setItem(storageKey, currentState);
}
