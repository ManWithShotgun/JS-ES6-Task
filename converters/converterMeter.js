import AbstractConverter from './AbstractConverter.js';
export default class ConverterMeter extends AbstractConverter{
  getSize(sizeName){
    return getSize(sizeName);
  };
}

let sizeMap={
  m:0.001,
  c:0.01,
  k:1000
};

function getSize(sizeName){
  if(sizeName.startsWith('m')){
    return sizeMap.m;
  }
  if(sizeName.startsWith('c')){
    return sizeMap.c;
  }
  if(sizeName.startsWith('k')){
    return sizeMap.k;
  }
  return 1;
};
