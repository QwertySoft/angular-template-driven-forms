export default class Message {
    user: string;
    date: Date;
    message: string;

    constructor(user: string, message: string) {
        this.user = user;
        this.message = message;
    }

    public serialize() {
        return JSON.stringify({user: this.user, text: this.message});
    }
}
