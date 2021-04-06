var tab = new Array();

// function add_nom () {
//     tab.push(prompt("Saisir un nom"));
// }

// function tirage() {
//     var rand = Math.floor(Math.random() * tab.length);
//     tab.lenght > 0 ? alert ('Le gagnant est : ' + tab[rand]) : 
//     alert ("Veuillez rentrer des valeurs"); 
// }   

// Exercice 5

class Guerrier{
    nom;
    attaque;
    defense;
    santé;


    constructor(nom, attaque, defense, santé){
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.sante = sante;
    }
    function attack(nom, attaque, defense, sante){
    this.nom = nom;
    this.attaque = attaque;
    this.defense = defense;
    this.sante = sante;
    }
this.sante

    const guerrier1 = {}
    function attack(){}

    // Nouveaux guerriers

    guerrier1 = new Guerrier("Warrior"; 10; 10; 30);
    guerrier2 = new Guerrier("Destructor", 10; 10; 30);

    // const guerrier1 = {}
    // function attack(){}
    // function guerrier1.attack(guerrier2) {
        
    // } 

    // guerrier1.attack(guerrier2);

    // guerrier2.setSante("20");
    // console.log(guerrier2);


    ///////////////////////////////////////////////////////////////////////////////////

//     // Getter : Accesseur => recupere les valeur
//     getNom(){
//         return this.nom;
//     }

//     // Setter : mutateur : modifier les valeurs de l'attibut par la valeur passe en parametre
//     setNom(nom){
//         this.nom = nom;
//     }

//     afficherNomComplet(){
//         return this.nom + " " + this.prenom;
//     }
// // Cree une nouvelle instance de lobjet Personne à partir de constructeur
// perso = new Personne("Wick", "John", 35);
// // Appel de la methode setNom(nom) pour modifier la valeur de nom dans l'instance perso
// perso.setNom("Doe");
// // Affiche la nom de l'instance perso par la methode getNom()
// console.log(perso.getNom());

// perso2 = new Personne(35, "Wick", "John");
// console.log(perso2.nom);

// // Erreur, Impossible de lui ajouter un nouvel attribut de cette facon
// // Personne.rue = 0;

// // Utiliser le prototype
// Personne.prototype.rue = 0;

// // Mise en place du Getter / Accesseur
// Personne.prototype.getRue = function () {
//     return this.rue;
// }

// // Mise en place du Setter / Mutateur
// Personne.prototype.setRue = function (rue) {
//     this.rue = rue;
// }

// perso.setRue("RUE1");
// console.log(perso.getRue());
