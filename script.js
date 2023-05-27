const comp_choice = document.getElementById("computer_choice");
const user_choice = document.getElementById("user_choice");
const comp_score = document.getElementById(".ccount");
const user_score = document.getElementById(".ucount");
const choices = document.querySelectorAll('button');
let uchoice;
let cchoice;
let result;
let usercount=0;
let compcount=0;

choices.forEach(choices => choices.addEventListener('click', (e) => {
    uchoice = e.target.id;
    var image = document.getElementById('ustart');
    if (uchoice === 'rock') {
        image.src = "Resources/Rock.png";
    }
    if (uchoice === 'paper') {
        image.src = "Resources/Paper.png";
    }
    if (uchoice === 'scissor') {
        image.src = "Resources/Scissor.png";
    }
    console.log(user_choice);
    generate_comp_choice();
    view_result();
}))

function generate_comp_choice() {
    var image = document.getElementById('cstart');
    const randomnum = Math.floor(Math.random() * 3) + 1;
    if (randomnum === 1) {
        cchoice = 'rock';
        image.src="Resources/Rock.png";
    }
    if (randomnum === 2) {
        cchoice = 'paper';
        image.src="Resources/Paper.png";
    }
    if (randomnum === 3) {
        cchoice = 'scissor';
        image.src="Resources/Scissor.png";
    }
    
}

function view_result() {
    if (cchoice === uchoice) {
        result = 'draw';
        document.getElementById('cstart').src="Resources/draw.png";
    }
    if (cchoice === 'rock' && uchoice === 'paper') {
        result = 1;
    }
    if (cchoice === 'rock' && uchoice === 'scissor') {
        result = 0;
    }
    if (cchoice === 'paper' && uchoice === 'scissor') {
        result = 1;
    }
    if (cchoice === 'paper' && uchoice === 'rock') {
        result = 0;
    }
    if (cchoice === 'scissor' && uchoice === 'paper') {
        result = 0;
    }
    if (cchoice === 'scissor' && uchoice === 'rock') {
        result = 1;
    }


    
    var img = document.getElementById('ustart');
    if (result === 'draw')
        img.src = "Resources/draw.png";
    if (result === 1)
    {
        usercount++;
        document.getElementById('ucount').innerHTML=usercount;
    }
    if (result === 0)
    {
        compcount++;
        document.getElementById('ccount').innerHTML=compcount;
    }
}
/*var image = document.getElementById('cstart');
    if (cchoice === 'rock') {
        img2.src = "Resources/Rock.png";
    }
    if (cchoice === 'paper') {
        img2.src = "Resources/Paper.png";
    }
    if (cchoice === 'scissor') {
        img2.src = "Resources/Scissor.png";
    }
*/
/*function changeimage() {
    var img = document.getElementById('ustart');
    if (result === 2)
        img.src = "Resources/draw.png";
    if (result === 1)
    {
        usercount++;
        document.getElementById('ucount').innerHTML=usercount;
    }
    if (result === 0)
    {
        compcount++;
        document.getElementById('ucount').innerHTML=compcount;
    }

}
*/