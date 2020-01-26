class EmployeeList
{
    list:Array<Employee>=[];
    addList(x:Employee):void
    {
        this.list.push(x);
    }
    displayList():void
    {
        this.list.forEach(function(x:Employee){x.print();})
    }
}
class Employee
{
    constructor(private eno:number,private name:string,private age:number,private basic:number)
    {

    }
    print():void
    {
        console.log("eno is",this.eno);
        console.log("ename is",this.name);
        console.log("age is",this.age);
        console.log("salary is",this.basic+(this.basic*0.15)+(this.basic*0.1));
    }
}
let x=new EmployeeList();
x.addList(new Employee(101,"rohith",21,100000));
x.addList(new Employee(102,"rohith",22,1000000));
x.addList(new Employee(103,"rohith",23,10000000));
x.addList(new Employee(104,"rohith",24,100000000));
x.displayList();