import Converter from './converter.js'

/**
Format:
m - meter: mm cm m km;
g - gram: mg g kg Mg;
A - amper: mA A kA MA;
*/
let conv=new Converter();
conv.convert({value:50, from:'cm', to: 'm'});
conv.convert({value:3, from:'kg', to: 'mg'});
conv.convert({value:8, from:'MA', to: 'kA'});
conv.convert([{value:54, from:'m', to: 'km'}, {value:12, from:'MA', to: 'kA'}, {value:35, from:'MA', to: 'mA'}]);
