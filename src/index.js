// function createHtmlElement(type, id, arrayClasses, content){
//     const element = document.createElement(type);
//     if (id) element.id = id; 
//     if (arrayClasses) arrayClasses.forEach((myClass)=> element.classList.add(myClass))
//     if (content) element.innerText = content; 
//     return element; 
// }

// const body = document.querySelector('body')
// const content = document.getElementById('content')
// const mainDiv = document.querySelector('.main-body .top')
// const main = document.querySelector('main-body')
// const task = document.querySelector('.task-filler')
// const button = document.querySelector('.addBtn')
// const filler = document.querySelector('.task-filler')

// button.addEventListener('click', ()=>{
//     mainDiv.removeChild(button)
//     filler.classList.add('active-task')
//     task.appendChild(createHtmlElement('input',null,['input-1'],null)) 
//     task.appendChild(createHtmlElement('input',null,['input-2'],null))   
//     content.appendChild(createHtmlElement('button',null,['btn', 'btn-primary', 'addBtn'],'add'))  
//     content.appendChild(createHtmlElement('button',null,['btn', 'btn-primary', 'cancelBtn'],'cancel'))
//     const cancelBtn = document.querySelector('.cancelBtn')
    
//     const input1 = document.querySelector('.input-1')
//     const input2 = document.querySelector('.input-2')
//     input1.setAttribute('placeholder', 'e.g. Design Meeting at 11')
//     input2.setAttribute('placeholder', 'Description')
//     cancelBtn.addEventListener('click', ()=>{
//         filler.classList.remove('active-task')
//         content.removeChild(cancelBtn)
//         content.removeChild(addBtn)
//         task.removeChild(input1)
//         task.removeChild(input2)
//         mainDiv.appendChild(button)
//     })
    
//     const addBtn = document.querySelector('.addBtn')
//     const list = document.querySelector('.list ul')
//     addBtn.addEventListener('click', ()=>{
//         list.innerHTML += `<li>${input1.value} - ${input2.value}</li>`
//         createHtmlElement('button',null,null,'add')
//         input1.value = ''
//         input2.value = ''
//     })
// })


// version 2
// import { formatDistance, subDays } from 'date-fns'

// // Query
// const addTaskBtn = document.querySelector('.addTaskBtn')
// const body = document.querySelector('body')

// // Event Listeners
// addTaskBtn.addEventListener('click', displayInput)
// body.addEventListener('click', removeInput)
// body.addEventListener('click', addToDoList)
// body.addEventListener('click', removeTask)

// // Functions 
// function displayInput(e){
    
//     // add input
//     const inputDiv = document.createElement('div')
//     inputDiv.classList.add('input-div')
    
//     const input = document.createElement('input')
//     input.classList.add('input')
//     inputDiv.appendChild(input)

//     const addBtn = document.createElement('button')
//     inputDiv.appendChild(addBtn)
//     addBtn.innerHTML = 'Add'
//     addBtn.classList.add('addBtn')
    
//     const cancelBtn = document.createElement('button')
//     cancelBtn.innerHTML = 'Cancel'
//     cancelBtn.classList.add('cancelBtn')
//     inputDiv.appendChild(cancelBtn)
//     e.target.parentNode.appendChild(inputDiv)
    
//     // remove add task 
//     addTaskBtn.classList.add('displayoff')

// }

// function removeInput(e){
//     const inputDiv = document.querySelector('.input-div')
//      if(e.target.className === 'cancelBtn'){
//         inputDiv.remove()
//         addTaskBtn.classList.remove('displayoff')
//      }
//   }

// let myToDos = []

// class Todo {
//     constructor(task, dueDate) {
//         this.task = task
//         this.dueDate = dueDate; 
//     }
// }
     
// function addToDoList(e){
//     const userDisplay = document.querySelector('.userDisplay')
//     if(e.target.className === 'addBtn'){
//         let inputValue = document.querySelector('.input').value
//         // let dateValue = document.querySelector('#due-date').value
//         let newTask = new Todo(inputValue, new Date())
        
//         myToDos.push(newTask)
//         console.log(myToDos)
//         let toDoItem = document.createElement('div')
//         toDoItem.classList.add('toDoItem')
//         toDoItem.innerHTML = `
//             <button class="completed"><i class="far fa-circle"></i></button>
//             <h2 class="toDoText">${myToDos[myToDos.length-1].task} </h2>
//             <input type='date' id='due-date' name='due-date'>
//             <button class="delete"><i class="fas fa-times cross"></i></button>
//             `
//         inputValue = ''    
//         userDisplay.appendChild(toDoItem) 
        

// const date = document.querySelector('input[type="date"]')
// date.addEventListener('change', runEvent)
// function runEvent(e){
//     console.log(e.type.value)
// }

//         }
// }

// function removeTask(e){
//     if(e.target.className === 'fas fa-times cross' || e.target.className === 'far fa-circle'){
//         e.target.parentNode.parentNode.remove()
//     }
// }

// Item Controller

const ItemCtrl = (function(){

    class Todo {
        constructor(task, dueDate) {
            this.task = task
            this.dueDate = dueDate; 
        }
    }
    
    const data = {
        items: [{task: 'hello', dueDate:''}, 
        {task: 'hello', dueDate:''}
        ], 
        currentItem: null,  
    }

    return {
        logData: function(){
            return data
        }, 
        getItems: function(){ 
            return data.items
        }, 
        addItems: function(todo){
            const newTask = new Todo(todo, new Date())
            this.getItems().push(newTask)
            return newBook
        }
    }
})()

const UICtrl = (function(){
    const UISelectors = {
        userDisplay: '.userDisplay', 
        input: '.input', 
        addTaskBtn: '.addTaskBtn', 
        addBtn: '.addBtn',
        container: '.container'
    }
    return{ 
        populateItems:function(items){
            html = ''
            const toDoItem = document.createElement('div')
            toDoItem.classList.add('toDoItem')
            items.forEach(function(item){
                html += `
                    <div class="toDoItem">
                    <button class="completed"><i class="far fa-circle"></i></button>
                    <h2 class="toDoText">${item.task} </h2>
                    <input type='date' id='due-date' name='due-date'>
                    <button class="delete"><i class="fas fa-times cross"></i></button>
                    </div> 
                    `
            })
            
            document.querySelector(UISelectors.userDisplay).innerHTML = html
        }, 
        inputDisplay:function(){

            const inputDiv = document.createElement('div')
            inputDiv.classList.add('input-div')
            const input = document.createElement('input')
            input.classList.add('input')
            inputDiv.appendChild(input)

            const addBtn = document.createElement('button')
            inputDiv.appendChild(addBtn)
            addBtn.innerHTML = 'Add'
            addBtn.classList.add('addBtn')
            
            const cancelBtn = document.createElement('button')
            cancelBtn.innerHTML = 'Cancel'
            cancelBtn.classList.add('cancelBtn')
            inputDiv.appendChild(cancelBtn)
            document.querySelector(UISelectors.container).appendChild(inputDiv)

             // remove add task 
            document.querySelector(UISelectors.addTaskBtn).classList.add('displayoff')
        }, 
        addItemsToUI:function(){ 
            // console.log(document.querySelector(UISelectors.input).value)
        }, 
        // removeInput:function(){
        //     document.querySelector('.toDoItem').remove()
        // }
    } 
    

})() 


const App = (function(ItemCtrl, UICtrl){

   const UISelectors = UICtrl.UISelectors
   

   const loadEventListeners = function(){ 

       document.querySelector('.addTaskBtn').addEventListener('click', displayInputBar)
       function displayInputBar(){
            UICtrl.inputDisplay()       
        }

        // document.querySelector('.delete').addEventListener('click', removeInputBar )
        // function removeInputBar(){
        //     UICtrl.removeInput()
        // }
        
   }
    
    return{ 
        init:function(){        
            const items = ItemCtrl.getItems() 
            UICtrl.populateItems(items)
            loadEventListeners()
        }
    }

})(ItemCtrl, UICtrl)

App.init()