import './cart.scss';

export const Cart = ({img, text, price}) => {
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>{text}</p>
            <div className='order'>
                <h3>{price}</h3>
                <button>В корзину</button>
            </div>
        </div>
    );
}

