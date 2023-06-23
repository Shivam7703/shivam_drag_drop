var ele = document.getElementsByClassName('drag');
var box = document.getElementsByClassName('boxes');
var not = document.getElementById('h');
var dragItem ;

// for selecting each elements to drag
for(var i of ele){
  i.addEventListener('dragstart', Start);
  i.addEventListener('dragend', End);
}

// just clicking and start to drag then its func to hide elements in first container
function Start(){
dragItem = this;
setTimeout(()=>this.style.display = "none" ,0);
}

// fun for shifting in other container
function End(){
  dragItem = this;

  // fun for notification
  notification();
  setTimeout(()=>this.style.display = "block" ,0);
  dragItem = "";

  }

// functio for containers
  for(j of box){
    j.addEventListener('dragover', Over);
    j.addEventListener('dragenter', Enter);
    j.addEventListener('dragleave', Leave);
    j.addEventListener('drop', Drop);
  }
  // for addind elements in container after drop
  function Drop(){
    this.append(dragItem);

  }
  // 
  function Over(e){
e.preventDefault();
  }
  function Enter(e){
    e.preventDefault();
  }
  // after droping box border color change
  function Leave(){
this.style.border="2px solid cyan" ;
  }
  // func for notification
  function notification(){
    not.innerHTML = 'You have succesfully droped item';
    setTimeout(()=>not.innerHTML = "" ,1000);
  }

  
