let AddBtn = document.getElementById("addbtn");
AddBtn.addEventListener("click", update);

function update(){

    let Text = document.getElementById("txt").value;
    let notes = localStorage.getItem("notes");

    if(notes==null){

         notesobj = [];
    }
else{

    notesobj = JSON.parse(notes);
}

 notesobj.push(txt.value)

 notes= localStorage.setItem("notes", JSON.stringify(notesobj));

txt.value = " ";

    console.log("hiii")
    console.log(Text);
}

function shownotes(){

    let notes = localStorage.getItem("notes");

    if(notes==null){

        notesobj = [];
    }
else{

    notesobj = JSON.parse(notes);
}

let noteselm = document.getElementById("notes");

let html = " ";

notesobj.forEach(function(element, index){
   

        html += ` <div class="noteCard my-2 mx-2 card" style = "width: 15rem; >
        
        <div class="card-body" ">
          <h5 class="card-title">${index}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
});

if(notesobj.length!=0){

    noteselm.innerHTML = html;
}
else{
    noteselm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
}

}

shownotes();

function deleteNote(index){

notes = localStorage.getItem("notes")

if(notes==null){

    notesobj=[];
}
else {

    notesobj = JSON.parse(notes);
}

notesobj.splice(index, 1);

notes = localStorage.setItem("notes",JSON.stringify(notesobj));

shownotes();
}

let search = document.getElementById("srchtxt")

search.addEventListener("input",function(){

console.log("i am searching")

let inputval = search.value.toLowerCase();

let notecards = document.getElementsByClassName('noteCard');

Array.from(notecards).forEach(function(element){

let cardtxt = element.getElementsByTagName("p")[0].innerText;

if(cardtxt.includes(inputval)){

    element.getElementsByClassName.display = "block";
}
    else{
        element.style.display = "none";
    }


})
})