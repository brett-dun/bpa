window.onload = function() {
	document.getElementById('reusable').innerHTML = 
		`<div id="header">
			<img class="headerImage" src="wildcat.png">
			<img class="headerImage" src="nvbusiness.gif">
			<button onclick="location.href = '/BPA/index.html';" class="headerButton">Home</button>
			<button onclick="location.href = 'https://brett-dun.github.io/bpa/calendar.html';" class="headerButton">Calendar</button>
			<button onclick="location.href = 'https://brett-dun.github.io/bpa/events.html';" class="headerButton">Events</button>
			<button onclick="location.href = 'https://brett-dun.github.io/bpa/contactus.html';" class="headerButton">Contact Us</button>
		</div>
		<div id="headerBackground"></div>
		<div>
			<img class="topImage" src="nvhs.jpg">
		</div>`;
	 document.getElementById('headerBackground').style.background="#006fff";
}