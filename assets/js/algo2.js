function fun() {
    // Tableau (array)
    // - Une variable pouvant avoir un ensemble de valeur
    // la premiere valeur du tableau est d'indice 0

    var tab =[2, 3, 5];

    // Recupere la taille du tableau
    console.log(tab.length);

    // Affiche le 1er element du tableau
    console.log(tab[0]);

    // Ajoute un element
    tab.push(7);
    // ou
    tab[tab.length]=8;

    // Affiche le tableau
    console.log(tab);

    // Parcourir et afficher un tableau
    for(var i = 0; i < tab.length; i++){
        console.log(tab[i]);
    }

    // boucle for simplifiée
    for (var elt of tab){
        console.log(elt);
    }

    /*
        Operations sur les tableaux

        - push() : ajoute un element passe en parametre du tableau
        - pop() : supprime le dernier element du tableaux
        - shift() : supprime le premier element du tableaux
        - reverse() : inverse l'ordre des element du tableaux
        - sort() : trie le tableaux
        - splice() : permet d'extraire; ajouter ou supprimer un ou plusieurs elements (selon des parametres)
        - includes() : retourne true si la valeur passee en parametre existe dans un tableau
        - indexeOf() : retourne la position de l'element passe en parametre, -1 sinon
        - slice : permet d'extraire un sous tableau a partir du tableau d'origine
        - fill() : permet d'initialiser, ou modifier des valeurs d'un tableau ou une partie
        - unshift() : permet d'ajouter un ou plusieurs elements au début d'un tableau



        */

    var sports = ["foot", "tennis", "rugby", "basket", "volley"];

    // var tab = sports.splice(2, 1, "basket", "Petanque");

    for (var elt of sports){
        console.log(elt);
    }

    console.log(tab);

    var tab = sports.slice(1, 3);
    console.log(tab);

    var tab = new Array(3).fill(0);

    console.log(tab);

    var tab = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    tab.fill(9, 2, 5);
    console.log(tab);

    tab.unshift(9);;
    console.log(tab);

    // ecrire un programme JS pour calculer la somme et le produit d'un tableau d'entiers

    var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1;

    // for (var i = 0; i < array.lenght; i +=1) {
    // s += array[i];
    // p *= array[i];
    // }

    for (var elt of array) {
        s += elt;
        p *=elt;

    }
 console.log('Sum : ' + s + ' Product : ' + p);

 // .foreach() : Permet 
 // .map() :  appliquer une fonction a un tableaux
 // .filter() :  Filtrer les elements d'un tableau selon un critere sous la forme d'une fonction anonyme ou flecheé

 // .reduce() : reduire tous les elements d'un tableau en un seul valeur selon une regle definie sous la forme d'une fonction anonyme ou fleche

 var tab = [2, 3, 5];
 tab.map(x => x + 3)
 .filter(x => x > 5)
 .forEach(
        function (a){
            console.log(a - 3);
         }
 );    

         // Affiche 3, 5

    var somme = tab.map(x => x + 3)
         .filter(x => x > 5)
         .reduce(function(sum, elem){
             return sum + elem;
        });
            // Affiche 14
         //Console.log(somme)

    // .forEach() : Parcourir un tableaux
    // .map() : appliquer une fonction a un tableaux
    // .filter() : filtrer les elements d'un tableau selon un critere sous la forme d'une fontion anonyme ou flechée
    // .reduce() : reduire tous les elements d'un tableau en un seul selon un regle definie sous la forme d'une fontion anonyme 
    // ou flechée

    var tab = [2, 3, 5];
    tab.map(x => x + 3) 
       .filter(x => x > 5)
       .forEach(
           function(a){
               console.log(a - 3);
           }
       );

    // Affiche 3, 5

    var somme = tab.map(x => x + 3) 
        .filter(x => x > 5)
        .reduce(
            function(sum, elem){
                return sum + elem;
        });

    // Affiche 14
    console.log(somme);

    }


fun();

// Fonctions

// ES5 - ECMASCRIPT V5
function somme(a, b){
    return console.log(a + b);

}

somme(1, 3);

// ES6
// 2 ème facons. 

const addition = (a , b) => a + b;

var res = addition(1, 3);

console.log(res);

{
    var x = 2
}

// on va pouvoire se servir de x

let somme2 = new Function("a", "b", "return a + b");

let resultat = somme2(1, 5);

console.log(resultat);

// Affiche 6

function somme3(){
    result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];

    }
    return result;
}

    console.log(somme3(2, 4, 8));
    console.log(somme3(2, 3));

// Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et
// renvoie le premier élément.

let array = [1, 2, 3, 4, 5, 6];

function f2(arr) {
    return arr[0];
}

//const f2 = (arr) => arr[0];

var r = f2(array);
console.log(r);

// Créez une fonction qui prend l'âge et retourne l'âge en jours.

function age(a, b){
    return console.log(a + b);

}

somme(1, 3);

// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.


