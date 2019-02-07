menu.onclick = function func1() {
  var x = document.getElementById('my_topnav');
  if(x.className === "topnav"){
    x.className +=" responsive";
  } else {
    x.className = "topnav";
  }
}
/*TEXT EDITOR*/
var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");

btn.addEventListener("click", function() {
  var s = editorContent.innerHTML;
  content.style.display = "block";
  content.textContent = s;
}); 

getText.addEventListener("click", function() {
  const old = editorContent.textContent;
  content.style.display = "block";
  content.textContent = old;
});

function link() {
  var url = prompt("Введіть URL");
  document.execCommand("createLink", false, url);
}

function copy() {
  document.execCommand("copy", false, "");
}

function changeColor() {
  var color = prompt("ВВедыть ваш колір hex ex:#f1f233");
  document.execCommand("foreColor", false, color);
}

function getImage() {
  var file = document.querySelector("input[type=file]").files[0];

  var reader = new FileReader();

  let dataURI;

  reader.addEventListener(
    "load",
    function() {
      dataURI = reader.result;

      const img = document.createElement("img");
      img.src = dataURI;
      editorContent.appendChild(img);
    },
    false
  );

  if (file) {
    console.log("s");
    reader.readAsDataURL(file);
  }

}

function printMe() {
  if (confirm("Перевірте свої данні перед друкуванням!")) {
    const body = document.body;
    let s = body.innerHTML;
    body.textContent = editorContent.innerHTML;

    document.execCommandShowHelp;
    body.style.whiteSpace = "pre";
    window.print();
    location.reload();
  }
}
/* animation*/
 $(document).ready(function() {
    $('img.animated').hover(
     function() {
      $(this).addClass('bounce'); // Добавляем клас bounce
     },
     function() {
      $(this).removeClass('bounce'); // Забираэм класс
     }
    )})
 function Save(){
  var popap = window.open(path);
  popap.document.execCommand('SaveAs',true,path);
 }

function exec(a, b) {
  document.execCommand(a, false, b);
  console.log(document.getElementById('editor').innerHTML);
}
function exec2(a, b) {
  document.execCommand(a, false, b);
  console.log(document.getElementById('editor').innerHTML);
}
function exec3(a, b) {
  document.execCommand(a, false, b);
  console.log(document.getElementById('editor').innerHTML);
function onclick(event) {
  doCommand('fontName')
}
function onmousedown(event) {
  event.preventDefault();
}
