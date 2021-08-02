// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

  // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    alert(page)
    
  })
})