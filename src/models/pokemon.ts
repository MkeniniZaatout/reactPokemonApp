export default class Pokemon {
    // 1. Typage des propiétés d'un pokémon.
    public id: number;
    public hp: number;
    public cp: number;
    public name: string;
    public picture: string;
    public types: Array<string>;
    public created: Date;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        hp: number = 100,
        cp: number = 10,
        name: string = '...',
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    ){
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }


}