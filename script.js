//Função que será chamada quando clicar no botão
//Função: um bloco de código reutilizável que executa uma tarefa especifica
function calcular(){
    //1. pegar os elementos da tela
    // Aqui pegamos cada checkbox pelo Id
    let hamburguer = document.getElementById("hamburguer")
    let batata = document.getElementById("batata")
    let nuggets = document.getElementById("nuggets")
    let refrigerante = document.getElementById("refrigerante")
    let pizza = document.getElementById("pizza")
    let sorvete = document.getElementById("sorvete")
    //2 variaveis iniciais
    //total começa com 0
    let total = 0
    //string para guardar os itens escolhidos
    let itens = ""
    //3. verificar cada produto

    // se o checkbox estiver marcado (true)

    if(hamburguer.checked){
        total = total + 32,50 //soma o valor do hamburguer
        itens = itens +"Hambúrguer 🍔<br>" //adiciona ao texto dos produtos

    }
    if(batata.checked){
        total = total + 16,50
        itens = itens + "Batata 🍟<br>"

    }
    if(nuggets.checked){
        total = total + 20
        itens = itens + "Nuggets 🐔<br>"
    }
    if(refrigerante.checked){
        total = total + 34,50
        itens = itens + "Refrigerante lata 🥤<br>"
    }
    if(pizza.checked){
        total = total + 34,50
        itens = itens + "Pizza de Frango com Catupiry (Broto) 🍕<br>"

    }
    if(sorvete.checked){
        total = total + 22
        itens = itens + "Sorvete de creme com pedaços de morango e chantilly 🍨<br>"
    }

    //4. pegar div do resultado
    let resultado = document.getElementById("resultado")

    //5.validacao
    //se nao escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui 
    }

    //6. desconto
    let subtotal = total
    let desconto = 0

    //se o valor for maior ou igual a 40, aplicamos o desconto de 10%
    if(subtotal >= 40){
        desconto = subtotal * 0.10 // 10%
    }
    
    //7. entrega
    let entrega = 5
    //se passar de 50 -> entrega gratis
   if(subtotal - desconto >= 55){
    entrega = 0
    
    }

    // 8. total final
    let totalFinal = subtotal - desconto + entrega

    //9. mostrar o resultado
    resultado.innerHTML = "<strong>Itens:</strong><br>" + itens 
    + "<br> Subtotal: R$ " + subtotal.toFixed(2)+ "<br> Entrega: R$ " 
    + entrega.toFixed(2) + "<br> Desconto: R$ " + desconto.toFixed(2) + "<br><strong> Total: R$ " 
    + totalFinal.toFixed(2) + "</strong>"

    

}