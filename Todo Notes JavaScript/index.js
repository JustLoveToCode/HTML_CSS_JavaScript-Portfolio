const btnEl=document.getElementById('btn');
const appEl=document.getElementById('app');

getNotes().forEach((note)=>{
    const noteEl= createNoteEl(note.id, note.content)
    appEl.insertBefore(noteEl,btnEl)
})

// Creating the Notes using the createNoteEl function
function createNoteEl(id,content){
// It will create that specific element that you specify regardless
// of whether it is h1, h2 or textarea
// element now has the textarea itself: textarea is the HTML element
// which give the User the option to add text to a certain textarea:
// The element variable is now the HTML element:
   const element=document.createElement("textarea")
//Adding the classList of note to the element that you have
//created earlier.
   element.classList.add('note')
// Adding the placeholder which has 'Empty Note'
   element.placeholder="Empty Note"
// Adding the element.value which is the content
   element.value=content
   
//  We add the addEventListener inside the createNoteEl in order
// to access the id and element so that we can delete it if required.
// Adding the addEventListener to the element of textarea that we created earlier:
   element.addEventListener('dblclick',()=>{
    // This will display the Dialog Box with the Message
    const warning=confirm('Do you want to delete this note?')
    if(warning){
    deleteNote(id, element)
    }
    
   })
   
   
//  We will want to updateNote if it is necessary
   element.addEventListener("input",()=>{
    updateNote(id, element.value)
   })
//The return statement help it to go outside of the function
   return element;
   
}

// Deleting the Note:
function deleteNote(id,element){
    // This will save the notes that is not equal to the id
    const notes=getNotes().filter((note)=> note.id !==id)
    appEl.removeChild(element)
    saveNote(notes)
}

//  Updating the Note:
function updateNote(id,content){
    // This will give you all the different notes
    const notes=getNotes()
    // This will filter to that id
    const target=notes.filter((note)=>note.id==id)[0];
    target.content=content;
    saveNote(notes);
    
    
}
// Adding the Notes
function addNote(){
    const notes=getNotes();
    
    // Creating an Object for the JavaScript when it is 'click'
    // Random id is being created when it is clicked
   const noteObj={
   // Creating the note with the random id:
    id:Math.floor(Math.random()*100000),
    content: ""
   };
//Calling the Function by Invoking it
   const noteEl=createNoteEl(noteObj.id,noteObj.content)
   // Insert the noteEl before btnEl:
   appEl.insertBefore(noteEl,btnEl);
   notes.push(noteObj)
   
   saveNote(notes);
}

// Saving the Notes
// Set the value with the Specified key in the Local Storage:
// This is using the setItem Method for localStorage:
function saveNote(notes){
    localStorage.setItem("note-app",JSON.stringify(notes))
    
}

// Getting the Notes using the getItem Method with the
// localStorage:
function getNotes(){
   return JSON.parse(localStorage.getItem('note-app') || "[]")
}

// By adding the event 'click', the callback function is Activated.
btnEl.addEventListener('click',addNote)

