import { useState } from 'react';

const ZStoredItems = ({ ZDate, ZTitle, ZDescription, ZDelete, ZEdit }) => {
    const [Done, setDone] = useState(false); 
    return (
        <div>
        {Done ? (
            <h3 style={{ color: 'red' }}>
                Date:&nbsp;{ZDate}&nbsp;Title:&nbsp;{ZTitle}&nbsp;Description:&nbsp;{ZDescription}
                <button onClick={ZDelete}>Delete Item</button>
                </h3>
            ):( 
            <h3 style={{ color: 'green' }}>
                Date:&nbsp;{ZDate}&nbsp;Title:&nbsp;{ZTitle}&nbsp;Description:&nbsp;{ZDescription} 
                <button onClick={ZDelete}>Delete Item</button>
            </h3>
            )}
            <button onClick={() => setDone(!Done)}>{ Done ? 'Done' : 'Not Done' }</button>
        </div>
    )
}

export default ZStoredItems