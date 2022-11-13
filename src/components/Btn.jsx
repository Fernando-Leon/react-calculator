import React from "react";

function Btn( { singValue, classBtn, btnDelete } ) {
    return(
        <div className="btn-cotainer" >
            <div className={`btn-cotainer ${classBtn ? "btn-1" : 'btn-2'} ${btnDelete ? 'delete' : 'none'}`}>
                {singValue}
            </div>
        </div>
    );
}

export default Btn;