function salary(input){
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let isHaveSalary = true;

    for (let i = 1; i <= openTabs; i++){
        let currentTab = input[index];
        index++
        switch(currentTab) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break
        }
        if(salary <= 0) {
            isHaveSalary = false;
            console.log('You have lost your salary.');
            break;
        }
    }
    if(isHaveSalary){
        console.log(Math.trunc(salary))
    }
    
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



