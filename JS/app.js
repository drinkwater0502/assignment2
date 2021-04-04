// 4 functions that I may need for this assignment

// 1. function for dark mode: const changemode = function() {
// - something like let modechangebttn = document.querySelector("#modebutton")
// -    if modechangebttn is clicked and background-color is white:
// -        background-color = black
// -        font-color = white
// -    elif modechangebttn is clicked and background-color is black:
// -        background-color = white
// -        font-color = black
// - }


// - let notesArray = [] (define array globally so it can be accessed outside of the function)
// 2. function for new note: const newnote = function() {
// - create 2 new textarea boxes, one for note title and one for note body
// - create save and delete buttons (savebttn and deletebttn)
// - if savebttn is clicked:
// -    notesArray.push(title, body)
// -    delete both textarea boxes and both buttons
// - if deletebttn is clicked:
// -    delete both textarea boxes and both buttons
// - }

// 3. function to update list of notes: const sidelist = function(notesArray) {
// - for (i = 0, i < notesArray.length, i++) {
// -    if i % 2 == 0:
// -        display notesArray[i] in list form and make it a link/button *items in notesArray are stored in order of title and body so only titles will be displayed * 
// -        assign the link/button with class = "[value of i]""
// -        *also im not sure if things like lists will update dynamically if the array is updated*
// -    }
// - }

// 4. function to display old notes: const viewnote = function() {
// - if note link/button is clicked:
// - create new note area and close button
// -    for (i = 0, i < notesArray.length, i++) {
// -        if i == class value:        *line 29*
// -            display notesArray[i] as title in note area 
// -            display notesArray[i+1] as body in note area
// -    }
// - if close button is clicked:
// -    delete note area and close button
// - }


