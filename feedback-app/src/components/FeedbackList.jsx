import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({/* feedback, handleDelete */}) {
    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return (<p>No feedback has been provided yet.</p>)
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} /*handleDelete={handleDelete}*//>
            ))}
        </div>
    )
}

/*FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
} */

export default FeedbackList