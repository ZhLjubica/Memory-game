const cards = document.querySelectorAll('.memory_card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return; 
    this.classList.add('flip');

if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    //kada se klikne na prvu karticu
    // console.log(hasFlippedCard, firstCard);
    return;
}
    // hasFlippedCard = false;
    secondCard = this;
    //kada se klikne na drugu karticu
    // console.log(hasFlippedCard, this);

    // console.log(firstCard.dataset.image);
    // console.log(secondCard.dataset.image);
    checkForMatch();
    

}
function checkForMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }else{
        lockBoard = true;
        setTimeout(()=> {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
        
    }
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shufle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    })
    
})();

cards.forEach( card => card.addEventListener('click', flipCard));