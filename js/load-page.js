// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

    $('#modal-info').modal('show')
  })
})