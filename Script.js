function openMenu(){
document.getElementById("mobileMenu").style.right="0";
}

function closeMenu(){
document.getElementById("mobileMenu").style.right="-100%";
}

/* EMAIL JS */

(function(){
emailjs.init("hgQbU8nuJ9kmKYISO");
})();

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(
"service_qx1uwxf",
"template_zx4hd7g",
this
).then(function(){

alert("Message Sent Successfully");

});

});