import Button from "react-bootstrap/Button";
import Rating from "@mui/material/Rating";

function BasicExample({ comment }) {


    return (

        <div className="comment-row">
            <div className="comment-content">
                <div className="comment-product-title">{comment.customerName}</div>
                <div className="comment-rating"><Rating
                    name="size-medium"
                    value={parseFloat(comment.rating)}
                    precision={0.5}
                    readOnly
                /></div>
                <div className="comment-text">
                    {comment.commentBody}
                </div>
            </div>
        </div>
    );
}

export default BasicExample;
