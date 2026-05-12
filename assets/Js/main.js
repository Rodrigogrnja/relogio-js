function CriarHora (segundos) { 
    const data = new Date (segundos * 1000);
    
    return data.toLocaleTimeString ('pt-BR', {
      hour12: false,
      timeZone: 'UTC' 
    })
}


const relogio = document.querySelector ('.relogio');
const iniciar = document.querySelector ('.iniciar'); 
const pausar = document.querySelector ('.pausar');
const zerar = document.querySelector ('.zerar');


// Serve para contar ir somando os segundos de 1 em 1.
let segundos = 0; 


// Iniciar o timer antes para poder usa-lo fora do escopo da function 
let timer            
function iniciaRelogio () {
   timer = setInterval (() => {
  segundos ++; 
  relogio.innerHTML = CriarHora(segundos);
  }, 1000);
}


// Função para capturar eventos no click do usuário. 
document.addEventListener('click', (event) => {
  const elemento = event.target; 
  
  if (elemento.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
  }
  if (elemento.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado'); 
  }
  if (elemento.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer); 
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }
})