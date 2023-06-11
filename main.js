/* DOM ELEMENTS */

const grid = document.getElementById('grid');
const button= document.getElementById('play');
const scoreElement = document.getElementById('score');

let GameOver= false;


/* FUNCTIONS */

const createCell = () => {
    const cell = document.createElement('div');
    cell.className= 'cell';
    return cell;
} 

function getrandombombs(){
  let bombs=[];
  while(bombs.length < 16){
   let randomNumb;
    do{
    randomNumb = Math.floor(Math.random() * 100) + 1;
    }
    while(bombs.includes(randomNumb));
    bombs.push(randomNumb);
  }
 return bombs
}

function EndGame(score, haswon){
  const message= haswon ? `Hai vinto!` : `Hai perso, hai totalizzato ${score} punti!`;
  alert(message);
  GameOver= true;
}

const bombs = getrandombombs();

console.log(bombs); 

button.addEventListener('click', function(){

  grid.innerText='';
  let score = 0;

    for(i= 0 ; i < 100; i ++){
      const cell = createCell();  
      
      const cellnumb = cell.innerText= i + 1;
      
      cell.addEventListener('click', function(){

        if( GameOver === true){
          return
        }

        /* SE L'UTENTE HA CLICKATO UNA BOMBA */

        if(bombs.includes(cellnumb)){
          cell.classList.add('clickedbomb'); 
          EndGame(score, false);
        }
        
        if(score === 84){
          EndGame(score, true);
        }
        
        if(!cell.classList.contains('clicked') && !cell.classList.contains('clickedbomb')){
          cell.classList.add('clicked');  
          ++score;
          scoreElement.innerText= score;
          console.log(cellnumb);
        }
        
      })
    
      grid.appendChild(cell);

    }
})