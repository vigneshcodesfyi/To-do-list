const inputvalue = document.getElementById("inputvalue");
const main = document.getElementById("main");
let counter = 0;

function addvalue() {
    const words = inputvalue.value;

    if (words.trim() === "") {
        alert("Please enter the notes");
    } else {
        createelement(words);
    }
}

function createelement(val) {
    counter++;

    const element = document.createElement('div');
    const taskelement = document.createElement('div');
    const buttonelement = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const para = document.createElement('p');

    element.classList.add("tasklist" + counter);
    taskelement.classList.add("taskcontent");
    buttonelement.classList.add("button");


    button1.classList.add("Edit");
    button2.classList.add("Delete");
    button1.innerText = "Edit";
    button2.innerText = "Delete";
    para.innerText = val;

    main.append(element);
    element.appendChild(taskelement);
    taskelement.appendChild(para);
    element.appendChild(buttonelement);

    buttonelement.appendChild(button1);
    buttonelement.appendChild(button2);

    // Add event listeners for buttons
    button1.addEventListener('click', function() {

        
        if (para.contentEditable === "true") {
            para.contentEditable = "false";
            button1.innerText = "Edit";
            para.style.border="none"

        } else {
            para.contentEditable = "true";
            button1.innerText = "Save";
            para.style.border="2px solid red"

            para.focus(); 


        }
    });

    button2.addEventListener('click', function() {
        element.remove();
    });


    


    // Clear input field
    clearinput();
}

function clearinput() {
    inputvalue.value = "";
}




function closepopup(){

    console.log("colisng")
    const version = document.getElementById("version");

    version.style.display="none"
}



function toggleMode() {
    const version = document.getElementById("version");

    const modeElement = document.getElementById('mode');
    const lightModeText = document.getElementById('lightmode');
const button = document.querySelectorAll('button')

    if (modeElement.classList.contains('dark-mode')) {
        modeElement.classList.remove('dark-mode');
        lightModeText.innerHTML = 'Light mode <i class="fa-regular fa-lightbulb" id="icon"></i>';
        document.body.classList.remove('dark-mode');
        document.body.style.color="black"

        document.body.style.backgroundColor="white"
        lightModeText.style.color="black"
        version.style.color="black"
        version.style.backgroundColor="beige"
        main.style.border=" 2px solid black"
button.forEach(button => {
    button.style.color = 'black';
});

    } else {
        modeElement.classList.add('dark-mode');
        lightModeText.innerHTML = 'Dark mode <i class="fa-solid fa-lightbulb" id="icon"></i>';
        document.body.classList.add('dark-mode');

        document.body.style.backgroundColor="black"

        document.body.style.color="white"

        lightModeText.style.color="white"
        version.style.color="white"
        version.style.backgroundColor="gray"
        main.style.border=" 2px solid white"
        button.forEach(button => {
            button.style.color = 'white';
        });
        


    }
}