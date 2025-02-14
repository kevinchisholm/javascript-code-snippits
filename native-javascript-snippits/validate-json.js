function validateJson(jsonString) {
	try {
		JSON.parse(jsonString);
		console.warn('JSON IS Valid!');
	} catch (error) {
		console.error('JSON is NOT Valid!', error);
	}
}

const json = `{"foo" : "bar"}`;

validateJson(json); 
