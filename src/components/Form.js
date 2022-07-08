const Form = ({ AddItem, ZDateInput, setZDateInput, ZTitleInput, setZTitleInput, ZDescriptionInput, setZDescriptionInput})=> {
   
  return (
    <form onSubmit={AddItem}>
        <label>
        &nbsp;&nbsp;  Date:&nbsp;&nbsp;&nbsp;
        <input type="text" id="Date" value={ZDateInput} onChange={(ZItem) =>setZDateInput(ZItem.target.value)} />
        </label>
        <label>
        &nbsp;&nbsp; Title:&nbsp;&nbsp;&nbsp;
        <input type="text" value={ZTitleInput} onChange={(ZItem) =>setZTitleInput(ZItem.target.value)} />
        </label>
        <label>
        &nbsp;&nbsp;  Description:&nbsp;&nbsp;&nbsp;
        <input type="text" value={ZDescriptionInput} onChange={(ZItem) =>setZDescriptionInput(ZItem.target.value)} />
        </label>&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Add Item"/>
    </form>
  )
}

export default Form