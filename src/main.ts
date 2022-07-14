import Navigo from "navigo"
import HomePage from "./page"
import DetailPage from "./page/detailPage"
import './index.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const routes = new Navigo('/')

type componentBase = {
    render: (id: any) => any
}
const print = async (component: componentBase, id: componentBase) => {
    app.innerHTML = await component.render(id)
}

routes.on({
    '/': () => print(HomePage),
    '/pokemon/:id': (data: any) => {
        const id: number = +data.data.id;
        console.log(id);
        print(DetailPage, id)
    }
})
routes.resolve()