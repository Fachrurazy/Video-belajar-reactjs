import Card from "../Elements/Card/Cardfix"
import UseProducts from "../../Data/Products/Products"

const formcard = () => {

    const products = UseProducts((state) => state.products)
    console.log(products)
    return (
        <>
        {products.map((product) => (
            <Card
            key = {product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            name={product.name}
            role={product.role}
            company={product.company}
            avatar={product.avatar}
            image={product.image}
            rating={product.rating}
            price={product.price}
            />
        ))}
        </>
    )
}

export default formcard