import { getAll } from "../api/pokemons"
import Header from "../components/header";
import Pokemon from "../models/Pokemons";

const HomePage = {

    render: async () => {
        const data = await getAll()
        console.log(data.data);
        return `
        ${Header.render()}
        <h1 class="text-center font-bold text-2xl">Home</h1>
        <div class="grid grid-cols-5 container mx-auto">
            ${data.data.map((item: Pokemon) => `
            <a href="/pokemon/${item.id}" class="text-center">
                <img class="mx-auto" src="${item.image}"/>
                <p>${item.name}</p>
            </a>
            `).join('')}
        </div>
        
        `
    }
}
export default HomePage