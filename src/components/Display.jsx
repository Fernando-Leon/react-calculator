import React from "react";

function Display( { valueDisplay } ) {
    return(
        <div className="display">
            <div className="value-display">
                {valueDisplay}
            </div>
        </div>
    );
}

export default Display;