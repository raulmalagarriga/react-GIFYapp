import { useEffect, useState } from "react";
import {getFetchApiGifs } from '../helpers/getFetchApiGifs';


const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        //getGifs es una promesa que nos va a regresar los Gifs con el titulo , url e id.
        //Lo que nos retorna la promesa se lo asignamos al estado y le cambiamos el loading por false 
        //Ya que ya tenemos datos, ya no debemos seguir mostrando el 'cargando'
        getFetchApiGifs(category)
            .then( imgs => 
                setstate( 
                    {
                        data: imgs,
                        loading: false
                    }
                ));

    }, [ category ])

    return state;
}

export {useFetchGifs};