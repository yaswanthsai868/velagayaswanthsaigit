var EmployeeList = /** @class */ (function () {
    function EmployeeList() {
        this.list = [];
    }
    EmployeeList.prototype.addList = function (x) {
        this.list.push(x);
    };
    EmployeeList.prototype.displayList = function () {
        this.list.forEach(function (x) { x.print(); });
    };
    return EmployeeList;
}());
var Employee = /** @class */ (function () {
    function Employee(eno, name, age, basic) {
        this.eno = eno;
        this.name = name;
        this.age = age;
        this.basic = basic;
    }
    Employee.prototype.print = function () {
        console.log("eno is", this.eno);
        console.log("ename is", this.name);
        console.log("age is", this.age);
        console.log("salary is", this.basic + (this.basic * 0.15) + (this.basic * 0.1));
    };
    return Employee;
}());
var x = new EmployeeList();
x.addList(new Employee(101, "rohith", 21, 100000));
x.addList(new Employee(102, "rohith", 22, 1000000));
x.addList(new Employee(103, "rohith", 23, 10000000));
x.addList(new Employee(104, "rohith", 24, 100000000));
x.displayList();
