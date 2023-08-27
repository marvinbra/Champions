
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://database-champions-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const messageListInDB = ref(database, "Nachrichten-Liste")

const publishBtn = document.getElementById("btn")
const inputFieldEl = document.getElementsByClassName("input-box")
const MessageListEl = document.getElementById("message-list")

publishBtn.addEventListener("click", function() {

    let arr = []

    arr.push(inputFieldEl.value)

    inputFieldEl.value = ""

    MessageListEl.innerHTML += `<ul>${arr}</ul>`

})






