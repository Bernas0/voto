class eleitor{
    constructor(nome,idade,titulo){

    this.nome = nome,
    this.idade = idade,
    this.titulo = titulo
    }

    verificavoto(){
    let idade = this.idade
    
    if (idade<=16){
        console.log("Não apto para votar")
        return "Abaixo da idade minima"
    }else if ((idade>=16)&&idade<18){
            console.log("Idade facultativa para vot0")
        return "idade onde o voto é facultativo"
    }else if ((idade<=18)&&idade<=70){
            console.log("Voto obrigatório")
        return "Idade onde é obrigatório"
    }else if (idade > 70 ){
        console.log("Voto facultativo")
        return "idade onde o voto é facultativo"
    }

}
}