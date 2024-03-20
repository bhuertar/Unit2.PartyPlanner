const API_URL ="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events"; // 2402-FTB-ET-WEB-FT

const state = {
  events: [],
}

const eventList = document.querySelector("#events");

const addEventForm = document.querySelector("#addEvent");
addEventForm.addEventListener("submit", addEvent);

async function render() {
  await getEvents();
  renderEvents();
};
render();


async function getEvents() {
  try{
    const response = await fetch(API_URL);
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    // console.log(json.date)

  } catch (error){
    console.log(error);
  }
};

function renderEvents () {
  // state.events.forEach( (event) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `${event.name} - ${event.description}`;
  //   eventList.appendChild(li);
  // }); 
}