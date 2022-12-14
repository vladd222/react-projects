import {useState, useContext, useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelector  from "./RatingSelector"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm({ /*handleAdd*/ }) {
    const [feedbackText, setFeedbackText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [displayMessage, setDisplayMessage] = useState('')

    const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setFeedbackText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleFbChange = (e) => {
        if (feedbackText === '') {
            setBtnDisabled(true)
            setDisplayMessage(null)
        }
        else if (feedbackText !== '' && feedbackText.trim().length <= 10) {
            setBtnDisabled(true)
            setDisplayMessage("A minimum of 10 characters is required to submit your review.")
        }
        else {
          setBtnDisabled(false)
          setDisplayMessage(null)
        }

        setFeedbackText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (feedbackText.trim().length >= 10) {
            const newFeedback = {
                text: feedbackText,
                rating
            }

            if (feedbackEdit.edit == true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }

            setFeedbackText("")
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service at this excursion?</h2>
                <RatingSelector select={rating => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Please include your review." onChange={handleFbChange}
                     value={feedbackText}/>
                    <Button type="submit" isDisabled={btnDisabled}>Submit Feedback</Button>
                </div>

                {displayMessage && <div className="message">{displayMessage}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm