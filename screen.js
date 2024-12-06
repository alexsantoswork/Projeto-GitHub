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
                                                                        <p class"repo-date">🍴${repos.forks}</p>
                                                                        <p class"repo-date">⭐${repos.stargazers_count}</p>
                                                                        <p class"repo-date">👀${repos.watchers}</p>
                                                                        <p class"repo-date">👨‍💻${repos.language}</p>
                                                                     </div>
                                                                    </a>
                                                                 </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        if(user.events.length > 0){
            let eventsItens = '';

            user.events.forEach(events => {
                if (events.payload) {
                    if (events.payload.commits){
                        const commits = events.payload.commits;
                        const commitsList = commits.map(commit => `<span>${commit.message}</span>`);

                        eventsItens += `<p><span>${events.repo.name} - </span> ${commitsList}</p>`;
                    } else {
                        eventsItens += `<p><span>${events.repo.name} - </span> Sem mensagem de commit</p>`
                    }
                }
            })

            this.userProfile.innerHTML +=
                 `<div class="events">
                      <h2>Eventos</h2> <br> 
                      <p>${eventsItens}</p>
                  </div>`
        }

    },
    
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario não encontrado</h3>"
    }
    
}

export { screen } 
