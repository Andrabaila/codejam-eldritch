import ancientsData from './ancients.js';
import cardsDataGreen from './green.js';
import cardsDataBrown from './brown.js';
import cardsDataBlue from './blue.js';

let anc = '';
let stage = 0;
const deckPlay = [];

let difficultyLevel = '';

function getDeckPlay(greenDeckPlay, brownDeckPlay, blueDeckPlay) {

    const cardsAmount = document.querySelectorAll('.cards-amount');
    const stage1 = [];
    const stage2 = [];
    const stage3 = [];  
    
    stage = 0;
for (let i = 0; i < Number(cardsAmount[0].textContent); i++) {
    stage1.push(greenDeckPlay[0]);
    greenDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[1].textContent); i++) {
    stage1.push(brownDeckPlay[0]);
    brownDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[2].textContent); i++) {
    stage1.push(blueDeckPlay[0]);
    blueDeckPlay.splice(0, 1);
}

for (let i = 0; i < Number(cardsAmount[3].textContent); i++) {
    stage2.push(greenDeckPlay[0]);
    greenDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[4].textContent); i++) {
    stage2.push(brownDeckPlay[0]);
    brownDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[5].textContent); i++) {
    stage2.push(blueDeckPlay[0]);
    blueDeckPlay.splice(0, 1);
}

for (let i = 0; i < Number(cardsAmount[6].textContent); i++) {
    stage3.push(greenDeckPlay[0]);
    greenDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[7].textContent); i++) {
    stage3.push(brownDeckPlay[0]);
    brownDeckPlay.splice(0, 1);
}
for (let i = 0; i < Number(cardsAmount[8].textContent); i++) {
    stage3.push(blueDeckPlay[0]);
    blueDeckPlay.splice(0, 1);
}

for (let i = stage1.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [stage1[i], stage1[j]] = [stage1[j], stage1[i]];
  }

  for (let i = stage2.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [stage2[i], stage2[j]] = [stage2[j], stage2[i]];
  }

  for (let i = stage3.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [stage3[i], stage3[j]] = [stage3[j], stage3[i]];
  }

deckPlay.splice(0, deckPlay.length);
deckPlay.push(stage1, stage2, stage3);

}

function getGreenDeck() {

    const cardsAmount = document.querySelectorAll('.cards-amount');
    let amountGreen = Number(cardsAmount[0].textContent) + Number(cardsAmount[3].textContent) + Number(cardsAmount[6].textContent);
    const greenDeck = [];
    const greenDeckPlay = [];
    const normalDeck = [];
    let randomNum = 0;
    let repeat = false;

    for (let i = 0; i < cardsDataGreen.length; i++) {
        if (cardsDataGreen[i].difficulty === 'normal') {
            normalDeck.push(cardsDataGreen[i]);
        }
    }

    for (let m = normalDeck.length - 1; m > 0; m--) {
        let n = Math.floor(Math.random() * (m + 1));
        [normalDeck[m], normalDeck[n]] = [normalDeck[n], normalDeck[m]];
      }

    switch (difficultyLevel) {
        case 'easiest':
            for (let j = 0; j < cardsDataGreen.length; j++) {
                if (cardsDataGreen[j].difficulty === 'easy') {
                    greenDeck.push(cardsDataGreen[j]);
                }
            }
            let p = 0;
            while (greenDeck.length < amountGreen) {
                greenDeck.push(normalDeck[p]);
                p++;
            }
        break;

        case 'easy':
            for (let j = 0; j < cardsDataGreen.length; j++) {
                if (cardsDataGreen[j].difficulty != 'hard') {
                    greenDeck.push(cardsDataGreen[j]);
                }
            }
        break;

        case 'medium':
            for (let j = 0; j < cardsDataGreen.length; j++) {
                    greenDeck.push(cardsDataGreen[j]);
            }
        break;

        case 'high':
            for (let j = 0; j < cardsDataGreen.length; j++) {
                if (cardsDataGreen[j].difficulty != 'easy') {
                    greenDeck.push(cardsDataGreen[j]);
                }
            }
        break;

        case 'highest':
            for (let j = 0; j < cardsDataGreen.length; j++) {
                if (cardsDataGreen[j].difficulty === 'hard') {
                    greenDeck.push(cardsDataGreen[j]);
                }
            }

            let r = 0;
            while (greenDeck.length < amountGreen) {
                greenDeck.push(normalDeck[r]);
                r++;
            }
        break;
    }

    for (let k = 0; k < amountGreen; k++) {
        randomNum = Math.floor(Math.random() * greenDeck.length);
        repeat = false;
        for (let l = 0; l < greenDeckPlay.length; l++) {
           if (greenDeckPlay[l].id ===  greenDeck[randomNum].id) {
            repeat = true;
           }
        }

        if (repeat) {
            k--;
        } else {
            greenDeckPlay.push(greenDeck[randomNum]);
        }
    }

return greenDeckPlay;
}

function getBrownDeck() {

    const cardsAmount = document.querySelectorAll('.cards-amount');
    let amountBrown = Number(cardsAmount[1].textContent) + Number(cardsAmount[4].textContent) + Number(cardsAmount[7].textContent);

    const brownDeck = [];
    const brownDeckPlay = [];
    const normalDeck = [];

    let randomNum = 0;
    let repeat = false;

    for (let i = 0; i < cardsDataBrown.length; i++) {
        if (cardsDataBrown[i].difficulty === 'normal') {
            normalDeck.push(cardsDataBrown[i]);
        }
    }

    for (let m = normalDeck.length - 1; m > 0; m--) {
    let n = Math.floor(Math.random() * (m + 1));
    [normalDeck[m], normalDeck[n]] = [normalDeck[n], normalDeck[m]];
    }

    switch (difficultyLevel) {
        case 'easiest':
            for (let j = 0; j < cardsDataBrown.length; j++) {
                if (cardsDataBrown[j].difficulty === 'easy') {
                    brownDeck.push(cardsDataBrown[j]);
                }
            }
            let p = 0;
            while (brownDeck.length < amountBrown) {
                brownDeck.push(normalDeck[p]);
                p++;
            }
        break;

        case 'easy':
            for (let j = 0; j < cardsDataBrown.length; j++) {
                if (cardsDataBrown[j].difficulty != 'hard') {
                    brownDeck.push(cardsDataBrown[j]);
                }
            }
        break;

        case 'medium':
            for (let j = 0; j < cardsDataBrown.length; j++) {
                    brownDeck.push(cardsDataBrown[j]);
            }
        break;

        case 'high':
            for (let j = 0; j < cardsDataBrown.length; j++) {
                if (cardsDataBrown[j].difficulty != 'easy') {
                    brownDeck.push(cardsDataBrown[j]);
                }
            }
        break;

        case 'highest':
            for (let j = 0; j < cardsDataBrown.length; j++) {
                if (cardsDataBrown[j].difficulty === 'hard') {
                    brownDeck.push(cardsDataBrown[j]);
                }
            }
            let q = 0;
            while (brownDeck.length < amountBrown) {
                brownDeck.push(normalDeck[q]);
                q++;
            }
        break;
    }

    for (let k = 0; k < amountBrown; k++) {
        randomNum = Math.floor(Math.random() * brownDeck.length);
        repeat = false;

        for (let l = 0; l < brownDeckPlay.length; l++) {
            if (brownDeckPlay[l].id ===  brownDeck[randomNum].id) {
            repeat = true;
           }
        }

        if (repeat) {
            k--;
        } else {
            brownDeckPlay.push(brownDeck[randomNum]);
        }
    }
    return brownDeckPlay;
}

function getBlueDeck() {

    const cardsAmount = document.querySelectorAll('.cards-amount');
    let amountBlue = Number(cardsAmount[2].textContent) + Number(cardsAmount[5].textContent) + Number(cardsAmount[8].textContent);

    const blueDeck = [];
    const blueDeckPlay = [];

    let randomNum = 0;
    let cardImageSrc = '';
    let repeat = false;

    switch (difficultyLevel) {
        case 'easiest':
            for (let j = 0; j < cardsDataBlue.length; j++) {
                if (cardsDataBlue[j].difficulty === 'easy') {
                    blueDeck.push(cardsDataBlue[j]);
                }
            }
        break;

        case 'easy':
            for (let j = 0; j < cardsDataBlue.length; j++) {
                if (cardsDataBlue[j].difficulty != 'hard') {
                    blueDeck.push(cardsDataBlue[j]);
                }
            }
        break;

        case 'medium':
            for (let j = 0; j < cardsDataBlue.length; j++) {
                blueDeck.push(cardsDataBlue[j]);
            }

        break;

        case 'high':
            for (let j = 0; j < cardsDataBlue.length; j++) {
                if (cardsDataBlue[j].difficulty != 'easy') {
                    blueDeck.push(cardsDataBlue[j]);
                }
            }
        break;

        case 'highest':
            for (let j = 0; j < cardsDataBlue.length; j++) {
                if (cardsDataBlue[j].difficulty === 'hard') {
                    blueDeck.push(cardsDataBlue[j]);
                }
            }
        break;
    }

    for (let k = 0; k < amountBlue; k++) {
        randomNum = Math.floor(Math.random() * blueDeck.length);
        repeat = false;
        for (let l = 0; l < blueDeckPlay.length; l++) {
            if (blueDeckPlay[l].id ===  blueDeck[randomNum].id) {
            repeat = true;
           }
        }

        if (repeat) {
            k--;
        } else {
            blueDeckPlay.push(blueDeck[randomNum]);
        }
    }

    return blueDeckPlay;
}

function getCard() {

    const card = document.querySelector('.card');
    const cardImage = document.querySelector('.card_image');
    const cardSource = deckPlay[stage][0].cardFace;
    const color = deckPlay[stage][0].color;
    const stagesHeaders = document.querySelectorAll('.stage');
  
    const cardsAmountBoard = document.querySelectorAll(`.${color}`)
    let cardsAmount = Number(cardsAmountBoard[stage].textContent);
    cardsAmount--;
    cardsAmountBoard[stage].textContent = cardsAmount;
    console.log(cardSource);
    cardImage.src = cardSource;

    deckPlay[stage].splice(0, 1);
    if (deckPlay[stage].length === 0) {
        stagesHeaders[stage].classList.add('empty');
        stage++;
    }
    card.classList.remove('hidden');

    if (stage === 3) {
        const shirt = document.querySelector('.shirt');
        shirt.classList.add('hidden');
    }
}

function setTrackableAncients() {
    const ancients = document.querySelectorAll('.header__card_image');

    for (let i = 0; i < ancients.length; i++) {
        ancients[i].addEventListener('click', setActiveAncient);
    }
}

setTrackableAncients()

function setTrackableDifficulty() {
    const difficulties = document.querySelectorAll('.difficulty_button');

    for (let i = 0; i < difficulties.length; i++) {
        difficulties[i].addEventListener('click', setActiveDifficulty);
    }
}

setTrackableDifficulty();

function setTrackableShuffle() {
    const shuffle = document.querySelector('.shuffle');

    shuffle.addEventListener('click', shuffleDeck);
}

setTrackableShuffle()

function setTrackableDeckShirt() {
    const deckShirt = document.querySelector('.deck_image_shirt');

    deckShirt.addEventListener('click', getCard);
}

setTrackableDeckShirt()

function shuffleDeck() {
    const greenDeckPlay = getGreenDeck();
    const brownDeckPlay = getBrownDeck();
    const blueDeckPlay = getBlueDeck();
    getDeckPlay(greenDeckPlay, brownDeckPlay, blueDeckPlay);

    const stages = document.querySelector('.stages');
    const shuffle = document.querySelector('.shuffle');
    const shirt = document.querySelector('.shirt');

    stages.classList.remove('hidden');
    shirt.classList.remove('hidden');
    shuffle.classList.add('hidden');
}

function setActiveDifficulty(event) {
    const difficulties = document.querySelectorAll('.difficulty_button');
    const difficulty = document.getElementById(event.target.id);
    const shuffle = document.querySelector('.shuffle');
    const stages = document.querySelector('.stages');
    const shirt = document.querySelector('.shirt');
    const card = document.querySelector('.card');
    const stagesHeaders = document.querySelectorAll('.stage');
    const cardsAmount = document.querySelectorAll('.cards-amount');

    card.classList.add('hidden');

    stagesHeaders[0].classList.remove('empty');
    stagesHeaders[1].classList.remove('empty');
    stagesHeaders[2].classList.remove('empty');

    for (let j = 0; j < ancientsData.length; j++) {
        if (ancientsData[j].name === anc) {
            cardsAmount[0].textContent = ancientsData[j].firstStage.greenCards;
            cardsAmount[1].textContent = ancientsData[j].firstStage.brownCards;
            cardsAmount[2].textContent = ancientsData[j].firstStage.blueCards;
            cardsAmount[3].textContent = ancientsData[j].secondStage.greenCards;
            cardsAmount[4].textContent = ancientsData[j].secondStage.brownCards;
            cardsAmount[5].textContent = ancientsData[j].secondStage.blueCards;
            cardsAmount[6].textContent = ancientsData[j].thirdStage.greenCards;
            cardsAmount[7].textContent = ancientsData[j].thirdStage.brownCards;
            cardsAmount[8].textContent = ancientsData[j].thirdStage.blueCards;
        }
    }

    for (let i = 0; i < difficulties.length; i++) {
        difficulties[i].classList.remove('difficulty_button-active');
    }

    difficulty.classList.add('difficulty_button-active');
    stages.classList.add('hidden');
    shuffle.classList.remove('hidden');
    shirt.classList.add('hidden');

    difficultyLevel = event.target.id;
}

function setActiveAncient(event) {
    const ancients = document.querySelectorAll('.header__card_image');
    const stagesHeaders = document.querySelectorAll('.stage');
    const ancient = document.getElementsByName(event.target.name);
    const difficulty = document.querySelector('.difficulty');
    const shirt = document.querySelector('.shirt');
    const stages = document.querySelector('.stages');
    const shuffle = document.querySelector('.shuffle');
    const card = document.querySelector('.card');
    const cardsAmount = document.querySelectorAll('.cards-amount');

    anc = event.target.name;

    stagesHeaders[0].classList.remove('empty');
    stagesHeaders[1].classList.remove('empty');
    stagesHeaders[2].classList.remove('empty');

    for (let j = 0; j < ancientsData.length; j++) {
        if (ancientsData[j].name === event.target.name) {
            cardsAmount[0].textContent = ancientsData[j].firstStage.greenCards;
            cardsAmount[1].textContent = ancientsData[j].firstStage.brownCards;
            cardsAmount[2].textContent = ancientsData[j].firstStage.blueCards;
            cardsAmount[3].textContent = ancientsData[j].secondStage.greenCards;
            cardsAmount[4].textContent = ancientsData[j].secondStage.brownCards;
            cardsAmount[5].textContent = ancientsData[j].secondStage.blueCards;
            cardsAmount[6].textContent = ancientsData[j].thirdStage.greenCards;
            cardsAmount[7].textContent = ancientsData[j].thirdStage.brownCards;
            cardsAmount[8].textContent = ancientsData[j].thirdStage.blueCards;
        }
    }

    card.classList.add('hidden');

    if (!stages.classList.contains('hidden')) {
        shuffle.classList.remove('hidden');
    }
    
    for (let i = 0; i < ancients.length; i++) {
        ancients[i].classList.remove('header__card-active');
    }

    ancient[0].classList.add('header__card-active');
    difficulty.classList.remove('hidden');
    shirt.classList.add('hidden');
    stages.classList.add('hidden');
}