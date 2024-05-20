import React from "react";

const BtnCta = (props) => {
    const btnContent = props.btnContent || "Call to action!";

    return(
        <a href="#" className="btn btn-primary">{btnContent}</a>
    )
}

export default BtnCta;