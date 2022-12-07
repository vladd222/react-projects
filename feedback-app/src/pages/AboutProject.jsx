import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>This is a very simple feedback app to demonstrate the useage of React JS</p>
                <p>The idea and implementation of this app was given by Brad Travery in his React course on Udemy. This may be
                used as a base for other applications done in React JS</p>
                <p><Link to="/">Go to Main</Link></p>
            </div>
        </Card>
    )
}

export default AboutPage