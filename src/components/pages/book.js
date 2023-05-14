import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/manga/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Author: {product.author}</p>
            <p>Age rating: {product.age_rating}</p>
            <p>Category: {product.category}</p>
            <p>Language: {product.language}</p>
            <p>Release year: {product.release_year}</p>
            <p>
                Subscription status:{" "}
                {product.subscription_status ? "Subscribed" : "Not subscribed"}
            </p>
        </div>
    );
}

export default ProductPage;
