import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner"

function FeedbackList({/* feedback, handleDelete */}) {
    const {feedback, isLoading} = useContext(FeedbackContext)
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return (<p>No feedback has been provided yet.</p>)
    }

    return isLoading ?<Spinner/> : (<div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} /*handleDelete={handleDelete}*//>
        ))}
    </div>


   /* return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} /*handleDelete={handleDelete}*////>
    //        ))}
    //    </div>
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