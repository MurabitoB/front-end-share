import $ from 'jquery';
import css from './style.css'
import { Utils } from './utils';

console.log(Utils.first('a'));

$('.btn').on('click', () => {
    alert('click');
})