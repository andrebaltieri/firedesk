var MenuComponent = Vue.extend({
    template: `
        <div class="row">
            <img src="assets/images/icons/icon-72x72.png" alt="FireDesk - Service Desk Tools" width="32" height="32">
            <p class="text-center">
                <a class="button button-clear"><i class="fa fa-ticket fa-2x"></i></a>
                <a class="button button-clear"><i class="fa fa-plus fa-2x"></i></a>
                <a class="button button-clear"><i class="fa fa-power-off fa-2x"></i></a>
            </p>
        </div>`
    
});
Vue.component('menu-component', MenuComponent);