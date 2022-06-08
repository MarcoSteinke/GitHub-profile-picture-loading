class GitHubProfilePicture {

    constructor(src) {
        this.src = src
        Object.freeze(this.src)
    }

    static loadForUsername(username) {
        const profilePictureURLTemplate = `https://github.com/USERNAME.png`
        return Object.freeze(new GitHubProfilePicture(profilePictureURLTemplate.replace("USERNAME", username)))
    }

    getProfilePictureURL() {
        return this.src
    }
}