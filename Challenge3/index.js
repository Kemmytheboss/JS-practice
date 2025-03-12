function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.15; 
    const nhifDeduction = 1000; 
    const nssfDeduction = 200; 

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return {
        grossSalary,
        tax,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

// Example usage:
let basicSalary = 50000;
let benefits = 10000;
let salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
