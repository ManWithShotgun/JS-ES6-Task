import AbstractConverter from './AbstractConverter.js';
export default class ConverterA extends AbstractConverter{
  getSize(sizeName){
    return getSize(sizeName);
  };
}

let sizeMap={
  m:0.001,
  k:1000,
  M:1000000
};

function getSize(sizeName){
  if(sizeName.startsWith('m')){
    return sizeMap.m;
  }
  if(sizeName.startsWith('M')){
    return sizeMap.M;
  }
  if(sizeName.startsWith('k')){
    return sizeMap.k;
  }
  return 1;
};
