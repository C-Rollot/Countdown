//BOUTON
let goBtn = document.getElementById('go');

//FONCTION DE COMPTE A REBOURS
function countdown() {

    let timeInput = document.getElementById('time').value;
    console.log(timeInput);
    let timeDiv = document.getElementById('input');
    let timeVal = document.createElement('p');
    timeVal.innerHTML = timeInput;
    timeDiv.appendChild(timeVal);

    
    for(let i = timeInput; i > 0; i--) {    //Boucle permettant de compter seconde par seconde

            setTimeout(function() {
                timeInput--;

                console.log(timeInput);
                let timeDiv = document.getElementById('input');
                timeVal.innerHTML = timeInput;
                timeDiv.appendChild(timeVal);
                
                if (timeInput == 0) {
                timeVal.innerHTML = "COMPTE A REBOURS TERMINE."
                timeDiv.appendChild(timeVal);
                console.log("COMPTE A REBOURS TERMINE.");
            }
        }, 1000 * i);
    }
}

//EVENT LISTENER 
goBtn.addEventListener('click', countdown);