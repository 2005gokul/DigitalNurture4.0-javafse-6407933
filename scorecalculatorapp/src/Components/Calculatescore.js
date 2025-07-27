import React from 'react';
import '../stylesheets/mystyle.css';

function Calculatescore(){
    const name = "GOKUL T";
    const school = "Aim Matric Hr.Sec School";
    const total = 480;
    const goal = 600;
    const average = (total/goal)*100;

    return(
        <div>
            <h1>Student score details</h1>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>school</strong>{school}</p>
            <p><strong>Total score:</strong>{total}</p>
            <p><strong>Goal score</strong>{goal}</p>
            <p><strong>Average:</strong>{average}</p>
        </div>
    )
}
export default Calculatescore;