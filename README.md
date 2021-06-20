# AJAX_JS
Ajax criado com JS puro (explicando)

## Primeiro passo

A primeira coisa que vamos fazer é estanciar um objeto do JS

```
let ajax = new XMLHttpRequest();

```
Por ser um objeto você já pode chamar seus métodos e propriedades, se quiser ver no console basta
copiar esse código!!
```
let ajax = new XMLHttpRequest();
console.log(ajax)
```
Muitas possibilidades né?
Mas vamos focar no principal assunto aqui que é fazer um **AJAX** simples!

## Segundo passo

Agora que já temos nosso objeto, vamos chamar um dos métodos, esse método é o **open**, ele é quem fará nossa busca, então ela vai receber dois parâmetros! o primeiro é método HTTP a ser utilizado e o segundo é o link da nossa **API**
```
let ajax = new XMLHttpRequest();
// chamando o open
ajax.open('GET', `https://api.github.com/users/jeffersonf-alves`);
```
Nesse caso vamos utilizar uma API do **github** que retorna todos os usuários, Por estarmos buscando com um método HTTP precisamos enviar uma resposta, nesse caso vamos utilizar o método do **send** do nosso objeto

```
let ajax = new XMLHttpRequest();

ajax.open('GET', `https://api.github.com/users/jeffersonf-alves`);
ajax.send(null)
```
No caso vamos enviar um **null**, já que não queremos passar nada, e sim receber!

## Terceiro passo
Agora vamos pegar uma propriedade chamada **onreadystatechange** e nela vamos chamar uma função, essa função fará toda a nossa chamada, no caso o código ficará assim!
```
ajax.onreadystatechange = function() {

    let usuario = JSON.parse(ajax.responseText);
    console.log(usuario)
}

```
 Na variável usuário convertemos nossos valores de texto em JSON, utilizando o **JSON.parse** , esses valores em texto foi o que recebemos do nosso ajax, pegando os valores com a propriedade **responseText**, se quiser verificar você pode fazer uma **console.log(** usuario **)** e você!

```
let ajax = new XMLHttpRequest();

ajax.open('GET', `https://api.github.com/users/jeffersonf-alves`);
ajax.send(null);

ajax.onreadystatechange = function() {

    let usuario = JSON.parse(ajax.responseText);

    console.log(usuario)
}

```
## Quarto passo
Você vai notar que recebemos todos os valores em JSON da nossa API, mas o legal é que você faça uma verificação pra ver se todos os dados estão chegando corretamente, no caso utilizando uma propridade do nosso objeto chamada **status**, no caso vamos fazer essa verificação utilizando uma estrutura condicional, código vai ficar assim!

```
if(ajax.status === 200) {
    console.log(usuario);
} else {
    console.log('Problemas pra encontrar');
}
```
Isso é o básico, e você já pode receber dados da sua API, mas você pode fazer outras validações para deixar sua aplicação mais segura,
o código comleto fica assim!
```
let ajax = new XMLHttpRequest();

ajax.open('GET', `https://api.github.com/users/jeffersonf-alves1`);
ajax.send(null);

ajax.onreadystatechange = function() {

    let usuario = JSON.parse(ajax.responseText);

    if(ajax.status === 200) {
        console.log(usuario.bio);
    } else {
        console.log('Problemas pra encontrar');
    }
}

```

Agora você pode copiar esse repositória com um projetinho básico que fizemos que faz busca de usuários no github utilizando o conhecimento básico que temos até agora.


Link da API: https://api.github.com/users

