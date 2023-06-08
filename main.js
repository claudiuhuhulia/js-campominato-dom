/* DOM ELEMENTS */

const grid = document.getElementById('grid');
const button= document.getElementById('play');
const scoreElement = document.getElementById('score');

/* FUNCTIONS */

const createCell = () => {
    const cell = document.createElement('div');
    cell.className= 'cell';
    return cell;
} 
const bombs = getrandombombs();
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

console.log(bombs); 

button.addEventListener('click', function(){

  grid.innerText='';
  let score = 0;

    for(i= 0 ; i < 100; i ++){
      const cell = createCell();  
      
      const cellnumb = cell.innerText= i + 1;
      
      cell.addEventListener('click', function(){
        if(!cell.classList.contains('clicked')){
          cell.classList.add('clicked');  
          ++score;
          scoreElement.innerText= score;
          console.log(cellnumb);
        }
        else {return}
      })
      
      grid.appendChild(cell);
    }
})