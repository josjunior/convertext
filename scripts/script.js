// Text Copy 
let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('.text_area');
  textArea.select();
  document.execCommand('copy');
  
});


// Copied txt
function copiedTxt() {
  let x = document.getElementById("copied");            
  x.style.display = 'block';
  setTimeout(function(){ x.style.display = 'none';}, 1000);
  //document.getElementById('copied').style.display = 'block';

}


  
// Text Transform
function convUpper() {
  let textUpper = document.getElementById('text_area').style.textTransform = 'uppercase';
}
function convLower() {
  let textLower = document.getElementById('text_area').style.textTransform = 'lowercase';
}
function convNormal() {
  let textCapi = document.getElementById('text_area').style.textTransform = 'none';
}
