const getFetchApiGifs = async( category ) => {
    //Llamada a Api
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kzRlGjDQI7UFWUtjyLlKqI5jVEVfXpdf&q=${encodeURI(category)}&limit=10`;
    const respuesta = await fetch( url );                                     //encodeURI, remplaza espacios por +, se usa para url
    const {data} = await respuesta.json();
    const gifs = data.map( gif => { //extraemos solo los datos que necesitamos
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs;
}

export {getFetchApiGifs};