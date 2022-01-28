import {Project} from "./Project.js"

class ProjectUI {

  static createProjectUI(project) {

    if(project.type == "html") {
      let html_row = document.querySelector('#html_row')

      html_row.innerHTML += `
        <div class="col-lg-4 col-md-6 py-3">
          <div class="card bg-secondary">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="${project.imgSrc}" class="img-fluid" />
            </div>

            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">
                ${project.description}
              </p>

              <a type="button" class="btn btn-primary" href="${project.demoLink}" target="_blank"><i class="fas fa-eye"></i> Demo</a>
              <a type="button" class="btn btn-outline-primary" href="${project.repoLink}" target="_blank"><i class="fab fa-github"></i> Repo</a>
            </div>
            <div class="card-footer">
              <span>${project.tag}</span>
            </div>
          </div>
        </div>
      `
    } else if(project.type == "javascript") {
        let js_row = document.querySelector('#js_row')

        js_row.innerHTML += `
          <div class="col-lg-4 col-md-6 py-3">
            <div class="card bg-secondary">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${project.imgSrc}" class="img-fluid" />
              </div>

              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">
                  ${project.description}
                </p>

                <a type="button" class="btn btn-primary" href="${project.demoLink}" target="_blank"><i class="fas fa-eye"></i> Demo</a>
                <a type="button" class="btn btn-outline-primary" href="${project.repoLink}" target="_blank"><i class="fab fa-github"></i> Repo</a>
              </div>
              <div class="card-footer">
                <span>${project.tag}</span>
              </div>
            </div>
          </div>
        `
    } else if(project.type == "bootstrap") {
        let bs_row = document.querySelector('#bs_row')

        bs_row.innerHTML += `
          <div class="col-lg-4 col-md-6 py-3">
            <div class="card bg-secondary">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${project.imgSrc}" class="img-fluid" />
              </div>

              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">
                  ${project.description}
                </p>

                <a type="button" class="btn btn-primary" href="${project.demoLink}" target="_blank"><i class="fas fa-eye"></i> Demo</a>
                <a type="button" class="btn btn-outline-primary" href="${project.repoLink}" target="_blank"><i class="fab fa-github"></i> Repo</a>
              </div>
              <div class="card-footer">
                <span>${project.tag}</span>
              </div>
            </div>
          </div>
        `
    } else {
        let portfolio_row = document.querySelector('#portfolio_row')

        portfolio_row.innerHTML += `
          <div class="col-lg-4 col-md-6 py-3">
            <div class="card bg-secondary">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${project.imgSrc}" class="img-fluid" />
              </div>

              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">
                  ${project.description}
                </p>

                <a type="button" class="btn btn-primary" href="${project.demoLink}" target="_blank"><i class="fas fa-eye"></i> Demo</a>
                <a type="button" class="btn btn-outline-primary" href="${project.repoLink}" target="_blank"><i class="fab fa-github"></i> Repo</a>
              </div>
              <div class="card-footer">
                <span>${project.tag}</span>
              </div>
            </div>
          </div>
        `
    }
  }

  static createCarouselUI(project) {
    
    let container = document.querySelector('.carousel-inner')

    if(project.type == "javascript") {
      container.innerHTML += `
        <div class="carousel-item ${project.isActive == true ? "active" : ""}">
          <div class="container">
            <div class="row g-3 justify-content-center align-items-center" id="projectOne">
              <div class="col-md-8">
                <img src="${project.imgSrc}" alt="Pizza shop design" class="img-fluid">
              </div>
              <div class="col-md-4 d-none d-md-block">
                <p class="">${project.description}</p>
                <a type="button" class="btn btn-primary btn-lg" href="#project"><i class="fas fa-cogs"></i> Projects</a>
              </div>
            </div>
          </div>
        </div>
      `
    }

  }

  static displayUI() {

    let projectList = Project.projectList

    projectList.forEach(project => {
      
      ProjectUI.createProjectUI(project)
      ProjectUI.createCarouselUI(project)
    });

  }
}

export {ProjectUI}