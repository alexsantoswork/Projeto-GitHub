import {baseUrl,} from './variables.js'

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }


async function usera() {
    const resposta = await fetch('https://api.github.com/users/octocat')
    return await resposta.json()
}

console.log(await usera())