
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
	const windowHeight = window.innerHeight;

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
    if (windowSize <= 545 || windowHeight <= 500) {
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
    colorSelecion.style.width = "0"
    colorSelecionTwo.style.width = "0";
    colorSelecionThree.style.width = "0";
    colorSelecionFour.style.width = "0";
}

function themeRed() {
    const nav = document.querySelector(".nav");
    const nav2 = document.querySelector(".nav2");
	const main = document.querySelector("main");
	const body = document.querySelector("body");
	const verticalLine = document.querySelector("#vertical-line");
	const hr1 = document.querySelector("#hr-1");
	const hr2 = document.querySelector("#hr-2");
	const span = document.querySelector("span");
	const msgDelivered = document.querySelector(".msgDelivered");
	const button = document.querySelectorAll("button");
	const send = document.querySelector(".send");
	
    nav.style.backgroundColor = "rgba(255, 56, 0, 0.7)";
    nav2.style.backgroundColor = "rgba(255, 56, 0, 0.7)";
    main.style.backgroundColor = "#ff3800";
    span.style.color = "#ff3800";
    button.style.backgroundColor = "#ff3800";
    msgDelivered.style.color = "#ff3800";
    send.style.color = "#ff3800";
}
function themeBrown() {
    const nav = document.querySelector(".nav");
    const nav2 = document.querySelector(".nav2");
	const main = document.querySelector("main");
	const span = document.querySelector("span");
	const msgDelivered = document.querySelector(".msgDelivered");
	const button = document.querySelectorAll("button");
	const send = document.querySelector(".send");
	const html = document.querySelector("#html-level");
	const css = document.querySelector("#css-level");
	const tailwind = document.querySelector("#tailwind-level");
	const react = document.querySelector("#react-level");
	const express = document.querySelector("#express-level");
    const themeDiv = document.querySelectorAll(".home-column");
    const icon = document.querySelector(".fa");
	const link = document.querySelector("a");
	const socialMedia = document.querySelector("#social-media-handles");
	
    nav.style.backgroundColor = "#d9b650";
    nav2.style.backgroundColor = "#d9b650";
    //themeDiv.style.backgroundColor = "#ca9e1a";
    main.style.backgroundColor = "#83580b";
    span.style.color = "#ff3800";
    button.style.backgroundColor = "#ff3800";
    msgDelivered.style.color = "#ff3800";
    html.style.border = "#ff3800";
    html.style.border = "#ff3800";
    css.style.border = "#ff3800";
    css.style.border = "#ff3800";
    tailwind.style.border = "#ff3800";
    tailwind.style.border = "#ff3800";
    react.style.border = "#ff3800";
    react.style.border = "#ff3800";
    express.style.border = "#ff3800";
    express.style.border = "#ff3800";
    send.style.color = "#ff3800";
  }
   /*icon.style.color = "#ff3800";span, .msgDelivered {
    /*icon.style.color = "#ff3800";span, .msgDelivered {
        color: #00C7FF;
       .button {
         background-color: #00C7FF;
         color: white;
       }
       
    link.style.color = "#ff3800";
    body.style.color = "#ff3800";
    verticalLine.style.border = "1px solid #ff3800";
    hr1.style.border = "1px solid #ff3800";
    hr2.style.border = "1px solid #ff3800";
    socialMedia.style.color = "#ff3800";
    *//*.nav {
        background-color: rgba(255, 56, 0, 0.7);;
      } 
      main {
        background-color: #ff3800;
      }*/
/*

      span, .msgDelivered {
        color: #00C7FF;
       }
       .button {
         background-color: #00C7FF;
         color: white;
       }
    
#social-media-handles * {
    color: white;
  }

  #click-here {
    color: white;
  }
  #html-level, #css-level, #tailwind-level, #react-level, #express-level {
    border: 1px solid rgba(255, 0, 0, 0.5);
    background-color: rgb(255, 100, 50);
  }
  #html-percentage, #css-percentage, #tailwind-percentage, #react-percentage, #express-percentage {
    border: 1px solid #ff3800;
    background-color: #00C7FF;
  }.center h3 {
    color: #00C7FF;
  }
  .label input {
    background-color: rgb(255, 100, 50);
  }
  .send {
    background-color: #00C7FF;
    color: white;
  }
  .nav2 div:hover, .home-home {
    background-color: #ff3800;
  }*/


function themeBlue() {
    const nav = document.querySelector(".nav");
    const nav2 = document.querySelector(".nav2");
	const main = document.querySelector("main");
	const body = document.querySelector("body");
	const verticalLine = document.querySelector("#vertical-line");
	const hr1 = document.querySelector("#hr-1");
	const hr2 = document.querySelector("#hr-2");
	const span = document.querySelector("span");
	const msgDelivered = document.querySelector(".msgDelivered");
	const button = document.querySelectorAll("button");
	const send = document.querySelector(".send");
	
    nav.style.backgroundColor = "#49beb7";
    nav2.style.backgroundColor = "#49beb7";
    main.style.backgroundColor = "#085f63";
    span.style.color = "#ff3800";
    button.style.backgroundColor = "#ff3800";
    msgDelivered.style.color = "#ff3800";
    send.style.color = "#ff3800";

    const icon = document.querySelector(".fa");
	const link = document.querySelector("a");
	const socialMedia = document.querySelector("#social-media-handles");
}
function themePurple() {
    const nav = document.querySelector(".nav");
    const nav2 = document.querySelector(".nav2");
	const main = document.querySelector("main");
	const body = document.querySelector("body");
	const verticalLine = document.querySelector("#vertical-line");
	const hr1 = document.querySelector("#hr-1");
	const hr2 = document.querySelector("#hr-2");
	const span = document.querySelector("span");
	const msgDelivered = document.querySelector(".msgDelivered");
	const button = document.querySelectorAll("button");
	const send = document.querySelector(".send");
	
    nav.style.backgroundColor = "#cf7979";
    nav2.style.backgroundColor = "#cf7979";
    main.style.backgroundColor = "#552e5a";
    span.style.color = "#ff3800";
    button.style.backgroundColor = "#ff3800";
    msgDelivered.style.color = "#ff3800";
    send.style.color = "#ff3800";

    const icon = document.querySelector(".fa");
	const link = document.querySelector("a");
	const socialMedia = document.querySelector("#social-media-handles");
}