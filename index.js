import { getUser } from './user.js'
import { getRepositories } from './repositories.js'

import { user } from './userObj.js'
import { screen } from './screen.js'

import { getEvents } from './events.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo de usuario do GitHub')
        return true
    }
}

async function getUserData(userName){

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return 
    }

    const repositoriesResponse = await getRepositories(userName)

    const responseEvents = await getEvents(userName)
   
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(responseEvents)

    screen.renderUser(user)   
}