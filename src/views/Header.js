class Header {
    header = document.querySelector("header");
    cart;

    render(cart) {
        this.cart = cart;
        this.generateMarkup();
        this.handleHeaderEvents();
    }

    clear() {
        this.header.innerHTML = "";
    }

    renderCart() {
        const markup = /*html*/
        `
        <div class="cartBackdrop fixed top-0 left-0 w-full h-screen z-50 bg-zinc-600/30 grid justify-center items-center">
        <div class="cart w-[400px] p-5 bg-zinc-100">
          ${
              this.cart?.length == 0 ?
              /*html*/`
              <p class="text-center">There is nothing in your cart yet!</p>
              <p class="text-center mt-2 text-zinc-500">Total price: 0 $</p>
              ` : 
              /*html*/`
              ${ this.cart.length == 1 ? `<p class="text-center">There is ${this.cart.length} item existing in your cart.</p>` : `<p class="text-center">There are ${this.cart.length} items existing in your cart.</p>`}
              <ul class="">
                ${
                    this.cart.map((product) => {
                        return(/*html*/`
                        <li class="">
                          
                        </li>
                        `)
                    }).join("")
                }
              </ul>
              `
          }
        </div>
      </div>
        `

        this.clearCart();
        this.header.querySelector(".cartContainer").insertAdjacentHTML("afterbegin", markup);
        this.handleHeaderEvents();
    }

    clearCart() {
        this.header.querySelector(".cartContainer").innerHTML = "";
    }

    handleHeaderEvents() {
        this.header.querySelector("#shoppingCartBtn").addEventListener("click", () => this.renderCart());

        if(this.header.querySelector(".cartBackdrop")) {
            this.header.querySelector(".cartBackdrop").addEventListener("click", () => this.clearCart());
        }

        if(this.header.querySelector(".cart")) {
            this.header.querySelector(".cart").addEventListener("click", e => e.stopPropagation());
        }


        this.header.querySelector(".addModalBackdrop").addEventListener("click", () => {
            if(this.header.querySelector(".addModalBackdrop").classList.contains("hidden")) {
                this.header.querySelector(".addModalBackdrop").classList.remove("hidden");
            } else {
                this.header.querySelector(".addModalBackdrop").classList.add("hidden");
            }
        })
    }

    showAddModal() {
        this.header.querySelector(".addModalBackdrop").classList.remove("hidden");
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <nav class="fixed top-0 left-0 w-full mx-auto text-center z-40 p-3 bg-zinc-100 grid grid-cols-4 items-center shadow-md">
            <div class="col-span-1 grid text-start">
              
           </div>

            <form class="col-span-2 flex grid-cols-2 mx-auto justify-center items-center">
              <input id="searchInput" class="h-[30px] bg-zinc-50 border border-zinc-400 rounded-l-lg" />
              <button id="searchBtn" class="h-[30px] aspect-square border-t border-r border-b border-zinc-400 text-white rounded-r-md bg-cyan-500"><i class="fa fa-search"></i></button>
           </form>


           <div class="col-span-1 text-end">
             <button id="shoppingCartBtn" class=" h-[30px] aspect-square border border-zinc-400 text-white rounded bg-cyan-500"><i class="fa fa-shopping-cart"></i></button>
           </div>
        </nav>

        <div class="cartContainer">
          
        </div>

        <div class="addModalBackdrop fixed top-0 left-0 z-50 w-full h-screen grid justify-center items-center bg-zinc-600/30 hidden">
          <div class="addModal p-5 w-[400px] bg-zinc-100 text-center">
            <i class="fa fa-check-circle-o text-7xl text-green-700"></i>
            <p class="text-center mt-5 text-lg">Item was successfully added to your cart!</p>
          </div>
        </div>
        `

        this.clear();
        this.header.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new Header();