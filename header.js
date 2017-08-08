window.onload = function() {
	document.getElementById('reusable').innerHTML = 
		`<div id="header">
			<img class="headerImage" src="wildcat.png">
			<img class="headerImage" src="nvbusiness.gif">
			<button onclick="location.href = 'index.html';" class="headerButton">Home</button>
			<button onclick="location.href = 'calendar.html';" class="headerButton">Calendar</button>
			<button onclick="location.href = 'events.html';" class="headerButton">Events</button>
			<button onclick="location.href = 'contactus.html';" class="headerButton">Contact Us</button>
		</div>
		<div id="headerBackground"></div>
		<div>
			<img class="topImage" src="nvhs.jpg">
		</div>`;
}


window.onscroll = function() {
    var header = document.getElementById('headerBackground');
    if ( window.pageYOffset > 100 ) {
    	header.style.background="#006fff"; }
    else {
    	header.style.background="none";
    }
}