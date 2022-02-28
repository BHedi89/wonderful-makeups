import React from "react";
import classes from "./StarRating.module.css";

const StarRating = (props) => {
    const [rating, setRating] = React.useState(props.ratingnum);
    const [hover, setHover] = React.useState(0);

    return (
       <div className={classes.starrating}>
           {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? classes.on : classes.off}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className={classes.star}>&#9733;</span>
                    </button>
               )
            })}
       </div>
    )
}

export default StarRating;