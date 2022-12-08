import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutProject from "./pages/AboutProject"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

   /* const addFeedback = (newFeedback) => {
        newFeedback.id = Math.ceil(Math.random() * 800)
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    } */

   /* const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to remove this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    } */

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm /*handleAdd={addFeedback}*//>
                                <FeedbackStats /*feedback={feedback}*//>
                                <FeedbackList /*feedback={feedback} handleDelete={deleteFeedback}*//>
                            </>
                        }
                        ></Route>

                        <Route path="/about" element={<AboutProject/>}/>
                    </Routes>

                    <AboutIconLink/>
                </div>
            </BrowserRouter>
        </FeedbackProvider>
        )
}


export default App