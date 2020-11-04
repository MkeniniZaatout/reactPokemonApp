export default class Authentication {

    static isAuthentication: boolean = false;

    static login(userName:string, mdp: string) : Promise<boolean> {

        const isAuthentication = (userName === "pikachu" && mdp === "pikachu");

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthentication = isAuthentication;
                resolve(isAuthentication);
            }, 1000);
        })
    }

}