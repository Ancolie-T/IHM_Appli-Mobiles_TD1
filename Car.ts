export default class Car {
    model: string;
    brand: string;
    color: string;
    year: number;
    speed: number;
    started: boolean;

    constructor(model: string, brand: string, color: string, year: number, speed: number = 0, started: boolean = false) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;

        console.log("Cette voiture ")
    }

    start(): void {
        if (this.started) {
            console.log("Cette voiture est déjà démarrée.");
        } else {
            this.started = true;
            console.log("La voiture démarre.");
        }
    }

    stop(): void {
        if (!this.started) {
            console.log("Cette voiture est déjà à l'arrêt.");
        } else {
            this.started = false;
            this.speed = 0;
            console.log("La voiture s'arrête.");
        }
    }

    accelerate(acceleration: number): void {
        if (!this.started) {
            console.log("La voiture n'est pas démarrée.");
            return;
        }
        this.speed += acceleration;
        console.log(`La voiture roule à ${this.speed} km/h.`);
    }
}