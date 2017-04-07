import '../css/common.css';
import Layer from '../components/layer/layer.js';

const App = function(){
    var layer = new Layer();
   var dom =document.getElementById('app');
    dom.innerHTML = layer.tpl;
}


new App();