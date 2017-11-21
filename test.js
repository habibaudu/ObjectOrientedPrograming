   import chai, { expect } from 'chai';
   import Car from './app/Vehicle.js';
   const should = chai.should();
	
describe("Test cases For the Car() class which inherite from a Vehicle class",()=> {
      it("should return 'Vehicle_Name' if no name is specified",()=> {
       
        const honda = new Car();
        expect(honda.name).to.equal("Vehicle_Name");
      });   
      it("should return 'Vehicle_Name' if irregular characters are put",()=> {
       
        const honda = new Car("##@$%&*");
        expect(honda.name).to.equal("Vehicle_Name");
      });  

      it("should return 'Vehicle_Model' if no Model is specified",()=> {
       
        const honda = new Car();
        expect(honda.model).to.equal("Vehicle_Model");
      });

      it(" 'honda' should be an instance of 'Car' ",()=> {
       
        const honda = new Car("Civic","honda");
        expect(honda).to.be.an.instanceof(Car);;
      });

       it(" 'honda' should be an Object ",()=> {
       
        const honda = new Car("Civic","honda");
        expect( honda ).to.be.an.instanceof(Object);
      });

       it("if Car name is 'porshe' or 'Eagle' number of doors should be 2",()=> {
       
        const porshe = new Car("porshe");
        const Eagle = new Car("Eagle");
        expect(porshe.numOfDoors).to.equal(2);
        expect(Eagle.numOfDoors).to.equal(2);
      });

       it("if Car name is 'Tacoma' or 'Fiesta' number of doors should be 4",()=> {
       
        const Tacoma = new Car("Tacoma");
        const Fiesta = new Car("Fiesta");
        expect(Fiesta.numOfDoors).to.be.equal(4);
        expect(Tacoma.numOfDoors).to.be.equal(4);
      });

       it("if Car name is 'Fiat' or 'Mandiesel' type should be 'Trailer'",()=> {
       
        const Fiat = new Car("Fiat");
        const Mandiesel = new Car("Mandiesel");
        expect(Mandiesel.type).to.be.equal("Trailer");
        expect(Fiat.type).to.be.equal("Trailer");
      });
       it("if Car name is 'Fiat' or 'Mandiesel' number of wheels should be 10",()=> {
       
        const Fiat = new Car("Fiat");
        const Mandiesel = new Car("Mandiesel");
        expect(Mandiesel.numOfWheels).to.be.equal(10);
        expect(Fiat.numOfWheels).to.be.equal(10);
      });

       it("The else block should kick in for type,numOfWheels and numOfDoors if vehicle name isn't specified",()=> {
       
        const Noname = new Car();
        expect(Noname.type).to.be.equal("Vehicle_type");
         expect(Noname.numOfWheels).to.be.equal(4);
          expect(Noname.numOfDoors).to.be.equal(4);
      });


       it("when startENGINE is called engineON should be true",()=> {
       
        const honda = new Car("honda");
        honda.startENGINE();
        expect(honda.engineON).to.be.true;
      });

       it("when stopENGINE is called engineON should be false",()=> {
       
        const honda = new Car("honda");
        honda.stopENGINE();
        expect(honda.engineON).to.be.false;
      });

       it("without calling Accelerate() speed should be 0km/h",()=> {
       
        const honda = new Car("honda");
        expect(honda.speed).to.be.equal("0 km/h");
      });

        it("After calling Accelerate() speed should be 240km/h",()=> {
       
        const honda = new Car("honda");
        honda.Accelerate();
        expect(honda.speed).to.be.equal("240km /h");
      });
	  
	  it("Testing for polymorphism",()=> {
       
        const Fiesta = new Car("Fiat");
        const porshe = new Car("porshe");
        expect(Fiesta).to.be.an.instanceof(Car);
        expect(porshe).to.be.an.instanceof(Car);
      });


});



