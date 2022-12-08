import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback data from backend (mock json file)
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
        const data = await response.json()
        console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

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
            isLoading,
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