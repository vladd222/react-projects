import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is coming from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is coming from context 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This item is coming from context 3',
            rating: 6
        },
        {
            id: 4,
            text: 'This item is coming from context 4',
            rating: 4
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add a new entry (new feedback)
    const addFeedback = (newFeedback) => {
        newFeedback.id = Math.ceil(Math.random() * 800)
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    // Remove a specific feedback entry
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to remove this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Sets the item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Updates the feedback on selected item
    const updateFeedback = (id, updtItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {
            ...item, ...updtItem } : item))
        )
      }


    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext