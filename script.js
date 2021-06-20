let ajax = new XMLHttpRequest();


ajax.open('GET', `https://api.github.com/users/jeffersonf-alves`);
ajax.send(null);

ajax.onreadystatechange = function() {

    let usuario = JSON.parse(ajax.responseText);

    console.log(usuario.bio)
}

