function FoodListItem(props) {
    return (
        <div>
            {props.food.haveTried && <h1>Delicious</h1>}
            <h2>
                {props.food.mealItem}
                {(props.food.rating > 0) ? ` | Rating:${props.food.rating}/5` : ' | : No Rating'}
            </h2>
            <p>{props.food.description}</p>
            <img src={props.food.image} height={280} alt={props.food.title}></img>
        </div>
    )
}
export default FoodListItem