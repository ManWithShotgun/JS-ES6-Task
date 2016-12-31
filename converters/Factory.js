import ConverterMeter from './ConverterMeter';
import ConverterGram from './ConverterGram';
import ConverterA from './ConverterA';
export default class Factory {
  constructor(){ //without lazy load
    this.converterMeter=new ConverterMeter();
    this.converterGram=new ConverterGram();
    this.converterA=new ConverterA();
  }

  getInstance(item){
    if(getUnit(item.from)!=getUnit(item.to)){
      console.log('Incorrect units');
      return;
    };
    switch(getUnit(item.from)){
      case unitsMap.m:
        // console.log('m');
        this.converterMeter.setItem(item);
        return this.converterMeter;
        break;
      case unitsMap.g:
        // console.log('g');
        this.converterGram.setItem(item);
        return this.converterGram;
        break;
      case unitsMap.A:
        // console.log('A');
        this.converterA.setItem(item);
        return this.converterA;
        break;
    }
  }
}

let unitsMap={
  m:'m',
  g:'g',
  A:'A'
};
function getUnit(unitName){
  if(unitName.endsWith(unitsMap.m)){
    return unitsMap.m;
  }
  if(unitName.endsWith(unitsMap.g)){
    return unitsMap.g;
  }
  if(unitName.endsWith(unitsMap.A)){
    return unitsMap.A;
  }
};
