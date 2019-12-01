console.log("js working");


/*For fall break, I am going to LOCATION to see my NATIONALITY friend. She loves to make FOOD and play SPORT. 
Also, we like to smoke week and go VERB. It makes us really ADJECTIVE. I hope I don't forget to bring my NOUN.*/

function generate() {

	var plan = document.getElementById("plan");
	var location = document.getElementById("location").value;
	var nation = document.getElementById("nationality").value;
	var food = document.getElementById("food").value;
	var sport = document.getElementById("sport").value;
	var verb = document.getElementById("verb").value;
	var adj = document.getElementById("adjective").value;
	var noun = document.getElementById("noun").value;
	if(location == "" || nation == "" || food == "" || sport == "" || verb == "" || adj == "" || noun == "") {
		plan.innerHTML = "All fields required; please fill out entire form."
	}
	else {
		plan.innerHTML = "For fall break, I will be going to " + location + " to see my " + nation + " friend. She loves to make " + food + " and play " + sport + ". Also, we like to smoke weed and go " + verb + ". It makes us really " + adj + ". I hope I don't forget to bring my " + noun + ".";  
	}
}



