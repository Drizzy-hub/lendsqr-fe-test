import React from "react";
type btn = {
    btnClassName?: string,
    children: React.ReactNode,
    handleClick: (event: React.MouseEvent) => void
}
function Button(props: btn) {
    const { btnClassName, handleClick, children } = props;
    return (
        <button
            data-testid="btn-component"
            className={`btn ${btnClassName ? btnClassName : ""}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
export default Button