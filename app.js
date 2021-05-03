function num(a) {
    document.getElementById('disp').value +=a 
}
function result() {
    ans=document.getElementById('disp')
    ans.value=eval(ans.value) 
}
function del() {
    document.getElementById('disp').value=""
    
}