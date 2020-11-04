export default class Authentication {

    static isAuthenticated: boolean = false;

    static login(userName:string, mdp: string) : Promise<boolean> {

        const isAuthentication = (userName === "pikachu" && mdp === "pikachu");

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthentication;
                resolve(isAuthentication);
            }, 1000);
        })
    }

}