import instance from "./config"

export const getAll = () => {
    return instance.get('/pokemons')
}
export const get = (id: number) => {
    return instance.get(`/pokemons/${id}`)
}