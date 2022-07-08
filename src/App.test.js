import { fireEvent, getAllByDisplayValue, getByDisplayValue, getByRole, render, screen } from '@testing-library/react';
import ToDoList from './components/ToDo';
import Form from './components/Form';
import ZStoredItems from './components/StoredToDo';


test("render at least 2 button", () => {
render(< ZStoredItems/>)
let buttons = screen.getAllByRole("button")
  expect(buttons.length).toBe(2)
})

test("Form contains the word Title", () => {
  render(< Form/>)
let FindText = screen.getByText(/Title/i)
expect(FindText).toBeInTheDocument()
})

test("Make sure the Add Item button renders in the ToDo List with the correct name by finding it", () => {
  render(< ToDoList/>)
  let AddButton = screen.getByDisplayValue('Add Item');
})


test("Make sure the input htmls have corrisponding IDs ", () => {
  render(< Form/>)
  let Date = screen.findByTestId("Date")
  let Title = screen.findByTestId("Title")
  let Description = screen.findByTestId("Description")
})

test("Make sure that Delete is not displayed when you first open document", () => {
  render(< ToDoList/>)
    expect(screen.getByDisplayValue).not.toBe("Delete")
})

test("Clicking the Marked button, changing from green to red, seeing if it changes", () => {
  render(< ZStoredItems/>)
  let Marked = document.getElementById("Marked");
  let GreenHeading = document.getElementById("GreenHeading");
  fireEvent.click(Marked)
if (GreenHeading != null){
  // If the greenheading has gone because it's changed to the red heading
  console.log("Green heading not present")
  let RedHeading = document.getElementById("RedHeading");
  if (RedHeading =! null){
    console.log("Red heading is present")
} 
else {console.log("Red heading is not present") }
}
})









// test("Deletes the words Title, Date and Description", () => {
//   render(< ZStoredItems/>)
//   let Date = screen.getByText(/Date/i)
//   let Title = screen.getByText(/Title/i)
//   let Description = screen.getByText(/Description/i)

//   fireEvent.select(Date,Title,Description)


// if (GreenHeading != null){
//   // If the greenheading has gone because it's changed to the red heading
//   console.log("Green heading not present")
//   let RedHeading = document.getElementById("RedHeading");
//   if (RedHeading =! null){
//     console.log("Red heading is present")
// } 
// else {console.log("Red heading is not present") }
// }
// })



  // fireEvent.click(todoDeleteButton);
  // let MarkedButton = screen.getAllByDisplayValue('Not Done');
  // fireEvent.click(screen.getAllByDisplayValue('Not Done'))


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("", () => {
//   render(< ToDoList/>)
//   let Submit = document

//   // let MarkedButton = screen.getAllByDisplayValue('Not Done');
//   // fireEvent.click(screen.getAllByDisplayValue('Not Done'))
//   let Marked = document.getElementById("Marked");
//   let GreenHeading = document.getElementById("GreenHeading");
//   fireEvent.click(Marked)
// if (GreenHeading != null){
//   // If the greenheading has gone because it's changed to the red heading
//   console.log("Green heading not present")
//   let RedHeading = document.getElementById("RedHeading");
//   if (RedHeading =! null){
//     console.log("Red heading is present")
// } 
// else {console.log("Red heading is not present") }
// }
// })







// it('populates the students list when the points field is modified', () => {
//   const {
//     getByText,
//     getByTestId,
//     queryByText,
//     getByPlaceholderText
//   } = renderMessageStudentsWhoDialog(
//     partialSubAssignment({
//       needsGradingCount: 0,
//       submissions: {
//         nodes: variedSubmissionTypes()
//       }
//     })
//   )
//   fireEvent.click(getByTestId('filter-students'))
//   fireEvent.click(getByText('Scored less than'))
//   const pointsInput = getByPlaceholderText('Points')
//   fireEvent.click(pointsInput)
//   fireEvent.change(pointsInput, {target: {value: '3'}})
//   expect(queryByText('Second Student')).toBeFalsy()
//   expect(getByText('First Student')).toBeInTheDocument()
//   fireEvent.change(pointsInput, {target: {value: '4.5'}})
//   expect(queryByText('Second Student')).toBeInTheDocument()
//   expect(getByText('First Student')).toBeInTheDocument()
// })

  // fireEvent.click(todoDeleteButton);



// test("Make sure the Add Item button renders in the ToDo List with the correct name", () => {
//   render(< Form/>)
//   // const AddButton = screen.getAllByDisplayValue('Add Item');
//   fireEvent.change("", { target: { value: 'Feed my dog.' } });
//   fireEvent.click(AddItem);
//   // fireEvent.click(todoDeleteButton);
// })

// test("Make sure the Add Item button renders in the ToDo List", () => {
//   render(< ToDoList/>)
//   const AddButton = screen.getByDisplayValue('Add Item');
//   // fireEvent.click(todoDeleteButton);
// })


// test("Colour change when button clicked", () => {
//   // render(< StoredToDo/>)
//   // let backcolour = "green"
// fireEvent.click()

// })

// test("something", () => {
//   render(< ZStoredItems/>)
//   // let ChangedColor = screen.getByTestId("Marked")
//   // fireEvent.change(ChangedColor, {target: { value: "Not Done"}})
//   // expect(ChangedColor.value).toBe("Not Done")
//   let ChangedColor = screen.findAllByDisplayValue("Marked")

//   fireEvent.click(getByRole("button"))
// })



// test("When you press submit, make sure the delete button is rendered", () => {
//   render(< ToDoList/>) & (< Form/>)
//   let FindText = "Delete"
//   fireEvent.ToDoList()
//   expect(FindText).toBeInTheDocument()

// }) 



//   const myMock1 = jest.fn();
// const a = new myMock1();
// console.log(myMock1.mock.instances);
// // > [ <a> ]



// test("items in a array with 6 or more characters",() => {
//   render(< Form/>)
// // let TestArray = ["something", "red", "somethingelse"]
// expect(ZDateInput.value) = ""
// })

  // let buttons = screen.getAllByRole("input")
  // expect(input.length).toBe(4)
// expect(functions.checker(array)).toEqual(["something", "somethingelse"])
// AddItem, ZDateInput, setZDateInput, ZTitleInput, setZTitleInput, ZDescriptionInput, setZDescriptionInput



// test("renders 4 buttons", () => {
//   render(<App />)
//   let buttons = screen.getAllByRole("button")
//   expect(buttons.length).toBe(4)
//   })
  
  
//   test("renders 4 buttons", () => {
//     render(<App />)
//     let buttons = screen.getAllByRole("button")
//     expect(buttons[4]).toBeInTheDocument()
//     })


// test("notnull should not be null", ( ) => {
//   expect(notnull).not.toBe(null)
// })

// test("Notnull is truthy", ( ) => {
//   expect(notnull).not.toBe(false || 0 || null || undefined || NaN || "" || BigInt)
  // If a value is any one of these:
  // false
  // 0
  // 0n: 0 as a BigInt
  // '': Empty string
  // null
  // undefined
  // NaN
  // Then its considered 'falsy' and not 'truthy'
  //Techincally speaking, any value considered truthy is not falsy, so to prove either is to prove just one
// })

// test("zero should be considered falsey", ( ) => {
//   expect(zero).toBe(0)
// })

// test("create object with 2 properties",()=>{
//   expect(functions.createObj("Tommy")).toEqual({firstname: "Tommy", truefalse: true})
// })

// test("items in a array with 6 or more characters",() => {
// let array = ["something", "red", "somethingelse"]
// expect(functions.checker(array)).toEqual(["something", "somethingelse"])
// })



// import * as React from 'react';
// import { render, fireEvent, cleanup } from 'react-testing-library';
// import TodoList from '../TodoList';

// // HACK TO MAKE CODESANDBOX WORK
// import expect from 'expect';
// global.expect = expect;
// require('jest-dom/extend-expect');

// // HACK TO MAKE CODESANDBOX CLEANUP WORK RIGHT...
// // I PROMISE IT ISNT THIS HACKY IN LOCAL DEVELOPMENT USE...
// afterEach(() => {
//   const deleteButtons = Array.from(document.querySelectorAll('.todo button'));
//   deleteButtons.forEach(button => button.click());
//   cleanup();
// });

// // test0: Make sure the output has the correct important
// // DOM nodes and the correct values.
// test('renders the correct initial DOM', () => {
//   const doc = render(<TodoList />);

//   const inputElement = doc.getByTestId('input');
//   const todoCountElement = doc.getByTestId('todoCount');
//   const todos = doc.queryAllByTestId('todo');

//   // The text should show "0 todos"
//   expect(todoCountElement).toHaveTextContent('0 todos');

//   // The input should be blank.
//   expect(inputElement.getAttribute('value')).toBe('');

//   // There should be 0 todos in the document.
//   expect(todos.length).toBe(0);
// });

// // test1: Make sure it creates a todo when a user types
// // something in the input and clicks the create button.
// test('it creates a new todo', () => {
//   const doc = render(<TodoList />);

//   const inputElement = doc.getByTestId('input');
//   const createButtonElement = doc.getByTestId('createButton');
//   const todoCountElement = doc.getByTestId('todoCount');

//   // Create the todo.
//   fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } });
//   fireEvent.click(createButtonElement);

//   const todos = doc.getAllByTestId('todo');
//   const todo = doc.getByTestId('todo');
//   const todoNameElement = todo.firstChild;

//   // The name should be in the document as "Feed my dog."
//   expect(todoNameElement.textContent).toBe('Feed my dog.');

//   // The text should show "1 todos"
//   expect(todoCountElement).toHaveTextContent('1 todos');

//   // The input field should be blank.
//   expect(inputElement.value).toBe('');

//   // The todo should be in the document.
//   expect(todo).toBeInTheDocument();

//   // There should be 1 todo in the document.
//   expect(todos.length).toBe(1);
// });

// // test2: Make sure that after creating a todo, if the
// // user clicks the delete button, a todo goes away.
// test('it deletes a todo', () => {
//   const doc = render(<TodoList />);

//   const inputElement = doc.getByTestId('input');
//   const createButtonElement = doc.getByTestId('createButton');
//   const todoCountElement = doc.getByTestId('todoCount');

//   // Create the todo.
//   fireEvent.change(inputElement, { target: { value: 'Feed my cat.' } });
//   fireEvent.click(createButtonElement);

//   // Get the newly created todo.
//   const todo = doc.queryByTestId('todo');

//   // Click the delete button on the todo.
//   const todoDeleteButton = doc.getByTestId('deleteButton');
//   fireEvent.click(todoDeleteButton);

//   // queryByTestId / queryAllByTestId is for when you don't
//   // think there will be any matches for the query. Whereas
//   // getByTestId / getAllByTestId throws an error if there
//   // are no matched elements, query* does not.
//   const todos = doc.queryAllByTestId('todo');

//   // The text should be "0 todos"
//   expect(todoCountElement).toHaveTextContent('0 todos');

//   // The todo we created should not be in the document.
//   expect(todo).not.toBeInTheDocument();

//   // There should be 0 todos found in the document.
//   expect(todos.length).toBe(0);
// });


// test1: Make sure it creates a todo when a user types
// something in the input and clicks the create button.
// test('it creates a new todo', () => {
//   const doc = render(<TodoList />);

//   const inputElement = doc.getByTestId('input');
//   const createButtonElement = doc.getByTestId('createButton');
//   const todoCountElement = doc.getByTestId('todoCount');

//   // Create the todo.
//   fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } });
//   fireEvent.click(createButtonElement);

//   const todos = doc.getAllByTestId('todo');
//   const todo = doc.getByTestId('todo');
//   const todoNameElement = todo.firstChild;

//   // The name should be in the document as "Feed my dog."
//   expect(todoNameElement.textContent).toBe('Feed my dog.');

//   // The text should show "1 todos"
//   expect(todoCountElement).toHaveTextContent('1 todos');

//   // The input field should be blank.
//   expect(inputElement.value).toBe('');

//   // The todo should be in the document.
//   expect(todo).toBeInTheDocument();

//   // There should be 1 todo in the document.
//   expect(todos.length).toBe(1);
// });