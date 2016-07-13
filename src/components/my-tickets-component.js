var MyTicketsComponent = Vue.extend({
    data: function() {
        return {
            component: {                
                display: 'flex',
                minHeight: '100vh',
                width: '100%',
                margin: '0',
                padding: '0',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            },
            input: {
                width: '300px',
            }
        }
    },
    template: `
        <div v-bind:style="[component]">
            <div is="menu-component"></div>
            <div>        
                <h1>Meus Chamados</h1>
            </div>
        </div>`,
    components: {
        'menu-component': MenuComponent
    }
});
Vue.component('my-tickets-component', MyTicketsComponent);