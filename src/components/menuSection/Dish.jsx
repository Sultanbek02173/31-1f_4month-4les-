import { useEffect, useState } from "react";
import { Cart } from "../../features";
import './menu.scss';
import axios from 'axios';

export const Dish = () => {
    const [dishes, setDishes] = useState();
    const [catogory, setCategory] = useState('all');
    const [filtered, setFiltered] = useState()
    const filter = () => {

        const filterData = dishes.map
    }

    useEffect(() => {
        axios('http://localhost:5000/dishes')
        .then(({data}) => {setDishes(data)})
    }, [])
    
    return (
        <div className="container">
            <div className="navigate">
                <p>Все</p>
                <p>Завтрак</p>
                <p>1 блюдо</p>
                <p>2 блюдо</p>
                <p>Десерты</p>
                <p>Напитки</p>
            </div> 
            <div className="dishes">
                {
                    dishes && catogory === 'all' &&
                    dishes.map((dish) => (
                        <Cart key={dish.id} img={dish.img} text={dish.title} price={dish.price} />
                    ))
                }
            </div> 

            {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48527.5478257234!2d72.76679718137582!3d40.52011573402973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac017f5a2e85%3A0xe0a3c61dc6f47b95!2z0J7RiA!5e0!3m2!1sru!2skg!4v1744639699229!5m2!1sru!2skg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    
                </iframe> */}
        </div>
    );
}

