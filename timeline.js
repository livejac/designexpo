// JavaScript Document
//Add time sorting as a feature?
const eventList = [
	{
    name: "Kjempebedrift",
	eventName: "Workshop",
    date: 12,
	time: 2000,
    text: "Kom på workshop med kjempebedrift! Det blir tapas, sushi og gratis øl.",
		id: 1
  },
	{
    name: "Kjempebedrift",
	eventName: "Workshop",
    date: 15,
	time: 2000,
    text: "Kom på workshop med kjempebedrift! Det blir tapas, sushi og gratis øl.",
		id: 2
  },
	{
    name: "Enorm bedrift",
	eventName: "Workshop",
    date: 15,
	time: 2000,
    text: "Kom på workshop med kjempebedrift! Det blir tapas, sushi og gratis øl.",
		id: 3
  },
  {
    name: "Sofie Elise",
	eventName: "Teknologi i bloggverden",
    date: 13,
	time: 1330,
    text: "Toppblogger Sofie Elise deler hvordan teknologi gir henne et fortrinn i bloggens verden. Bli med på et spennende foredrag om dagens utforming av sosiale medier.",
	testText: "blablabalablabla",
	  id:4
  },
  {
    name: "Stephen Hawking",
	eventName: "The world as we know it",
    date: 13,
	time: 1200,
    text: "Huset til foreldrene hans lå i London, men i løpet av 2. verdenskrig flyttet de til Oxford for å sikre seg at Stephen fikk en tryggere oppvekst. Da han var 8 år gammel, flyttet familien til St Albans, en by rundt 30 kilometer nord for London. Han gikk på St. Albans School og deretter University College Oxford. Hawking ønsket å studere matematikk, men måtte velge fysikk da University College Oxford ikke kunne tilby matematikkstudier.",
	testText: "Heisann hoppsann",
	  id: 5
  },
  {
    name: "Spennende foredragsholder",
	  eventName: "Spennende foredrag",
    date: 13,
	time: 1200,
    text: "lorem ipsum dolor osv.",
	  id: 6
  },
	{
    name: "",
	eventName: "Coming soon",
    date: 14,
	time: 0,
    text: "There are no events on this date yet.",
		id: 7
  },
	{
    name: "",
	eventName: "Coming soon",
    date: 15,
	time: 0,
    text: "There are no events on this date yet.",
		id: 8
  },
	{
    name: "",
	eventName: "Coming soon",
    date: 16,
	time: 0,
    text: "There are no events on this date yet.",
		id: 9
  },
];

function switchDate(date) {
	var clicked = "time"+date;
    var dateChosen = document.getElementById(clicked).value;
	//console.log(dateChosen);
	for(var i=1; i<=9; i++){
		var idNum = "time"+(i);
		//console.log(idNum);
		var val = Number(dateChosen)+Number(i-5);
		if (val > 11 && val < 17){
			document.getElementById(idNum).value=val;
			document.getElementById(idNum).style.visibility = "visible";
		}else{
			document.getElementById(idNum).style.visibility = "hidden";
		}
	}
	clearEvents();
	for (let event of eventList) {
	  if (event.date == dateChosen) {
		  //console.log(event.name+ " "+event.text);
		  var head = document.createElement("h2");
		  var headNode = document.createTextNode(event.eventName);
		  head.appendChild(headNode);
		  
		  var head2 = document.createElement("h4");
		  var head2Node = document.createTextNode(event.name);
		  head2.appendChild(head2Node);
		  
		  var tex = document.createElement("p");
		  var texNode = document.createTextNode(event.text);
		  tex.appendChild(texNode);
		  
		  var test = document.createElement("p");
		  test.className = "testeText";
		  test.setAttribute("id", 20+event.id);
		  var texNodeTest = document.createTextNode(event.testText);
		  test.appendChild(texNodeTest);
		  
		  var eventButton = document.createElement("input");
		  eventButton.setAttribute("type", "button");
		  eventButton.setAttribute("value", "Les mer");
		  eventButton.setAttribute("id", event.id);
		  eventButton.setAttribute("onclick", "reply_click(this)");
		  console.log(event.id);
		  
		  var newElement = document.createElement("div");
		  newElement.className = "eventBox";
		  newElement.appendChild(head);
		  newElement.appendChild(head2);
		  newElement.appendChild(tex);
		  newElement.appendChild(test);
		  
		  if(event.name != ""){
		  	newElement.appendChild(eventButton);
		  }
		  document.body.appendChild(newElement);
		  
	  } else{
	  }
	}
}

function clearEvents(){
	var visibleEvents = document.getElementsByClassName("eventBox");

	while(visibleEvents[0]) {
    	visibleEvents[0].parentNode.removeChild(visibleEvents[0]);
	}
}

function reply_click(obj){
	var testtest = obj.id;
	var liste = document.getElementsByClassName("testeText");
	console.log(testtest);
	console.log(liste);
	
	for (let ting of liste) {
  	if (ting.id-20 == testtest) {
    	document.getElementById(ting.id).style.display = "block";
  	}}
}

switchDate(5);
