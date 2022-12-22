class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
    showStats(){
        console.log(`NOMBRE: ${this.nombre}`);
        console.log(`Sal.: ${this.salud} | Vel.: ${this.velocidad} | Fue.: ${this.fuerza}`);
    }
    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
