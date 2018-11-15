require('./bootstrap');
import Vue from 'vue';
import { Form, HasError, AlertError } from 'vform'
import VueProgressBar from 'vue-progressbar'
import Snotify, { SnotifyPosition } from 'vue-snotify'
window.Form = Form
const SnotifyOptions = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}
Vue.use(Snotify, SnotifyOptions)
const VueProgressBarOptions = {
    color: '#50d38a',
    failedColor: '#87111d',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
Vue.use(VueProgressBar, VueProgressBarOptions);

Vue.component('customer-component', require('./components/CustomerComponent.vue'));
Vue.component('pagination', require('./components/partial/PaginationComponent.vue'));

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
const app = new Vue({
    el: '#app'
});
