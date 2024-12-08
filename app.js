let userScore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const  userScorepara=document.querySelector("#user-score");
const  compScorepara=document.querySelector("#comp-score");


const compchoice=()=>{
const options=["rock","paper","scissor"]
let ran=Math.floor(Math.random()*3);
return options[ran];
}


const playGame=(userchoice)=>{
console.log("user choice=",userchoice);
const computerchoice= compchoice();
console.log("computer choice=",computerchoice);
if (userchoice === computerchoice) {
    draw();
 } // Call the draw function





 if((computerchoice=="rock"&& userchoice=="paper")||(computerchoice=="scissor"&& userchoice=="rock")||(computerchoice=="paper"&& userchoice=="scissor")){
    winner();
    document.querySelector(".msg").innerHTML=`You have won the game.your ${userchoice} beats ${computerchoice}`;}
// call the winner function



    if((computerchoice=="rock"&& userchoice=="scissor")||(computerchoice=="scissor"&& userchoice=="paper")||computerchoice=="paper"&& userchoice=="rock"){
    loser();
    document.querySelector(".msg").innerHTML=`You have lost the game.Your ${userchoice} was beaten by ${computerchoice}`;
}
// call the loser function 
};

const draw=()=>{
    // alert("draw");
    console.log("draw Game");
    document.querySelector(".msg").innerHTML = "The game was Draw";

    document.querySelector(".msg").style.backgroundColor="grey";
}


const winner=(userchoice,compchoice)=>
    {
       {
            userScore++;
            console.log("you have won the match");
            console.log("userscore",userScore);
userScorepara.innerText=userScore;
            document.querySelector(".msg").style.backgroundColor="green";
        }
    }


    const loser=(userchoice,compchoice)=>
        {
                compscore++;
                console.log("you have lost the match");
                console.log("compscore",compscore);
                compScorepara.innerText=compscore;
                document.querySelector(".msg").style.backgroundColor="red";
        }






choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
       
        const userchoice=choice.getAttribute("id");
        // console.log(" choice was clicked",userchoice);
        playGame(userchoice);
    });
});


