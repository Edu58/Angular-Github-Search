export class User {

    userName: string
    avatarUrl: string
    profileUrl: string

    constructor ( name: string, avatar: string, url: string ) {
        this.userName = name
        this.avatarUrl = avatar
        this.profileUrl = url 
    }
}
