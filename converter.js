import Factory from './converters/Factory';
export default class Converter{
  constructor(){
    this.factory=new Factory();
  };
  convert(item){
    if(Array.isArray(item)){
      item.map(this.convertItem.bind(this));
    }else{
      this.convertItem(item);
    }
  };
  convertItem(item){
    let to=item.to;
    console.log(`Convert ${item.value} ${item.from} to ${item.to}`);
    let converter=this.factory.getInstance(item);
    converter.calc();
    console.log(`Result: ${item.result}${to}`);
  };
}
