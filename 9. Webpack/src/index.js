import $ from 'jquery';
import css from './style.scss'
import { Utils } from './utils';

console.log(new Utils().first('a'));

$('.btn').on('click', () => {
    alert('click');
})