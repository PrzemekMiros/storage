function cartHandler() {
    return {
       peopleCount: 1,
       totalPrice: 50,
       availableExtras: [
          { name: "Dodatek 1", price: 20 },
          { name: "Dodatek 2", price: 15 }
       ],
       extraAttractions: [],
       cart: JSON.parse(localStorage.getItem("cart")) || [],
       showModal: false,
       showAlert: false,
 
       // Oblicza cenę na podstawie liczby osób i dodatków
       updatePrice() {
          const basePrice = 50; // Cena za osobę
          const totalExtrasPrice = this.extraAttractions.reduce((sum, extra) => sum + extra.price, 0);
          this.totalPrice = this.peopleCount * basePrice + totalExtrasPrice;
       },
 
       // Dodaje dodatkowe atrakcje do lokalnego stanu
       addExtra(extra) {
          this.extraAttractions.push(extra);
          this.updatePrice();
       },
 
       // Dodaje główną atrakcję do koszyka
       addAttractionToCart() {
          const attraction = {
             id: "1",
             name: "Element",
             price: this.totalPrice,
             extras: [...this.extraAttractions]
          };
          this.cart.push(attraction);
          this.saveCart();
          this.extraAttractions = [];
          this.updatePrice();
          this.showSuccessAlert();
       },
 
       // Usuwa element z koszyka
       removeFromCart(index) {
          this.cart.splice(index, 1);
          this.saveCart();
          this.calculateTotal();
       },
 
       // Oblicza całkowitą sumę koszyka
       calculateTotal() {
          this.total = this.cart.reduce((sum, item) => {
             const extrasPrice = item.extras.reduce((extraSum, extra) => extraSum + extra.price, 0);
             return sum + item.price + extrasPrice;
          }, 0);
       },
 
       // Zapisuje koszyk w localStorage
       saveCart() {
          localStorage.setItem("cart", JSON.stringify(this.cart));
       },
 
       // Pokazuje alert przez określony czas
       showSuccessAlert() {
          this.showAlert = true;
          setTimeout(() => {
             this.showAlert = false;
          }, 3000); // Ukryj alert po 3 sekundach
       }
    };
 }
 