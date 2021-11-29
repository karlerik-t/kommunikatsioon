// Saadud vaabilehelt https://www.quackit.com/html/html_editors/scratchpad/?example=/javascript/examples/javascript_print_this_page_unobtrusive
function eemaldaNupp() {
	var nupp = document.getElementById("print");
	nupp.remove();
}
document.addEventListener("DOMContentLoaded", function(event) {
	var e = document.getElementById("print");
	
	e.addEventListener("click", function() {
		window.print();
	}, false);
  
});
