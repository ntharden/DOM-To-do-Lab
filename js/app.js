const inpt = document.getElementById("user-input")
const btn = document.getElementById("submit-button")
const todoList = document.getElementById("todo-list")


btn.addEventListener("click", function(evt) {
  if (inpt.value === ''){
    alert('There is nothing to add in the text box.')
  } else {
    const li = document.createElement('li')
    li.textContent = inpt.value
    todoList.appendChild(li)
    inpt.value = ''
  }
})

