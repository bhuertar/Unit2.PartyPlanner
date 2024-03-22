const API_URL ="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events"; // 2402-FTB-ET-WEB-FT

const state = {
  eventList: [],
}

const eventHeading = document.querySelector('#heading');
const headingText = document.createTextNode('Events Lists');
eventHeading.appendChild(headingText);
eventHeading.style.color = 'blue';

const eventsDate = document.querySelector('#events-date');


const getEventList = async () => {
  try {
    const response = await fetch(API_URL);
    // console.log(`Response: `, response);
    const json = await response.json();
    console.log(`JSON: `, json);
    state.eventList = json.data;
  } catch(error) {
    console.error(`ERROR OCCURED`);
  }
}

const renderEventList = () => {
  const eventsList = document.querySelector('#eventsList')
  const ulEvents = state.eventList.map( (event) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>Event: ${event.name}</p>
      <p>Date: ${event.date}</p>
      <p>ID: ${event.id}</p>
      <p>Location: ${event.location}</p>
      <p>Description: ${event.description}
    `;
    // console.log(events.name);
    return li;
  });
  eventsList.replaceChildren(...ulEvents);
}

const render = async () => {
  await getEventList();
  // console.log(state.eventList);
  renderEventList();
  // renderEventDates();
}

render();