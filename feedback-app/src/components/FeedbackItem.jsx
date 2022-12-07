import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from "prop-types"
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext";

function ReviewItem({ item /*handleDelete*/ }) {
    const {deleteFeedback} = useContext(FeedbackContext)
    const{addFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}><FaTimes color="purple"/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem