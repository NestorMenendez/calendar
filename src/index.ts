import { setNewEventsStorage, searchProxTasks } from "./supportFunctions.js";
import { showmonthlyCalendar, setWeekCalendar } from "./mainFunctions.js";
import { openModalCreateTask } from "./DOMmanagement.js";


window.addEventListener("load", setMain);

function setMain() {

    setWeekCalendar();
    showmonthlyCalendar();
    setNewEventsStorage()
    searchProxTasks();
    openModalCreateTask();

    const body = document.querySelector("body")
    const remindersContainer = document.createElement("div");

    remindersContainer.classList.add("reminders-container");
    remindersContainer.id = "reminders-container";

    body?.appendChild(remindersContainer);
}