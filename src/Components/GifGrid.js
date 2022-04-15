import React  from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    //Renombramos data a images para que confunda menos , data es quien nos trae la info de los Gifs
   const { data : images , loading} = useFetchGifs(category);//le pasamos la categoria a la funcion
       
    //En GifGridItem se le esta pasando ...image , con esto le estamos enviando el id , title y url extraido 
    return ( 
        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='cardGrid'>
                <ol>
                    { images.map( image => {
                        return (
                            <GifGridItem 
                                key={image.id}
                                {...image}
                            />
                        )
                    }) }
                </ol>
            </div>
        </>
     );
}
 
export default GifGrid;