new Vue({
    el: '#app',
    data: {
        // mon tableau d'objet (carousselData)
        // qui représentent les différentes diapositives du carrousel
        // si je veux modifier l'ordre des data jeu peux just modifier sur mon tableaux 
        carousselData: [
            {
                title: "<<Margherita>>",
                imgSrc:"https://media-cdn.tripadvisor.com/media/photo-s/09/c6/57/30/platinum-pizzeria.jpg",
                description:"Une pizza classique et simple, avec une base de sauce tomate, de la mozzarella fondante et quelques feuilles de basilic frais." ,
                prix: 120.99
            },

            {
                title: "<<Quatre fromages>> ",
                imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/14/ca/dd/a6/pignalosa-pizzeria-margherita.jpg",
                description:" Une pizza riche en saveurs, avec une base de sauce tomate ou de crème fraîche, et garnie de quatre types différents de fromages, tels que le gorgonzola, le parmesan, le brie et le fromage de chèvre.",
                prix: 7.99
            },

            {
                title: "<<Calzone>>",
                imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/15/16/0d/a7/ristorante-pizzeria-la.jpg",
                description:"Une pizza pliée en deux, comme un chausson, et garnie de divers ingrédients, tels que le jambon, le fromage, les champignons et les olives. La garniture est enfermée à l'intérieur de la pâte, ce qui la rend idéale pour être mangée à la main.",
                prix: 5.99
            }
          ],
            //représente l'index de la diapositive actuellement affichée
            //Commencer à l'index 0 (image 0).
            carousselIndex: 0
        },
        methods: {
            //methode "next" pour Passer à l'image suivante
            //en vérifiant si nous avons atteint la fin du tableau de données
            next: function () {
              this.carousselIndex += 1;
              console.log(this.carousselIndex);
              if (this.carousselIndex > this.carousselData.length - 1) {
                this.carousselIndex = 0;
              }
            },
        
            //methode "previous" qui revien à l'image précèdente
            //en diminuant l'index de la diapositive actuelle et en vérifiant si nous avons atteint le début du tableau de données
            previous: function () {
              this.carousselIndex -= 1;
              console.log(this.carousselIndex);
              if (this.carousselIndex < 0) {
                this.carousselIndex = this.carousselData.length - 1;
              }
            }
          },
          // la méthode mounted est utilisée pour initialiser l'intervalle de temps pour faire défiler automatiquement les images du carrousel
          mounted() {
            setInterval(() => {
              this.next();
            }, 5000);
          }
        });