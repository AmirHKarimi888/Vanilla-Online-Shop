class Header {
    header = document.querySelector("header");

    render() {
        this.clear();
        this.generateMarkup();
    }

    clear() {
        this.header.innerHTML = "";
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
        `

        this.header.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new Header();