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
    $('.modal-title').append("Quem sou eu")
    $('.modal-body').append("Sobre mim")
    $('.modal-info').modal('show')
    break

    case 'work':
    $('.modal-title').append("Trabalhos")
    $('.modal-body').append("meus trabalhos")
    $('.modal-info').modal('show")
    break

    case 'client':
    $('.modal-title').append("Cooperadores")
    $('.modal-body').append("amigos e clientes")
    $('.modal-info').modal('show')
    break

    case 'contact':
    $('.modal-title').append("Contato")
    $('.modal-body').append("redes sociais")
    $('.modal-info').modal('show')
    break
    }


  })
})