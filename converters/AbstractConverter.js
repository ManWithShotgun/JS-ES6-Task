export default class AbstractConverter{
  setItem(value){
    this.item=value;
  };
  calc(){
    this.removeUnits()
    // console.log(this.getSize(this.item.from));
    // console.log(this.getSize(this.item.to));
    let coef=this.getSize(this.item.from)/this.getSize(this.item.to);
    this.item.result = this.item.value*coef;
  };
  removeUnits(){
    this.item.from=this.item.from.slice(0,-1);
    this.item.to=this.item.to.slice(0,-1);
  };
  getSize(sizeName){};//abstract method
}
