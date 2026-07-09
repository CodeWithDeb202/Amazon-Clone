import { Link } from "react-router-dom";
import './Card.css';

function SqrCard({card}) {
    return (
        <>
            <div className="sqCard">
                <h1 style={{fontSize:'1.3rem', fontWeight:'bold'}}>{card.title}</h1>
                <div className="img_name_cont">
                    <div className="lineImgCont">
                        {card.products.slice(0, 2).map((product) => (
                            <div className="img_name">
                                <img src={`http://localhost:3000${product.image}`} alt={product.name || product._id} />
                                {product.name ? (
                                    <h5 style={{ margin: '0', fontSize:'0.8rem' }}>{product.name}</h5>
                                ) : ''}
                            </div>    
                        ))}
                    </div>

                    <div className="lineImgCont">
                        {card.products.slice(2, 4).map((product) => (
                            <div className="img_name">
                                <img src={`http://localhost:3000${product.image}`} alt={product.name || product._id} />
                                {product.name ? (
                                    <h5 style={{ margin: '0', fontSize:'0.8rem' }}>{product.name}</h5>
                                ) : ''}
                            </div>    
                        ))}
                    </div>
                </div>

                {card.linkText ? (
                    <Link to={'/'} style={{ textDecoration: 'none', fontSize:'0.8rem', marginTop:'1rem' }}>
                        {card.linkText}
                    </Link>
                ) : ''}
            </div>
        </>
    )
}

export default SqrCard;