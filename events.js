import {baseUrl, repositoriesQuantity } from './variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getEvents }


// async function eventList() {
//     const resposta = await fetch('https://api.github.com/users/alexsantoswork/events')
//     return await resposta.json()
// }


// console.log( await eventList())