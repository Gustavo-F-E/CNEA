const HTML_copy_paste=document.querySelector("#HTML_copy_paste")
const CSS_copy_paste=document.querySelector("#CSS_copy_paste")
const JS_copy_paste=document.querySelector("#JS_copy_paste")
const salida_HTML_CSS_JS=document.querySelector("#salida_HTML_CSS_JS")
const boton_correr_HTML=document.querySelector("#boton_correr_HTML")
const boton_correr_CSS=document.querySelector("#boton_correr_CSS")
const boton_correr_JS=document.querySelector("#boton_correr_JS")

boton_correr_HTML.onclick=()=> salida_HTML_CSS_JS.src="data:text/html;charset=utf-8,"+encodeURI(HTML_copy_paste.textContent)
