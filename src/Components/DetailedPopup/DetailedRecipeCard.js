import { useEffect, useState } from "react";
import popupStyles from "./DetailedRecipeCard.module.css";
import PropTypes from "prop-types";

// Leverages popup strategy from open source repo "practical-roentgen-oxzb4" by Link2Twenty on codesandbox.io
// https://codesandbox.io/s/practical-roentgen-oxzb4?from-embed=&file=/src/App.js:478-570

const DetailedRecipeCard = (props) => {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className={popupStyles.overlay}
        >
            <div className={popupStyles.popup}>
                <h2>{props.title}</h2>
                <button className={popupStyles.close} onClick={closeHandler}>
                    X
                </button>
                <div className={popupStyles.content}>{props.children}</div>
            </div>
        </div>
    );
};

DetailedRecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default DetailedRecipeCard;