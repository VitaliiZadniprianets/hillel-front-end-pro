import Component from "@/plugins/component";

export default class Router {
    routes = [];
    originalPushState = null;

    constructor(routes) {
        console.log('---- start configuration Router Plugin ---');

        this.routes = routes;

        this.originalPushState = history.pushState;

        history.pushState = function (state, title, pathTo) {
            console.log('---- call pushState ---');

            if (typeof history.onpushstate === 'function') {
                history.onpushstate(state, title, pathTo);
            }
        };

        history.onpushstate = (state, title, pathTo) => {
            this.#updateView(pathTo);
            this.originalPushState.apply(history, [state, title, pathTo]);
        };
    }

    onInit() {
        console.log('---- start Router plugin -----');

        // При инициализации роутера отображаем текущий маршрут
        const currentPath = window.location.pathname;
        this.#updateView(currentPath);
    }

    #updateView(pathTo) {
        let ComponentSearched = this.#findComponent(pathTo);

        if (!(ComponentSearched instanceof Component)) {
            ComponentSearched = this.#findComponent('*');
        }

        this.#renderComponent(ComponentSearched);
    }

    #findComponent(pathTo) {
        return this.routes.find((route) => route.path === pathTo)?.component;
    }

    #renderComponent(Component) {
        const container = document.getElementById('app');
        if (!container) {
            throw new Error('Container with id "app" not found.');
        }

        const componentInstance = new Component();
        container.innerHTML = '';
        container.appendChild(this.#parseHTML(componentInstance[Symbol.toPrimitive]()));
    }

    #parseHTML(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        return template.content.firstChild;
    }
}
