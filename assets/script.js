const votebtn = document.querySelector(".btn-vote")
const  voteNum = document.querySelector(".num-vote")
const VoteNumBb = document.getElementById("voteNumBb")
const  voteBB = document.getElementById("voteBB")

let gotScore = 0;
let bbScore = 0;

voteNum.textContent =gotScore; 
VoteNumBb.textContent = bbScore;

votebtn.addEventListener("click" , function () {
    gotScore++;
    voteNum.textContent =gotScore;
});

voteBB.addEventListener("click" , function () {
    bbScore++;
    VoteNumBb.textContent = bbScore;
});