const employees = [
    {
        id: 1,
        name: "Anoop",
        department: "Frontend",
        salary: 28000,
        active: true
    },
    {
        id: 2,
        name: "Rahul",
        department: "Backend",
        salary: 45000,
        active: true
    },
    {
        id: 3,
        name: "Arjun",
        department: "Frontend",
        salary: 25000,
        active: false
    },
    {
        id: 4,
        name: "Andrew",
        department: "QA",
        salary: 27000,
        active: true
    }
];


function generateReport(employees) {

    const activeEmployees = employees.filter(employee => {

        return employee.active === true;

    });


    const processedEmployees = activeEmployees.map(employee => {

        if (employee.salary < 30000) {

            employee.salary = employee.salary * 1.10;

        }

        return {
            name: employee.name,
            department: employee.department,
            salary: employee.salary
        };

    });


    processedEmployees.sort((a, b) => {

        return a.salary - b.salary;

    });


    const totalSalary = processedEmployees.reduce(
        (total, employee) => {

            return total + employee.salary;

        },
        0
    );


    return {
        employees: processedEmployees,
        totalSalary: totalSalary
    };
}


const report = generateReport(employees);

console.log("REPORT");
console.table(report.employees);

console.log("TOTAL SALARY:", report.totalSalary);

console.log("ORIGINAL EMPLOYEES");
console.table(employees);