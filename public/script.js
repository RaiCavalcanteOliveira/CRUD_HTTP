
function enviarDados() {
    //Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const departamento = document.getElementById('departamento').value;
    const copiadeemail = document.getElementById('copiadeemail').value;
    const senha = document.getElementById('senha').value;
    fetch('Cadastro', {
        method: 'POST', // método HTTP utilizado
        headers: {
            // Tipo de conteúdo enviado (JSON)
            'content-type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, sobrenome: sobrenome, telefone: telefone, email: email, senha: senha, assunto: assunto, mensagem: mensagem, departamento: departamento, cópiadeemail: copiadeemail })
    })
        // Converte a resposta para JSO
        .then(response => response.json())
}


function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    fetch('Cadastro').then(response => response.json()).then(data => {
        //Busca as pessoas cujo nome e idade coincidem com os valorees  digitalizados
        //Esse (p) seria o parametro do find(Procurar) função CallBack
        const pessoa = data.find(p => p.email === email && p.senha === senha)

        if (pessoa) {
            window.location.href = "bemvindo.html"
        }
    })

    fetch('funcionarios').then(response => response.json()).then(data => {
        //Busca as pessoas cujo nome e idade coincidem com os valorees  digitalizados
        //Esse (p) seria o parametro do find(Procurar) função CallBack
        const funcionario = data.find(p => p.email === email && p.senha === senha)
        if (funcionario) {
            window.location.href = "bemvindo.html"
        }
    })
}

function deletarConta() {
    //Obtém os valores dos campos do formulário
    const id = document.getElementById('id').value;
    fetch(`Cadastro/${id}`, {
        method: "DELETE" //Método HTTP para deletar dados
    })
        .then(response => response.json())
}

function atualizarDados() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const departamento = document.getElementById('departamento').value;
    const copiadeemail = document.getElementById('copiadeemail').value;
    const senha = document.getElementById('senha').value;

    fetch(`Cadastro/${id}`, {
        method: "PUT", // método HTTP utilizado
        headers: {
            // Tipo de conteúdo enviado (JSON)
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            email: email,
            senha: senha,
            assunto: assunto,
            mensagem: mensagem,
            departamento: departamento,
            copiadeemail: copiadeemail
        })
    })
        .then(response => response.json())
        .catch(error => console.error('Erro ao atualizar dados:', error));
}


function carregarDados() {
    fetch('Cadastro', {
        method: "GET"
    }).then(response => response.json()).then(data => {
        for (let x = 0; x < data.length; x++) {
            const div = document.createElement('div')
            div.innerHTML = "Id: " + data[x].id + "<br>"
            div.innerHTML += "Nome: " + data[x].nome + "<br>"
            div.innerHTML += "Sobrenome: " + data[x].sobrenome + "<br>"
            div.innerHTML += "Telefone: " + data[x].telefone + "<br>"
            div.innerHTML += "Email: " + data[x].email + "<br>"
            div.innerHTML += "Cópia de Email: " + data[x].copiadeemail + "<br>"
            div.innerHTML += "Departamento: " + data[x].departamento + "<br>"
            div.innerHTML += "Assunto: " + data[x].assunto + "<br>"
            div.innerHTML += "Mensagem: " + data[x].mensagem + "<br>"


            const maediv = document.getElementById('maediv');
            maediv.appendChild(div)
            div.classList.add('limpar')
        }
    })


}
function limparPesquisa() {
    fetch('Cadastro', {
        method: "GET"
    }).then(response => response.json()).then(data => {
        for (let x = 0; x < data.length; x++) {
            const maediv = document.querySelector('.maediv')
            maediv.innerHTML = " ";
        }
    })




}


function buscarDados() {

    const id = document.getElementById('id').value;
    fetch(`Cadastro/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.innerHTML = "Id: " + data.id + "<br>"
            div.innerHTML += "Nome: " + data.nome + "<br>"
            div.innerHTML += "Sobrenome: " + data.sobrenome + "<br>"
            div.innerHTML += "Telefone: " + data.telefone + "<br>"
            div.innerHTML += "Email: " + data.email + "<br>"
            div.innerHTML += "Cópia de Email: " + data.copiadeemail + "<br>"
            div.innerHTML += "Departamento: " + data.departamento + "<br>"
            div.innerHTML += "Assunto: " + data.assunto + "<br>"
            div.innerHTML += "Mensagem: " + data.mensagem + "<br>"


            const maediv = document.getElementById('maediv');
            maediv.appendChild(div)
            div.classList.add('limpar')
        })
}

function buscarDadosInput() {
   
    const id = document.getElementById('id').value;
   

    fetch(`Cadastro/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            const nome = document.getElementById('nome')
            const sobrenome = document.getElementById('sobrenome')
            const telefone = document.getElementById('telefone')
            const email = document.getElementById('email')
            const assunto = document.getElementById('assunto')
            const mensagem = document.getElementById('mensagem')
            const departamento = document.getElementById('departamento')
            const copiadeemail = document.getElementById('copiadeemail')
            const senha = document.getElementById('senha')
             
            nome.value= data.nome;
            sobrenome.value=data.sobrenome;
            telefone.value= data.telefone;
            email.value= data.email;
            copiadeemail.value=data.cópiadeemail;
            departamento.value=data.departamento;
            assunto.value=data.assunto;
            mensagem.value=data.mensagem;
            senha.value=data.senha;

          
        })
}



