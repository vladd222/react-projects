import {useState} from "react";
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelector  from "./RatingSelector";

function FeedbackForm({ handleAdd }) {
    const [feedbackText, setFeedbackText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [displayMessage, setDisplayMessage] = useState('')

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

            handleAdd(newFeedback);
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