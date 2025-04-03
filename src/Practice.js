import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let listElement = document.querySelector('.domain');
  if (!listElement) {
     return;
  }

  let pronoun = ['the', 'our',];
  let adjective = ['great', 'happy', 'genius', 'silly', 'thoughtful'];
  let noun = ['dog', 'cat', 'llama', 'pig', 'cow'];
  let extension = ['com', '.net', '.org', '.dev', '.us','.co','.edu'];

  for (let i = 0; i < extension.length; i++) {
     if (extension[i] === 'com') {
        extension[i] = '.com';
     }
  }

  for (let i = 0; i < pronoun.length; i++) {
     for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++) {
           for (let p = 0; p < extension.length; p++) {     
            let domain = pronoun[i] + adjective[j] + noun[k] + extension[p];

             let temp = document.createElement('ul');
              temp.innerHTML = domain;
              listElement.appendChild(temp);

           }
        }
     }
  }
};
