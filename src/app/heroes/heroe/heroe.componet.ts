import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class heroeComponent{
nombre: string = 'Iroman';
edad:number=45;
get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}
obtenerNombre():String{
return `${this.nombre}=${this.edad}`;
}
cambiarNombre():void{
    this.nombre ='Spiderman';
}
cambiaredad():void{
    console.log('keyyyy');
    this.edad =90;
}
}