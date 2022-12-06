import Card from "./shared/Card"
import PropTypes from "prop-types";

function ReviewItem({ item }) {

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

ReviewItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ReviewItem