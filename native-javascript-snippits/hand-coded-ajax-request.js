function ajaxRequest(){
	const request XMLHttpRequest();

	request.onreadystatechange = function(){
		if (request.readyState === 4 && request.status === 200){
			// replace the line below with your actual implementation
			document.body.innerHTML += request.responseText;
		};
	};

	request.open("GET", YOURULR_GUES_HERE, true);

	request.send();
};

ajaxRequest();
