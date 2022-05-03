// vetor/array (estrutura de armazenamento)
// pilha >> empilhamento FILO (First In Last Out)

var elementos = []
var topo = -1;
const tamanhoMaximo = 10;

function push(num) {
    if (topo < tamanhoMaximo) {
        topo += 1 //muda posição
        elementos[topo] = num // insere num na posição modificada
    }
    else {
        console.log("A pilha está cheia")
    }
}

function pop() {
    if(topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else {
        console.log("A pilha está vazia")
    }
}

function pilhaEstaVazia(){
    return topo === -1 
}

push(10);
push(15);
push(20);
push(25);
console.log(elementos)

elementos.pop()
elementos.pop()
console.log(elementos)


// ========= aplicaçãopráticade pilha ============

var numDecimal = 10;
var resto;

while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2); //parseInt força o número a permanecer int e não float
    push(resto);
    numDecimal = parseInt(numDecimal/2);
}

while (!pilhaEstaVazia()) {
    console.log(pop()); //executa até a pilha estar vazia
}