import {baseUrl, repositoriesQuantity } from './variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()

}

export { getRepositories }



// async function repositorieList() {
//     const resposta = await fetch('https://api.github.com/users/alexsantoswork/repos')
//     return await resposta.json()
// }


// console.log( await repositorieList())