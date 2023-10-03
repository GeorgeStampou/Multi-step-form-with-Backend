/* multiform for the entire form and forms is a table with each div of the "forms" by step, counter to change the step*/
const multiForm = document.getElementById("form");
const forms = [...multiForm.querySelectorAll("div.div-form")];

let formcounter = 0;

/* on click function, takes all the input elements of current step form, changes to next form after checking with two
functions for validation, changes to previous, and submit at the end.  */
multiForm.addEventListener("click", event =>{

    const inputElements = [...forms[formcounter].querySelectorAll("input")];
    
    if(event.target.matches("[next]") && checkValidity(inputElements) && checkPass(inputElements)){
        formcounter += 1;
    } else if(event.target.matches("[previous]")){
        formcounter -= 1;
    } else if(event.target.matches("#finish-button") && checkValidity(forms)){
        multiForm.submit();
    } else return
    
    updateForm(formcounter);
})

/*function to display the new form */
function updateForm(counter){
    forms.forEach(form => {
        if(form.classList.contains("form-step-active")){
            form.classList.remove("form-step-active");
        }
         forms[counter].classList.add("form-step-active");
    });
}

/* function to check if all input elements of form has proper value */
function checkValidity(inputElements){
    const allValid = inputElements.every(input => input.reportValidity());
    return allValid;
}

/* function to check if repeat password is the same with password. searching for elements with name "password" and 
"repeat-pass" and compare the values. if there are the same, adds class for styling "valid" and displays no error message
else change class for styling to "invalid" and displays error message. */
function checkPass(inputElements){
    
    let passwordValue = "";
    let repeatPassValue = "nopass";
    let repeatPassElement;
    let index = 0;
    for (const input of inputElements){
        if(input.name === "password"){
            passwordValue  = input.value;
        } else if(input.name === "repeat-pass"){
            repeatPassElement = input;
            repeatPassValue = input.value;
            index = inputElements.indexOf(input);
        }
    }

    if (repeatPassValue === "nopass"){
        return true;
    }
    let valid = (passwordValue === repeatPassValue);
    
    if(valid && repeatPassElement != undefined){
        inputElements[index].classList.add("valid");
        repeatPassElement.setCustomValidity("");
        
    } else{
        inputElements[index].classList.add("invalid");
        repeatPassElement.setCustomValidity("Password do not match!");
        
    }

    repeatPassElement.reportValidity();
    return valid;

}
