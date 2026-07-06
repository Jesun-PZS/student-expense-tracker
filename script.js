function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    let list = document.getElementById("expenseList");

    let item = document.createElement("li");

    item.textContent = name + " - " + amount + " BDT";

    list.appendChild(item);

}
