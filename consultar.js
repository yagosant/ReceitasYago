"use strict";
//funcao de filtro dos ingredientes - Apenas o filtro especifico
/* async function filterByIngredients(ingredient: string){
    const filterData = await getData();
    const retorno  = filterData.filter(data => {
      return data.Ingredients.includes(ingredient)
    });
   console.log(retorno);
   
} */
//função de filtro para mais de um item
/* async function filterByIngredients(ingredient: string){

  //pega os dados da API
  const data = await getData();
  const filterData  = data.filter(recipe => {

    //verifica se tem mais de um item na pesquisa
    const isMultiple= splitSearch(ingredient).length >1;

    //caso tenhamos apenas 1 ingrediente
    if(!isMultiple) {
      const ingredientIncludes =  recipe.Ingredients.filter(recipeIngredient=>{
        return recipeIngredient.toLowerCase().includes(ingredient.toLowerCase());
      });

      return ingredientIncludes.length ? recipe : false;
    }
    
    //caso tenha mais de um ingrediente, cria um array para salvar o retorno da pesquisa
    if(isMultiple){
    let acumulador: string[] = [];
    const searchValues = splitSearch(ingredient);

    for (let i = 0; i < searchValues.length; i++) {
      for (let y = 0; y < recipe.Ingredients.length; y++) {
        if(recipe.Ingredients[y].includes(searchValues[i])){
          if(acumulador.includes(searchValues[i])){
            return false;
          }
          acumulador.push(searchValues[i]);
        }
      }
    }

    if(acumulador.length === searchValues.length) return true;
  }
  });
 console.log(filterData);
} */
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
//função antiga de cards
/* const card = ` <div class="card-receitas">
            <img src="${receitas[index].urlImage}" alt="" class="card-receitas-poster" id="card-receitas-poster--${receitas[index]}">
            <div class="card-receitas-info-container">
             <div class="card-receitas-info-container-header">
                <h2 class="card-receitas-info-title" id="card-receitas-title-${receitas[index]}"> ${receitas[index].Name} - &nbsp;
                <span class="card-receitas-info-notes" id="card-receitas-nota-${receitas[index]}">${receitas[index].Author} </span></h2>
                <button className="button"> Veja como fazer</button>
             </div>
             </div>
            </div>`; */
/*       const card = `<div id="card-receita">
      <img src="${receitas[index].urlImage}" alt="">
      <div class="texto">
      <h2 id="card-receitas-title-${receitas[index]}">${receitas[index].Name} </h2>
     <h3 id="card-receitas-title-${receitas[index]}">${receitas[index].Author} </h3>
     <b><p>Ingredientes:</p></b>
      <p id="card-receitas-title-${receitas[index]}">${receitas[index].Ingredients}</p>
      </div>
  </div>`;  */
/* function renderizarCards(receitas:Recipe[], pagina: number) {
  const containerGridreceitas = document.getElementById("container-grid-receitas");

  //montando a páginação de receitas
  const quantiade = 10;
  const total = pagina  * quantiade;
  let atual = (pagina - 1) * quantiade;

  receitas.map(()=>{
    
  })

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
} */ 
