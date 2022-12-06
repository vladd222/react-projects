import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from "prop-types";

function ReviewItem({ item, handleDelete }) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}><FaTimes color="purple"/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem