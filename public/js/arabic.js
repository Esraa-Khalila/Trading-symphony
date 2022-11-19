// rtl arabic
var arabic=document.getElementById('arabicLanguage')
arabic.addEventListener("click", function(){
var children = document.children;
var i;
for (i = 0; i < children.length; i++) {
   children[i].setAttribute('dir','rtl');
}
})
