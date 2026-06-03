function projectsCreation(input) {
    const HOURS_FOR_PROJECT = 3

    const name = input[0]
    const numberOfProjects = Number(input[1])

    const totalTime = numberOfProjects * HOURS_FOR_PROJECT
    console.log(`The architect ${name} will need ${totalTime} hours to complete ${numberOfProjects} project/s.`)
}

projectsCreation(["George", "4"])
projectsCreation(["Sanya ", "9"])
