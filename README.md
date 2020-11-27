###### [work_in_progress]
# Brincando com JS

Durante a aula, nosso instrutor [Léo Carvalho](https://github.com/carvalholeo/aula-bootstrap-dh) solicitou que fizéssemos as seguintes tarefas, utilizando apenas Javascript :

- Capturar nome, idade e profissão;
- Exibir uma caixa de confirmação, perguntando se os dados estão corretos. Se estiverem, colocar no HTML e emitir um alert avisando que não dá mais para mudar. Se não estiverem, reiniciar a coleta;
- Colocar o tamanho da tela do navegador (outerWidth x outerHeight) dentro da lista;
- Capturar 3 elementos, usando seletor de id;
- Trocar o estilo de cada um dos elementos capturados
- Adicionar alguma classe do Bootstrap em um dos elementos
  

#### > Capturar nome, idade e profissão; e
#### > Exibir uma caixa de confirmação, perguntando se os dados estão corretos. Se estiverem, colocar no HTML e emitir um alert avisando que não dá mais para mudar. Se não estiverem, reiniciar a coleta.

Exibir uma caixa de confirmação, perguntando se os dados estão corretos. Se estiverem, colocar no HTML e emitir um alert avisando que não dá mais para mudar. Se não estiverem, reiniciar a coleta.

Uma abordagem direta foi a de utilizar uma _function_ responsável em pegar estes dados via a função _prompt()_ e através de uma iteração, caso as informações não fossem confirmadas, através do _confirm()_, seria solicitado ao usuário que inserisse novamente as informações.

```javascript
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
```

#### > Colocar o tamanho da tela do navegador (outerWidth x outerHeight) dentro da lista;

Utilizando o objeto _document_ com o _querySelector_ e _innerHTML_ concatenando com os valores já existentes.

```javascript
document.querySelector('.lista-dados').innerHTML += `<li>Tamanho atual da tela: <strong>${windowWidth} x ${windowHeight}</li>`;
```

#### > Capturar 3 elementos, usando seletor de id;

Utilizando o objeto _document_ com o _getelementById_ atribuindo os valores capturados à variáveis.

```javascript
let main = document.getElementById('principal');
let lista = document.getElementById('lista-dados');
let nome = document.getElementById('nome');
```

#### > Trocar o estilo de cada um dos elementos capturados

Bom... neste caso eu não fiz exatamente o solicitado 😬
No bloco de iteração na _function getDados()_, todos os _li_ já recebem seus estilos.

```javascript
function getDados() {
    ...
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML += ' ' + dados[i];
      lis[i].style.color = 'rgb(110,10,46)'; // alterando estilo dos elementos
    }
    ...
}
```

#### > Adicionar alguma classe do Bootstrap em um dos elementos

Utilizando o objeto _document_ com o _querySelector_, foi buscada a tag _main_ e através do _classList_ e o _add_ a classe Bootstrap **container** foi adicionada à tag selecionada.

```javascript
document.querySelector('main').classList.add('container');
```

###### **Este código foi feito no intuito de treinar aplicações do Javascript e manipulações no DOM através do mesmo. Estará em constantes alterações. Foi feito para brincar mesmo com ele. 😀👍**

 <img src="https://avatars2.githubusercontent.com/u/13889417?s=280&v=4" alt="Logo Digital House">
 <img src="https://estacaohack.fb.com/wp-content/uploads/sites/55/2018/11/estacao-hack-logo.png" alt="Logo Estação Hack from Facebook">
