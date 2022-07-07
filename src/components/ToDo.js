import { useState } from 'react'
// import './App.css'
// import Form from './components/Form'
// import ZStoredItems from './components/StoredToDo'
import Form from './Form'
import ZStoredItems from './StoredToDo'

// Items are ZSomething to prevent already called names to prevent syntax confusion (I spent 1 hour trying to find a problem where I unknowlingly called something a name when it was already a called method within javascript which led to a strange conflict... it didn't tell me there was a problem, but there was no output whatsoever because it was doing what it was expected to do, just not what I wanted it to do)

// ToDoList
// (Overall app)
// ZItem
// (The page or document element)
// ZItems
// (Item array)
// ZsetStoredItems
// (Stored item array)

// ZDate
// Date that you put the item in
// ZDateInput
// The input textbox value
// setZDateInput
// Resetting the input textbox value

// ZTitle
// ZTitleInput
// setZTitleInput

// ZDescription
// ZDescriptionInput
// setZDescriptionInput

// AddItem
// This adds a new item to the list

// ZDelete
// Deletes an item

// Zindex
// This counts the index in the array, used to delete

// Form
// The page loads from the form first

// ZStoredItems
// Stored list

function ToDoList() {
  const [ZItems, ZsetStoredItems] = useState([])
  const [ZDateInput, setZDateInput] = useState('')
  const [ZTitleInput, setZTitleInput] = useState('')
  const [ZDescriptionInput, setZDescriptionInput] = useState('')

  const AddItem = (ZItem) => {
    // Add an item to the list
    ZItem.preventDefault()
    // Prevent page from reloading
    ZsetStoredItems([...ZItems,{ZDate: ZDateInput,ZTitle: ZTitleInput, ZDescription: ZDescriptionInput,}])
    setZDateInput('')
    setZTitleInput('')
    setZDescriptionInput('')
  }

  const ZDelete = (Zindex) => {
    // Delete an item by splicing
    let ZDeleteStoredItems = [...ZItems]
    ZDeleteStoredItems.splice(Zindex, 1)
    ZsetStoredItems(ZDeleteStoredItems)
  }

  return (
    <div className="ToDoList">
      <h1>&nbsp;&nbsp;To Do List</h1>
          <Form
              ZDateInput={ZDateInput} 
              setZDateInput={setZDateInput} 
              ZTitleInput={ZTitleInput} 
              setZTitleInput={setZTitleInput} 
              ZDescriptionInput={ZDescriptionInput} 
              setZDescriptionInput={setZDescriptionInput} 
              AddItem={AddItem}
            />

          {ZItems.map((ZStoredItems, Zindex) => {
            return (
            <ZStoredItems
              ZDate={ZStoredItems.ZDate} 
              ZTitle={ZStoredItems.ZTitle} 
              ZDescription={ZStoredItems.ZDescription}
              // Stores the inputed names into the StoredToDo list and outputs them
              key={ Zindex } 
              ZDelete={() => ZDelete(Zindex)}
            />
            )})}
            
      </div>
  )
}

// const newTodo = {
//   id: new Date().getTime(),
//   text: todo,
// }

export default ToDoList