
   const form = document.querySelector("#form")
   const scriptURL = 'https://script.google.com/macros/s/AKfycbweO9bIkKpG_4we13g1uFOPrdcJgrriZJwdnB6CwW0pYlM7Atm73oKrrrXJHM0dxXRi3w/exec'
   const submitButton = document.querySelector("#submit")
   const Message = document.getElementById("msgDelivered")

    form.addEventListener('submit', e => {
        submitButton.disabled = true
        e.preventDefault()
    
        const responseBody = new FormData(form)
        const TrendBody = responseBody.getAll("TRENDS").join(" ")
        responseBody.set('TRENDS', TrendBody)
        fetch(scriptURL, { method: 'POST', body: responseBody })
        .then(response => {
        Message.innerHTML = "Message sent successfully!!!"
        setTimeout(function() {
            Message.innerHTML = ""
        },5000)
        form.reset()      
    })
       .catch(error => {
        alert('Error!', error.message)
        submitButton.disabled = false
}
       )
    }) 

           
   
function themeOpen() {
	const theme = document.querySelector("#theme-img");
	const close = document.querySelector(".fa-times");
	const themeDiv = document.querySelector(".theme-div");
	const colorSelecion = document.querySelector(".color-selecion");
	const colorSelecionTwo = document.querySelector(".two");
	const colorSelecionThree = document.querySelector(".three");
	const colorSelecionFour = document.querySelector(".four");
	const windowSize = window.innerWidth;

    themeDiv.style.right = "10px";
    themeDiv.style.width = "10%";
    themeDiv.style.padding = "10px";
    themeDiv.style.height = "10vh";
    theme.style.display = "none";
    close.style.display = "inline-block";
    colorSelecion.style.width = "30%";
    colorSelecionTwo.style.width = "30%";
    colorSelecionThree.style.width = "30%";
    colorSelecionFour.style.width = "30%";
    if (windowSize <= 545) {
        themeDiv.style.width = "50%"
    } else {
        themeDiv.style.width = "10%"
    }
}

function themeClose() {
	const theme = document.querySelector("#theme-img");
	const close = document.querySelector(".fa-times");
	const themeDiv = document.querySelector(".theme-div");
    const colorSelecion = document.querySelector(".color-selecion");
	const colorSelecionTwo = document.querySelector(".two");
	const colorSelecionThree = document.querySelector(".three");
	const colorSelecionFour = document.querySelector(".four");
    themeDiv.style.right = "0px";
    themeDiv.style.width = "0%";
    themeDiv.style.padding = "0px";
    themeDiv.style.height = "0vh";
    theme.style.display = "inline-block";
    close.style.display = "none";
    colorSelecion.style.width = "0%"
    colorSelecionTwo.style.width = "0%";
    colorSelecionThree.style.width = "0%";
    colorSelecionFour.style.width = "0%";
}