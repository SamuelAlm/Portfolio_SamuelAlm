// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

   // Variavel local que recebe o atributo href do link
    let page = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(page){
    case 'about': 
      $('.modal-title').append('Sobre mim')
      $('.modal-body').append(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus accusantium quas iste nihil in rem nemo delectus nesciunt, eos soluta laudantium deserunt numquam, autem consequatur pariatur id nostrum dolore.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ipsum, blanditiis omnis quis nam eveniet corporis laudantium recusandae natus repudiandae voluptatum! Magnam sit quo ullam quisquam nulla enim, labore soluta!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat fuga earum obcaecati! Reiciendis, unde cupiditate nesciunt distinctio nulla molestias delectus, libero dolor ex mollitia ullam. Velit assumenda sit incidunt officiis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum nam ab debitis natus error maxime sit quis repellendus cum. Soluta perferendis impedit doloribus eligendi, nulla iste numquam natus blanditiis!</p>`)
      $('#modal-info').modal('show')
    break

    case 'work': 
      $('.modal-title').append('Trabalhos')
      $('.modal-body').append(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus accusantium quas iste nihil in rem nemo delectus nesciunt, eos soluta laudantium deserunt numquam, autem consequatur pariatur id nostrum dolore.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ipsum, blanditiis omnis quis nam eveniet corporis laudantium recusandae natus repudiandae voluptatum! Magnam sit quo ullam quisquam nulla enim, labore soluta!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat fuga earum obcaecati! Reiciendis, unde cupiditate nesciunt distinctio nulla molestias delectus, libero dolor ex mollitia ullam. Velit assumenda sit incidunt officiis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum nam ab debitis natus error maxime sit quis repellendus cum. Soluta perferendis impedit doloribus eligendi, nulla iste numquam natus blanditiis!</p>`)
      $('#modal-info').modal('show')
    break

    case 'client': 
      $('.modal-title').append('Cooperadores')
      $('.modal-body').append(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus accusantium quas iste nihil in rem nemo delectus nesciunt, eos soluta laudantium deserunt numquam, autem consequatur pariatur id nostrum dolore.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ipsum, blanditiis omnis quis nam eveniet corporis laudantium recusandae natus repudiandae voluptatum! Magnam sit quo ullam quisquam nulla enim, labore soluta!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat fuga earum obcaecati! Reiciendis, unde cupiditate nesciunt distinctio nulla molestias delectus, libero dolor ex mollitia ullam. Velit assumenda sit incidunt officiis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum nam ab debitis natus error maxime sit quis repellendus cum. Soluta perferendis impedit doloribus eligendi, nulla iste numquam natus blanditiis!</p>`)
      $('#modal-info').modal('show')
    break

    case 'contact': 
      $('.modal-title').append('Contato')
      $('.modal-body').append(`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus accusantium quas iste nihil in rem nemo delectus nesciunt, eos soluta laudantium deserunt numquam, autem consequatur pariatur id nostrum dolore.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ipsum, blanditiis omnis quis nam eveniet corporis laudantium recusandae natus repudiandae voluptatum! Magnam sit quo ullam quisquam nulla enim, labore soluta!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat fuga earum obcaecati! Reiciendis, unde cupiditate nesciunt distinctio nulla molestias delectus, libero dolor ex mollitia ullam. Velit assumenda sit incidunt officiis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum nam ab debitis natus error maxime sit quis repellendus cum. Soluta perferendis impedit doloribus eligendi, nulla iste numquam natus blanditiis!</p>`)
      $('#modal-info').modal('show')
    break

    default:
    alert('Link invalido')
    }
    
  })
})