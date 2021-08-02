// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

  // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    // Verificar qual conteudo eu devo carregar
    switch(page){
    
    //Se for para abrir a pagina sobre mim.
    case 'about':
    $('.modal-title').append('Quem sou eu?')
    $('.modal-body').append('lorem')
    $('.modal-info').modal('show')
    break

    case 'work':
    break

    case 'client':
    break

    case 'contact':
    break
    }


  })
})