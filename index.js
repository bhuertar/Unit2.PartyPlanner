const API_URL ="https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events"; // 2402-FTB-ET-WEB-FT

const state = {
  eventList: [],
}

const eventHeading = document.querySelector('#heading');
const headingText = document.createTextNode('Events Lists');
eventHeading.appendChild(headingText);
eventHeading.style.color = 'blue';


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
  const liEvents = state.eventList.map( (events) => {
    const li = document.createElement('li');
    li.innerHTML = events.name;
    // console.log(events.name);
    return li;
  });
  eventsList.replaceChildren(...liEvents);
}

const render = async () => {
  await getEventList();
  // console.log(state.eventList);
  renderEventList();
}

render();