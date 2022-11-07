const cards= document.querySelectorAll(".card");
console.log(cards);

var isFlipped=false;
var firstCard;
var secondCard;

cards.forEach((card) =>  card.addEventListener("click",flip));

function flip(){
    // console.log("card flipped");
    //console.log(this);
    this.classList.add("flip");
// agar isflipped true nahi hai toh usko(yani first card ko) true kardenge aur true hai mtlb ek card already flipped 
//hai toh second card true karenge.
    if(!isFlipped){
        isFlipped=true;
        firstCard=this;
    }
    else{
        secondCard = true;
        console.log(firstCard);
    console.log(secondCard);
    checkIt();
    }
}
function checkIt(){
    // console.log("checking...");
    // dataset is providing us calss of global attributes that are common to all HTML elements.
    // agar vo dono equal hai toh mtlb same image thi hence a sucess else different image thi toh fail hojaaega 
    if(firstCard.dataset.image === secondCard.dataset.image){
        success();
    }else{
        fail();
    }
}

function success(){
    // console.log("sucess");
    // sucess hotya hai toph eventlistenere hata denge aur card wapas flip hojaaega 
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
}

function fail(){
    // console.log("failed");
    setTimeout( () =>{
        firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
},1000);
    
}
// resetting the state of game 
function reset(){
     isFlipped=false;
 firstCard=null;
secondCard=null;
}

(function shuffle(){
    cards.forEach((card)=>{
        var index=Math.floor(Math.random()*16)
        card.style.order = index;
    });
})();
