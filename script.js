let success = false;
const code = 1234;

for (let i = 0; i < 3; i++) {
    let input = Number(prompt(`Attempt ${i + 1}. Input your PIN-code: `));

    if (input == code) {
        success = true;
        let totalWithdraw = 0;
        let totalDeposit = 0;
        let balance = 1000;
        let flag = true;
        let opCount = 0;
        const USD_course = 1.7;
        const EUR_course = 1.98;

        while (flag == true) {
            let choice = Number(prompt(
                "Choose an operation:\n" +
                "1 - Balance\n" +
                "2 - Withdraw\n" +
                "3 - Deposit\n" +
                "4 - Balance in USD and EUR\n" +
                "0 - Exit"
            ));

            switch (choice) {
                case 1:
                    alert(`Your balance is ${balance} AZN`);
                    break;
                case 2:
                    const withdraw = Number(prompt("Input amount for withdraw (Today we can available to give you only amount that divide to 5): "));
                    const commission = withdraw > 500 ? withdraw * 0.01 : 0;

                    if (withdraw > 0 && withdraw % 5 == 0 && withdraw + commission <= balance && totalWithdraw + withdraw <= 2000) {
                        balance = balance - withdraw - commission;
                        totalWithdraw += withdraw;
                        opCount++;
                    }
                    else {
                        alert("ERROR!")
                    }
                    break;
                case 3:
                    const deposit = Number(prompt("Input deposit amount: "));
                    if (deposit > 0 && deposit % 5 == 0) {
                        balance = balance + deposit;
                        totalDeposit = totalDeposit + deposit;
                        opCount++;
                    }
                    else {
                        alert("Deposit must be bigger than 0 and dividible on 5!")
                    }
                    break;
                case 4:
                    alert(`USD: ${(balance / USD_course).toFixed(2)} | EUR: ${(balance / EUR_course).toFixed(2)}`);
                    break;
                case 0:
                    alert(`You withdrawed today: ${totalWithdraw}\n` +
                      `You deposited todat: ${totalDeposit}\n` +
                      `Total operations ${opCount}`
                    );
                    flag = false;
                    i = 4;
                    break;
                default:
                    alert("You entered wrong choice!");
            }
        }
    }
}

if (success) {
    alert("Exiting...")
}
else {
    alert("You entered wrong password 3 times! Your card is blocked!")
}


