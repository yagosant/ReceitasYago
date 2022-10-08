import { Recipe } from "./types";

//pega uma string e dividi em array mediante ao campo de paramentro
/* function splitSearch(search: string){
  return search.split(",");

} */


function mudarPagina(acao:string){
  const paginaAtual: string = document.getElementById("pagina")?.innerHTML!;
  let numPagina = parseInt(paginaAtual);
  if(acao === 'voltar'){
    if(numPagina < 1)return alert("não conseguimos ainda trazer paginas negativas, sinto muito");
    numPagina = numPagina - 1;
  }

  if(acao == "avancar") numPagina = numPagina + 1;

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

      const card = ` <div class="card-receitas">
                  <img src="${receitas[index].urlImage}" alt="" class="card-receitas-poster" id="card-receitas-poster--${receitas[index]}">
                  <div class="card-receitas-info-container">
                   <div class="card-receitas-info-container-header">
                      <h2 class="card-receitas-info-title" id="card-receitas-title-${receitas[index]}"> ${receitas[index].Name} - &nbsp;
                      <span class="card-receitas-info-notes" id="card-receitas-nota-${receitas[index]}">${receitas[index].Author} </span></h2>
                      <button className="button"> Veja como fazer</button>
                   </div>
                   </div>
                  </div>`;
      if(containerGridreceitas) containerGridreceitas.innerHTML += card;
  } 
}

//filtro multi itens do mesmo nome
 /* async function filterByIngredients(ingredient: string){
  const data = await getData();
  const filterData  = data.filter(recipe => {
    const ingredientIncludes =  recipe.Ingredients.filter(recipeIngredient=>{
      //joga tudo para minusculo
      return recipeIngredient.toLowerCase().includes(ingredient)
    });

    if(ingredientIncludes.length) return recipe;
  }); 
 //console.log(filterData);
}
   
*/

 
getData(1);


/* filterByIngredients("dark"); */

//////////////






