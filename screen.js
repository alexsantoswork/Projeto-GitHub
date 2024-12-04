const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto"/>
                                        <div class="data">
                                          <h1>${user.name ?? 'Não possui'}</h1>
                                          <p>${user.bio ?? 'Não possui'}</p>
                                          <small>👥 Seguidores ${user.followers} </small> <br>
                                          <small>👥 Seguindo ${user.following} </small> <br>
                                        </div>     
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repos => repositoriesItens += `<li>
                                                                    <a href="${repos.html_url}" target="blank">${repos.name}
                                                                     <div>
                                                                        <p class"analise">📝${repos.forks}</p>
                                                                        <p class"analise">⭐${repos.stargazers_count}</p>
                                                                        <p class"analise">👀${repos.watchers}</p>
                                                                        <p class"analise">📇${repos.language}</p>
                                                                     </div>
                                                                    </a>
                                                                 </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventItens = ''
        user.events.forEach(event => eventItens += `<li>${event.repo.name} - ${event.type}</li>`)
        
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div>
                                            <h2>Eventos</h2><br>
                                            <ul>${eventItens}</ul>
                                           </div> <br>`
        }
    },
    
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
    
}

export { screen } 
