import { useEffect, useState } from "react";
import { Cart } from "../../features";
import './menu.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

export const Dish = () => {
    const [dishes, setDishes] = useState([]);
    const [catogory, setCategory] = useState('all');
    const [filtered, setFiltered] = useState();    

    const filter = () => {
        if(catogory === 'all'){
            setFiltered(dishes);
        }else{
            const filterData = dishes.filter((dish) => dish.type === catogory);
            setFiltered(filterData);
        }
    }

    useEffect(() => {
        filter();
    })

    useEffect(() => {
        axios('http://localhost:5000/dishes')
        .then(({data}) => {setDishes(data)})
    }, [])
    
    return (
        <div className="container">
            <div className="navigate">
                <p onClick={() => {setCategory('all')}}>Все</p>
                <p onClick={() => {setCategory('lanch')}}>Завтрак</p>
                <p onClick={() => {setCategory('firstDishes')}}>1 блюдо</p>
                <p onClick={() => {setCategory('secondDishes')}}>2 блюдо</p>
                <p onClick={() => {setCategory('desert')}}>Десерты</p>
                <p onClick={() => {setCategory('drinks')}}>Напитки</p>
            </div> 
            <div className="dishes">
                {
                    filtered &&
                    filtered.map((dish) => (
                        <Link to={`/card-page/${dish.id}`}>
                            <Cart 
                                key={dish.id} 
                                img={dish.img} 
                                text={dish.title} 
                                price={dish.price} />
                        </Link>
                    ))
                }
            </div> 

            {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48527.5478257234!2d72.76679718137582!3d40.52011573402973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac017f5a2e85%3A0xe0a3c61dc6f47b95!2z0J7RiA!5e0!3m2!1sru!2skg!4v1744639699229!5m2!1sru!2skg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    
                </iframe> */}
        </div>
    );
}

