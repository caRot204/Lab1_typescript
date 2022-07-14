import { get } from "../api/pokemons"
import Header from "../components/header"
import Pokemon from "../models/Pokemons"

const DetailPage = {
    render: async (id: number) => {
        const data = await get(id)
        const poke: Pokemon = data.data
        const type: any = poke.type
        const abilities: any = poke.abilities

        return `
        ${Header.render()}
        <div class="mx-auto container m-3">
            <div class="mx-auto w-1/6  font-bold rounded-md bg-blue-500 text-white py-10">
                <img class="mx-auto w-1/2 drop-shadow-md" src="${poke.image}"/>
                <div class="mx-5">
                    <h1 class="">Name: ${poke.name}</h1>
                    <h1 class="">Abilities: 
                        ${abilities.map((abi: any) => `
                            ${abi.ability.name}
                        `)}
                    </h1>
                    <h1 class="flex">Type: 
                        ${type.map((t: any) => `
                            ${t.type.name}
                        `).join()}
                    </h1>
                    <h1 class="">Height: ${poke.height}</h1>
                    <h1 class="">Weight: ${poke.weight}</h1>
                </div>
            </div>
        </div>
        `
    }
}
export default DetailPage