let ajax = new XMLHttpRequest();
let user = document.querySelector('#user');
let app = document.querySelector('#app')


btn.onclick = function() {
    ajax.open('GET', `https://api.github.com/users/${user_par}`);
    ajax.send(null);
    
    ajax.onreadystatechange = function() {
    
        let usuario = JSON.parse(ajax.responseText);
    
        if(ajax.status === 200) {
            let contentPai = document.createElement('div');
            content.setAttribute('class');            
    
        } else {
            console.log('Problemas pra encontrar');
        }
    } 
    let contentPai = document.createElement('div');
    content.setAttribute('class');
    


}

