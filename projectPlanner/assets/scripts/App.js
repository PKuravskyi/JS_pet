import { ProjectsList } from './app/ProjectList.js'

class App {
  static init() {
    const activeProjectsList = new ProjectsList('active')
    const finishedProjectsList = new ProjectsList('finished')
    activeProjectsList.setSwitchProjectHandler(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    )
    finishedProjectsList.setSwitchProjectHandler(
      activeProjectsList.addProject.bind(activeProjectsList)
    )
  }
}

App.init()
