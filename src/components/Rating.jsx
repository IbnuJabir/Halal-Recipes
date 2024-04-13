import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rate = () => {
    const [rate, setRate] = useState(0);

    return (
        <>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <React.Fragment key={index}>
                        <input
                        className="star-radio"
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                setRate(givenRating);
                            }}
                        />
                        <FaStar
                        className="single-star"
                            key={index}
                            color={givenRating <= rate ? "gold" : "gray"}
                            onClick={() => {
                                setRate(givenRating);
                            }}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Rate;