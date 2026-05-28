# Cronômetro com JavaScript
Link para teste:  https://rodrigogrnja.github.io/relogio-js/


Este projeto é um cronômetro simples desenvolvido com **HTML, CSS e JavaScript**, criado para praticar manipulação do DOM, eventos de clique e controle de tempo usando `setInterval`.

## Funcionalidades

- Iniciar o cronômetro
- Pausar o cronômetro
- Zerar o tempo
- Exibir o tempo no formato `HH:MM:SS`
- Alterar o estilo visual quando o cronômetro está pausado

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de JavaScript, como:

- Manipulação do DOM
- Uso de `querySelector`
- Eventos com `addEventListener`
- Controle de intervalos com `setInterval` e `clearInterval`
- Manipulação de classes CSS com `classList`
- Formatação de tempo com `Date`

## Objetivo do projeto

O objetivo deste projeto foi criar um cronômetro funcional e simples, reforçando os fundamentos de JavaScript e a interação entre HTML, CSS e JS.


## Como funciona

O cronômetro conta os segundos a partir de zero e converte esse valor para o formato de hora utilizando o objeto `Date`.

A função principal responsável pela formatação do tempo é:

```javascript
function CriarHora(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}
