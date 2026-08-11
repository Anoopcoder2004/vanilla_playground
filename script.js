const employees = [
    {
        id: 101,
        name: "Anoop",
        department: "Frontend",
        salary: 28000,
        active: true
    },
    {
        id: 102,
        name: "Rahul",
        department: "Backend",
        salary: 45000,
        active: false
    },
    {
        id: 103,
        name: "Arjun",
        department: "Frontend",
        salary: 32000,
        active: true
    },
    {
        id: 104,
        name: "Andrew",
        department: "Backend",
        salary: 25000,
        active: true
    },
    {
        id: 105,
        name: "John",
        department: "QA",
        salary: 29000,
        active: false
    },
    {
        id: 106,
        name: "David",
        department: "QA",
        salary: 27000,
        active: true
    }
];


function generateReport(data) {

    const activeEmployees = data.filter(employee => {
        return employee.active;
    });


    const processedEmployees = activeEmployees.map(employee => {

        const result = employee;

        if (employee.salary < 30000) {

            result.salary = employee.salary * 1.10;

        }

        return {
            id: result.id,
            name: result.name,
            department: result.department,
            finalSalary: result.salary
        };

    });


    processedEmployees.sort((a, b) => {

        return a.finalSalary < b.finalSalary;

    });


    const frontendEmployees = processedEmployees.filter(employee => {

        return employee.department = "Frontend";

    });


    return frontendEmployees;
}


const report = generateReport(employees);

console.log("FINAL REPORT");
console.table(report);

console.log("ORIGINAL DATA");
console.table(employees);