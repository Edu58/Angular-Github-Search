export class Repomodel {

    repoName: string
    repoOwner: string
    repoUrl: string
    repoDescription: string
    repoSize: number
    repoLanguage: string
    repoLicense: string
    repoAllowForking: boolean
    repoVisibility: string
    repoForks: number
    createdAt: Date
    updatedOn: Date


    constructor ( name: string, owner: string, repoUrl: string, description: string = 'Not provided', size: number, language: string, license: string = 'Not provided', allowForking: boolean, visibility: string, forks: number, created: Date, updated: Date ) {
        this.repoName = name
        this.repoOwner = owner
        this.repoUrl = repoUrl
        this.repoDescription = description
        this.repoSize = size
        this.repoLanguage = language
        this.repoLicense = license
        this.repoAllowForking = allowForking
        this.repoVisibility = visibility
        this.repoForks = forks
        this.createdAt = created
        this.updatedOn = updated
    }
}
