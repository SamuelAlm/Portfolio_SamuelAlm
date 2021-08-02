// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

   // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    switch(page){
    case 'about': alert('quem sou eu?')
    break

    case 'work': alert('trabalhos')
    break

    case 'client': alert('clientes')
    break

    case 'contact': alert('contato')
    break

    default:
    alert('Link invalido')
    }
    
  })
})