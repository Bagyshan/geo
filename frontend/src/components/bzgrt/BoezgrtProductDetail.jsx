import React, {useEffect} from 'react';
import productimg from '../../assets/boezgrtproduct.jpg';
import './BoezgrtProductDetail.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearBoezgrtProduct, getBoezgrtProduct} from "../../store/apiSlice";



const BoezgrtProductDetail = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const {boezgrtProduct} = useSelector((state) => state.api)
    useEffect(() => {
        dispatch(getBoezgrtProduct(productId))
        return() =>{
            dispatch(clearBoezgrtProduct())
        }
    }, [dispatch,productId]);
    return (
        <div className="product-detail-card">
            <div className="container-product">
                <img src={boezgrtProduct?.image} alt='' className="product-detail-image" />
                <div className="product-detail-info">
                    <h1 className="product-detail-title">{boezgrtProduct?.title}</h1>
                    <p className="product-detail-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui voluptatum quasi consectetur velit possimus fuga magnam rerum eius corporis odio vero enim assumenda necessitatibus aperiam sunt officia similique! Esse, exercitationem autem beatae mollitia molestias officia totam modi laborum libero alias laboriosam deleniti pariatur rem aliquid. Incidunt dolore minima libero.</p>
                    <div className="product-detail-price">{boezgrtProduct?.price}</div>
                    {/*<button className="buy-button">Купить</button>*/}
                </div>
            </div>
        </div>
    );
};


export default BoezgrtProductDetail;
