import { Recipe } from "./types";

//pega uma string e dividi em array mediante ao campo de paramentro
/* function splitSearch(search: string){
  return search.split(",");

} */

const btnVoltar = document.querySelector("#voltar");
const btnAvancar = document.querySelector("#avancar");
const paginaAtual: string = document.getElementById("pagina")?.innerHTML!;
let numPagina = parseInt(paginaAtual);


function eventListenerHandle() {
  (btnVoltar as HTMLButtonElement)?.addEventListener("click", voltarPagina);
  (btnAvancar as HTMLButtonElement)?.addEventListener("click", avancarPagina);
}


function voltarPagina(){
  numPagina = numPagina - 1;  
  if(numPagina < 1) return alert("não conseguimos ainda trazer paginas negativas, sinto muito");
  paginaAtual
    console.log(numPagina);
  getData(numPagina);
  
}

function avancarPagina(){
  numPagina = numPagina + 1;  
    console.log(numPagina);
  getData(numPagina);
  
}

//função para pegar os dados, criando o tipo genérico de receita
async function getData(number:number): Promise<Recipe[]>{
    
    const request = await fetch("https://receitas-server.vercel.app/api");
    const data = await request.json();
    renderizarCards(data, number);
/*     console.log(data);
 */    return data;
}


//função de render para pegar os poster de acordo com a API
function renderizarCards(receitas:Recipe[], pagina: number) {
  const containerGridreceitas = document.getElementById("container-grid-receitas");

  //montando a páginação de receitas
  const quantiade = 10;
  const total = pagina  * quantiade;
  let atual = (pagina - 1) * quantiade;

   for (let index = atual; index <= total; index++) {

          const card = ` <a href="#abrirModal">
          <div class="card-receitas">
             <img src="${receitas[index].urlImage}" alt="" class="card-receitas-poster" id="card-receitas-poster--${receitas[index]}">
                  <div class="card-receitas-info-container">
                   <div class="card-receitas-info-container-header">
                      <h4 class="card-receitas-info-title" id="card-receitas-title-${receitas[index]}"> ${receitas[index].Name} - &nbsp;
                      <span class="card-receitas-info-notes" id="card-receitas-nota-${receitas[index]}">${receitas[index].Author} </span></h4>
                   </div>
                   </div>
                  </div>
                  </a>
                  <div id="abrirModal" class="modal">
                  
                  <div>
                  <a href="#fechar" title="Fechar" class="fechar">x</a>
                  <h2 id="card-receitas-title-${receitas[index]}">${receitas[index].Name} </h2>
                 <h3 id="card-receitas-nota-${receitas[index]}">${receitas[index].Author} </h3>
                 <b><p>Ingredientes:</p></b>
                  <p id="card-receitas-title-${receitas[index]}">${receitas[index].Ingredients}</p>    
                  </div>
                </div>
                  `; 
     
      if(containerGridreceitas) containerGridreceitas.innerHTML += card;
  } 
}


eventListenerHandle();
/*  
getData(1); */


/* filterByIngredients("dark"); */

//////////////






