
export const guardarStorage = (pelicula) => {
  
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    if(Array.isArray(elementos)){
      elementos.push(pelicula);
    }else{
      elementos = [pelicula];
    }

    localStorage.setItem("pelis", JSON.stringify(elementos));

}
