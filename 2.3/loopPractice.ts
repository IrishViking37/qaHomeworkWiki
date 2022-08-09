var todos: Array<string> = [
    "Wash the car",
    "Get groceries",
    "Go to the gym",
    "eat dinner",
]

// For loops, first have a declaring variable then a statement to check and then an increment or decriment to the variable
// In this loop, we will start at 0 with i, stands for index, and this will loop as long as there are items in the index array
for(let i = 0; i < todos.length; i++) {
        console.log(`Todo #${i + 1}: ${todos[i]}!`)
}

todos.forEach((todo) => {
    console.log(`You still need to ${todo}!`)

})
    
