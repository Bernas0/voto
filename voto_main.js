 let resposta = document.getElementById('resposta')
 let verificar = document.getElementById('verificar')

 verificar.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log("Dados do formulario", nome, idade, titulo)

    const cidadao = new eleitor()
    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log("instancia do formulario",cidadao)

    cidadao.verificavoto()

    let mensagem =cidadao.verificavoto()

    resposta.innerHTML = ""
    resposta.innerHTML += `o eleito ${cidadao.nome}<br>`
    resposta.innerHTML += `tem ${cidadao.idade} anos de idade<br>`
    resposta.innerHTML += mensagem+'<br>'
 })