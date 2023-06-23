# 📚 Create My Todo List
<br/>
<br/>

# 🚩 What to implement
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

# ⛏ Assignment guide
◈ Common
- TODOS data uses redux to globally manage state.
- The todos module is implemented with the Ducks pattern.

◈ Main Page
- The design and screen organization is up to you.
- Implement a status in Todo that separates the "Done" group from the "In Progress" group. They don't have to be above or below the example video, and you can get creative with your implementation.
- When we add a Todo, we implement the title input and content input to be empty again.
- Implement so that if you navigate to the detail page while the input has a value, the value of the input is initialized.
- Implement the status button to be labeled "Cancel" if the Todo's completion status is true, and "Complete" if false.
- Limit the full screen to a maximum width of 1200px and a minimum width of 800px, and center the content on the screen.
- Clicking View `details` takes you to the todo's detail page. What you should see on the detail page is covered in the toggles below.

◈ Detail Page
- Feel free to implement your own design and screen organization for the detail page, but the following elements must be visible.
  - Todo ID
  - Todo Title
  - Todo Content
  - Implement a `back button`, and when clicked, it will take you back to the list screen.

# 📁./src/components/
- `Header.jsx` 
- `Input.jsx`
- `ToDoList.jsx` 
- `Footer.jsx` 

# 🖥️ Layout

<img src="https://github.com/pigrok/LV2_TodoList/assets/129926477/d3b5db22-a330-46b8-bdac-8dc98d7306cc" width="2000"/>
<img src="https://github.com/pigrok/LV2_TodoList/assets/129926477/c6c69cab-22fb-475b-9fb4-84c488c3c432" width="2000"/>
