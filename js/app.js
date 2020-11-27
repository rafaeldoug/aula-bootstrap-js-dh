function getDados() {

  var confirma = false;
  
  while (!confirma) {
    var nome = prompt('Qual o seu nome?')
    var idade = prompt('Qual a sua idade?');
    var profissao = prompt('Qual a sua profissao?');
  
    var confirma = confirm(`Nome: ${nome}\nIdade: ${idade}\nProfissão: ${profissao}\n\nConfirma que os dados estão corretos?`);
  }

  alert("Não é mais possível alterar os dados.")

  let dados = [nome, idade, profissao];

  return dados;
}

//buscando os dados do prompt
let dados = getDados();

// buscando todos os elementos da ul
let lis = document.querySelectorAll('#lista-dados li');

// iterando no elementos, atribuindo valores e estilos
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML += ' ' + dados[i];
  // alterando estilo de elementos adicionados
  lis[i].style.color = 'rgb(110,10,46)';
}

// buscando o tamanho da tela e guardando em variaveis
let windowWidth = window.outerWidth;
let windowHeight = window.outerHeight;

// adicionando a informação do tamanho da tela na ul
document.querySelector('#lista-dados').innerHTML += 
`
<li>Tamanho atual da tela: <strong>${windowWidth} x ${windowHeight}</li>
`;

// alterando/adicionando classe em elemento
document.querySelector('h1').classList.add('titulo-novo');

//adicionando classe bootstrap
document.querySelector('main').classList.add('container');

// capturando 3 elementos por o id
let main = document.getElementById('principal');
let lista = document.getElementById('lista-dados');
let nome = document.getElementById('nome');
