const ZStoredItems = ({ ZDate, ZTitle, ZDescription, ZDelete }) => {
    return (
        <div>
            <h2>
            Date:&nbsp;{ZDate}&nbsp;Title:&nbsp;{ZTitle}&nbsp;Description:&nbsp;{ZDescription}
            </h2>
            <button onClick={ZDelete}>Delete Item</button>
        </div>
    )
}

export default ZStoredItems