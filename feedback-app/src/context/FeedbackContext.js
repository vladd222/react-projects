import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is coming from context',
            rating: 10
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = Math.ceil(Math.random() * 800)
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to remove this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext