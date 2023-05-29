const contenedor= document.getElementById('contenedor');

fetch('https://rickandmortyapi.com/api/character')
.then(response=>{
    if(!response.ok){
        throw new Error('Error en la solicitud de la API')
    }return response.json()})
.then(data=>{
    data.results.forEach(element => {

        const card=document.createElement('section');
        const contenedor_fotos=document.createElement('div');
        contenedor_fotos.className='contenedor_fotos'
        const fotos=document.createElement('img');
        fotos.src=element.image;
        contenedor_fotos.appendChild(fotos);

        card.appendChild(contenedor_fotos);
        card.className='card';
        contenedor.appendChild(card);
        
        const contenedor_datos=document.createElement('div');
        contenedor_datos.className= 'contenedor_datos';
        const datos_name= document.createElement('h4');
        const datos_gender=document.createElement('p');
        const datos_status=document.createElement('p');

        datos_name.textContent=element.name;
        datos_gender.textContent=element.gender;
        datos_status.textContent=element.status;

        contenedor_datos.appendChild(datos_name);
        contenedor_datos.appendChild(datos_gender);
        contenedor_datos.appendChild(datos_status);
    
        card.appendChild(contenedor_datos)
        contenedor.appendChild(card);
    });
}).catch(error=> {console.log(
'ah ocurrido un error. intentaremos solucionarlo',error)});
