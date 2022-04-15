import React , {useState} from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories , setCategories] = useState(['One Punch']);
   
    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            < hr/>
            <ol>
                {
                    categories.map( (category) => {
                        return(
                            <GifGrid 
                                key={category}
                                category={category}
                                />
                        )
                    })
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;