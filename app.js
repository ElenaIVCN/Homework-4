
const user_choice_div = document.getElementById("user_choice"); 
const user_opt1_div = document.getElementById("user_opt1");
const user_opt2_div = document.getElementById("user_opt2");
const user_opt3_div = document.getElementById("user_opt3");

const computer_opt_div = document.getElementById("computer_opt");

const btnPlaty_div = document.getElementById("btnPlay");
btnPlaty_div.addEventListener('click', play);

const msg_div = document.getElementById("msg");

const options=["rock","paper", "scissor"];
user_opt1_div.innerHTML = options[0];
user_opt2_div.innerHTML = options[1];
user_opt3_div.innerHTML = options[2];

computer_opt_div.innerHTML = "waiting...";

function play()
{
    generateCombinations(options);
	var uo = getUserOption(options)
	var co = generateComputerOption(options)

    computer_opt_div.innerHTML=co;

    var v = getWinner(uo, co);
    var msg = "";
 //   console.log("v="+v);
    switch(v) {
        case -1: msg = "equal, press again!";
            break;
        case 0: msg = "user win";
            break;
        case 1: msg = "computer win";
            break;
    }

    console.log(msg);
    msg_div.innerHTML = msg;

    // code to restart the animation
    // (delete the animated element and insert it, it back)
/*
    var newone = msg_div.cloneNode(true);
    msg_div.parentNode.replaceChild(newone, msg_div);
    msg_div = document.getElementById("msg");
*/
    // or this sollution (removing and adding the class)
    msg_div.classList.remove("msg");
    void msg_div.offsetWidth;
    msg_div.classList.add("msg");
}

// ce rost are functia asta?
function generateCombinations(options)
{
    var combinations;

    return combinations;
}

function getUserOption()
{
    return user_choice_div.options[user_choice_div.selectedIndex].text;
}

function generateComputerOption()
{
    return options[Math.floor(Math.random()*3)];
}

function getWinner(a, b)
{
	if(a=="rock") {
		if(b=="paper") return 1;
        if(b=="scissor") return 0;
    }
		
	if(a=="paper") {
		if(b=="rock") return 0;
		if(b=="scissor") return 1;
    }

	if(a=="scissor") {
		if(b=="paper") return 0;
        if(b=="rock") return 1;
    }

    return -1;
}