let x = document.getElementById("editor").value;
document.getElementById('preview').innerHTML = marked(x);

document.getElementById("editor").addEventListener("change", onChange);

function onChange()
{  
let x = document.getElementById("editor").value;
document.getElementById('preview').innerHTML = marked(x);
}