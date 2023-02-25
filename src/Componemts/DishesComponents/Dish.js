const Dish = ({dish}) => {
    return(
        <div>
            <img src={`./${dish.img}.jpg`}/>    
        <h2>{dish.name}</h2>  
        <p>$ {dish.price}</p>  
        {/*To fix later*/}
        <button>How many portion???</button>
        <button>Add to cart</button> 
        </div>
    )
}
export default Dish;