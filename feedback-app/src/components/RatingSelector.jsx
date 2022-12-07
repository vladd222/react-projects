import {useState, useContext, useEffect} from "react"
import FeedbackContext from "../context/FeedbackContext"

function RatingSelector({ select }) {
    const [selectedRating, setSelectedRating] = useState(8)

    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        setSelectedRating(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelectedRating(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className="rating">
            <li>
                <input type="radio" id="rate1" name="rating" value="1" onChange={handleChange} checked={selectedRating === 1}/>
                <label htmlFor="rate1">1</label>
            </li>
            <li>
                <input type="radio" id="rate2" name="rating" value="2" onChange={handleChange} checked={selectedRating === 2}/>
                <label htmlFor="rate2">2</label>
            </li>
            <li>
                <input type="radio" id="rate3" name="rating" value="3" onChange={handleChange} checked={selectedRating === 3}/>
                <label htmlFor="rate3">3</label>
            </li>
            <li>
                <input type="radio" id="rate4" name="rating" value="4" onChange={handleChange} checked={selectedRating === 4}/>
                <label htmlFor="rate4">4</label>
            </li>
            <li>
                <input type="radio" id="rate5" name="rating" value="5" onChange={handleChange} checked={selectedRating === 5}/>
                <label htmlFor="rate5">5</label>
            </li>
            <li>
                <input type="radio" id="rate6" name="rating" value="6" onChange={handleChange} checked={selectedRating === 6}/>
                <label htmlFor="rate6">6</label>
            </li>
            <li>
                <input type="radio" id="rate7" name="rating" value="7" onChange={handleChange} checked={selectedRating === 7}/>
                <label htmlFor="rate7">7</label>
            </li>
            <li>
                <input type="radio" id="rate8" name="rating" value="8" onChange={handleChange} checked={selectedRating === 8}/>
                <label htmlFor="rate8">8</label>
            </li>
            <li>
                <input type="radio" id="rate9" name="rating" value="9" onChange={handleChange} checked={selectedRating === 9}/>
                <label htmlFor="rate9">9</label>
            </li>
            <li>
                <input type="radio" id="rate10" name="rating" value="10" onChange={handleChange} checked={selectedRating === 10}/>
                <label htmlFor="rate10">10</label>
            </li>
        </ul>
    )

}

export default RatingSelector