/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const TestCollapse = (props) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button className="toggle" onClick={toggle}>
                {props.label}
            </button>
            <div
                className="content-parent"
                ref={contentRef}
                style={
                    open
                        ? { height: contentRef.current.scrollHeight + "px" }
                        : { height: "0px" }
                }
            >
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};

export default TestCollapse;
