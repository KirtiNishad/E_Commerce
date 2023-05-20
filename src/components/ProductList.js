import '../App.css';

function ProductList({ product, addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className='item' style={{ width: '50% ' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category}</p>
                                <p>{productItem.seller}</p>
                                <p>Rs. {productItem.price}/-</p>

                                <div className='button'>
                                    <button >Buy</button>
                                    <button
                                        onClick={() => addToCart(productItem)}
                                    > Add to Cart </button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;