// Day 14:Classes
// Tasks/Activities:

// Activity 1: Class Defination
// Task 1: Define a class person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message
   class Person{
	  constructor(name,age ,firstName,lastName){
		this.name=name; 
		this.age=age;
		this.firstName=firstName;
		this.lastName=lastName;

	  }
	  greeting(){
		console.log(`hello ${this.name} and age is ${this.age}`);
	  }
	  // Task 2: Add a method to your person class that update the age Property and log the update age.
         updateDetails(name, age ){
				this.name=name;
				this.age=age;
				console.log(`person details updated ${this.name} ${this.age}`);		
		 }
		 static genericGreeting(){
			console.log("Hello all static greeting");
		 }
		 getter(){
			console.log(`Full Name is ${this.firstName} ${this.lastName}`)
		 }
		 setter(firstName,lastName){
			this.firstName=firstName;
			this.lastName=lastName;
			console.log(`person details updated full name is ${this.firstName} ${this.lastName}`);
		 }

   }
  
   const person1=new Person();
   person1.name="khushi"
   person1.age=22
   person1.greeting();
   person1.updateDetails("shruti");

// Activity 2: Class Inheritance 
// Task 3: Define a class student that extend the person class Add a Property StudentID and a method to return the student ID . Create an instance of the Student class and log the StudentID
class Student extends Person{
	static studentCount=0;
   constructor( name,age,studentID ){
		super(name, age);
		this.studentID=studentID;
		Student.studentCount++;

	}
	returnStudentDetails(){
		return {
			name:this.name , 
			age:this.age ,
			studentID:this.studentID
			
		}
	}
	// Task 4: Override the greeting method in the student class to include the student ID in the message . Log the overridden greeting message
       greeting(){
		console.log(`hello ${this.name} and age is ${this.age} and student Id ${this.studentID}`)
	   }

	   static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}
const student1=new Student('khushi',23,'1235');
console.log(student1.returnStudentDetails());
student1.greeting();

 // Activity 3: Static Methods and Properties
// Task 5: Add a static method to the person class that return a generic greeting message . Call this static method without creating an instance of the class and log the message.

            Person.genericGreeting()
// Task 6: Add a static property to the student class to keep track of the number of students created.increment this property in the constructor and log the total number of students
          console.log(Student.getStudentCount()); 
// Activity 4: Getters & Setters
// Task 7: Add a getter method to the person class to return the full name (assume a firstName and Lastname property). Create an instance and log the full name using getter
person1.firstName="khushi";
person1.lastName="Rathore";
person1.getter();
// Task 8: Add a setter method to the person class to update the name properties (Firstname and lastname).update the name using the setter and log the updated full name
 person1.setter("ruhi","mahajan")
// Activty 5: Private Fields(optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money . Ensure that the balance can only be updated through the methods
        class Account {
		  #balance=0;
		  constructor(ammount){
			this.ammount=ammount
		  }
			depositMoney(ammount){
				this.#balance+=ammount;
				console.log(`your account balance is ${this.#balance}`)
			}
			withdrawMoney(ammount){
				if(ammount>this.#balance){
					console.log("you does not have sufficient balance")
				}
				else{
                 this.#balance-=ammount
				 console.log(`your account balance is ${this.#balance}`)

				}

			}
		}
// Task 10: Create an instance of the Account class and test the Deposit and withdraw methods , loging the balance after each operation
const account1=new Account();
account1.depositMoney(4000);
account1.depositMoney(8000);
account1.withdrawMoney(2000);
account1.withdrawMoney(12000);
account1.depositMoney(6000);
account1.withdrawMoney(4000);
