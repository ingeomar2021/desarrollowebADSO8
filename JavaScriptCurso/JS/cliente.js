function Cliente(nombre,saldo) {
    this.nombre=nombre;
    this.saldo=saldo; 
    this.depositar=depositar; 
    this.retirar=retirar;   
}

function depositar(valor) {
    this.saldo=this.saldo+valor;    
}

function retirar(valor) {
    this.saldo=this.saldo-valor;    
}