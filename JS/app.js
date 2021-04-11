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
const modebtn = document.querySelector('.darkmodebutton');

const darkheaderfooter = 'rgb(' + 42 + ',' + 39 + ',' + 63 + ')';
const darkslideout = 'rgb(' + 57 + ',' + 53 + ',' + 82 + ')';
const darkmain = 'rgb(' + 89 + ',' + 84 + ',' + 109 + ')';
const darkfontcolor = 'rgb(' + 246 + ',' + 193 + ',' + 119 + ')';

const lightheaderfooter = 'rgb(' + 250 + ',' + 244 + ',' + 237 + ')';
const lightslideout = 'rgb(' + 255 + ',' + 250 + ',' + 243 + ')';
const lightmain = 'rgb(' + 242 + ',' + 233 + ',' + 222 + ')';
const lightfontcolor = 'rgb(' + 40 + ',' + 105 + ',' + 131 + ')';

const hoverbutton = 'rgb(' + 62 + ',' + 143 + ',' + 176 + ')';
const darkplus = 'rgb(' + 224 + ',' + 222 + ',' + 244 + ')';

const headelements = document.querySelectorAll('.headerelement a');

let counter = 0;
modebtn.onclick = function() {
    if (counter % 2 == 0){
        document.querySelector('.header').style.backgroundColor = darkheaderfooter;
        headelements.forEach(function(headeritem) {
            headeritem.style.color = darkfontcolor;
        });
        document.querySelector('.slideout2').style.backgroundColor = darkslideout;
        document.querySelector('.main').style.backgroundColor = darkmain;
        document.querySelector('footer').style.backgroundColor = darkheaderfooter;
        document.querySelector('footer').querySelector('p').style.color = darkfontcolor;
        document.querySelector('.plussign').style.color = darkplus;
        document.querySelector('.slidebutton').style.backgroundColor = darkslideout;
        document.querySelector('.slidebutton').style.color = darkplus;
        modebtn.textContent = 'Light Mode';
        modebtn.style.color = lightfontcolor;
        modebtn.style.backgroundColor = lightheaderfooter;
        counter += 1;
    }else{
        document.querySelector('.header').style.backgroundColor = lightheaderfooter;
        headelements.forEach(function(headeritem) {
            headeritem.style.color = lightfontcolor;
        });
        document.querySelector('.slideout2').style.backgroundColor = lightslideout;
        document.querySelector('.main').style.backgroundColor = lightmain;
        document.querySelector('footer').style.backgroundColor = lightheaderfooter;
        document.querySelector('footer').querySelector('p').style.color = lightfontcolor;
        document.querySelector('.plussign').style.color = lightfontcolor;
        document.querySelector('.slidebutton').style.backgroundColor = lightslideout;
        document.querySelector('.slidebutton').style.color = lightfontcolor;
        modebtn.textContent = 'Dark Mode';
        modebtn.style.color = darkfontcolor;
        modebtn.style.backgroundColor = darkheaderfooter;
        counter += 1;
    }
}

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

const newnotebtn = document.querySelector('.newnotebutton');

const sidemenu = document.querySelector('.slideout2');
const unordlist = document.createElement('UL');
unordlist.setAttribute("class", "myList");
sidemenu.appendChild(unordlist);


let notesArray = [];
newnotebtn.onclick = function() {
    const textboxdiv = document.createElement('DIV');
    textboxdiv.setAttribute("class", "newnote2");
    document.body.querySelector('.main').appendChild(textboxdiv);

    const usertextarea = document.createElement('TEXTAREA');
    usertextarea.setAttribute("class", "textbox");
    usertextarea.innerHTML = "note title here\nnote content here";
    usertextarea.style.position = "intitial";
    textboxdiv.appendChild(usertextarea);
    
    const savedeldiv = document.createElement('DIV');
    savedeldiv.setAttribute("class", "textbuttons");
    textboxdiv.appendChild(savedeldiv);

    const savebtn = document.createElement('BUTTON');
    savebtn.setAttribute("class", "savebutton");
    savebtn.innerHTML = "Save";
    savedeldiv.appendChild(savebtn);
    
    const delbtn = document.createElement('BUTTON');
    delbtn.setAttribute("class", "deletebutton");
    delbtn.innerHTML = "Cancel";
    savedeldiv.appendChild(delbtn);


    savebtn.onclick = function() {
        notesArray.push(usertextarea.value);
        let mostrecentnote = notesArray[notesArray.length -1];
        let usertitle = mostrecentnote.split("\n", 1)[0];
        let usercontent = mostrecentnote.split("\n").slice((mostrecentnote.len - 1)*-1);
        let myli = document.createElement('li');
        myli.setAttribute("class", "listitem");
        myli.innerHTML = usertitle;
        unordlist.appendChild(myli);
        textboxdiv.remove();
    }

    delbtn.onclick = function() {
        textboxdiv.remove();
    }
}

// let my_li_items = document.getElementsByClassName("listitem");
// my_li_items.forEach((e) => {
//     e.style.color = 'red';
// });

// 3. function to update list of notes: const sidelist = function(notesArray) {
// - for (i = 0, i < notesArray.length, i++) {
// -    if i % 2 == 0:
// -        display notesArray[i] in list form and make it a link/button *items in notesArray are stored in order of title and body so only titles will be displayed * 
// -        assign the link/button with class = "[value of i]""
// -        *also im not sure if things like lists will update dynamically if the array is updated*
// -    }
// - }

// const sidemenu = document.querySelector('.slideout2');
// const unordlist = document.createElement('UL');
// sidemenu.appendChild(unordlist);
// for (i = 0; i < notesArray.length; i++) {
//     let noteTitle = document.createElement('LI');
//     noteTitle.innerHTML = (notesArray[i].split("\n", 1))[0];
//     unordlist.appendChild(noteTitle);
// }

// for (i = 0; i < notesArray.length; i++) {
//     let noteTitle = (notesArray[i].split("\n", 1))[0];
//     console.log(noteTitle);
// }

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


