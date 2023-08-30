import foodListData from '../../Data/food.json'
import FoodListItem from '../ListItem/ListItem.js'

function FoodList() {
    return (
        foodListData.meals.map(meal => {
            return(
                <FoodListItem food={meal} />
            )
        })
    )
}
export default FoodList