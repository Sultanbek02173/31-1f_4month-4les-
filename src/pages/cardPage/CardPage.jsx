import { useParams } from 'react-router-dom';
import './cardPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CardPage = () => {
    const { id } = useParams();
    const [dish, setDish] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/dishes/${id}`)
        .then(({data}) => {setDish(data)})
        .catch((error) => console.log(error))
    }, [id]);
    
    return (
        <div className='container'>
            {
                dish &&
                (
                    <div>
                        <div>
                            <img src={dish.img} alt="" />
                        </div>
                        <div>
                            <h2>{dish.title}</h2>
                            <p>{dish.price}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

