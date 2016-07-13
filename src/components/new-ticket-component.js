var NewTicketComponent = Vue.extend({
    template: `
        <div is="menu-component"></div>
        <div>
            <h1>Novo Chamado</h1>
        </div>`,
    components: {
        'menu-component': MenuComponent
    }
});
Vue.component('new-ticket-component', NewTicketComponent);