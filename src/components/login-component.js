var LoginComponent = Vue.extend({
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
                flexDirection: 'column'
            },
            input: {
                width: '300px',
            }
        }
    },
    template: `
        <div v-bind:style="[component]" class="column">
            <p class="text-center">
                <img src="assets/images/logo_hor_color.png" alt="FireDesk - Service Desk Tools">
            </p>
            <form>
                <fieldset>
                    <label for="email">E-mail</label>
                    <input type="email" placeholder="E-mail" id="email" v-bind:style="[input]" >

                    <label for="password">Senha</label>
                    <input type="password" placeholder="Senha" id="password">

                    <p class="text-center">
                        <input class="button-primary" type="button" value="Entrar" v-on:click="login">
                    </p>
                </fieldset>
            </form>
        </div>`,
    methods: {
        login: function () {
            rootComponent.currentView = 'my-tickets-component'
        }
    }
});
Vue.component('login-component', LoginComponent);