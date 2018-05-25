 class Hello {
	constructor(){
	return this;
	}

  sayHey(){
  return 'Hello World!';
  }
}

saludador = new Hello; //creo el objeto 



//suite 
describe('Testing Class Hello, Method SayHey()', function () {

  it('This is a positive case', function () {
    expect(saludador.sayHey()).toBe('Hello World!');
  });




  var a = 'hey';
    it("This is negative case", function() {
    expect(saludador.sayHey()).not.toBe(a);
  });

 
});




