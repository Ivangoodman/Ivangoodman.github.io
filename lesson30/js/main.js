/// ===============================       Task ------->  1 =============================================
let page = document.getElementById("task1");
let textfield = document.getElementById("textfield");


document.addEventListener('keydown', function (event) {
    if (event.key == '+' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        textfield.style.display = "none";
        page.style.display = "block";
        page.textContent = `${textfield.value}`;
    }

    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        textfield.style.display = "block";
        page.style.display = "none";
        event.preventDefault();
        textfield.value = `${page.textContent}`;

    }
});
//=============== END OF TASK 1 =======================


// ===========         Task 2         =============
// clas of object User
class User {
    constructor(name, age, country) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
};
// list of users
let usersList = [
    new User("Maria Anders", 31, "Germany"),
    new User("Francisco Chang", 23, "Mexico"),
    new User("Roland Mendel", 26, "Austria"),
    new User("Helen Bennett ", 30, "UK"),
    new User("Yoshi Tannamuri", 28, "Canada"),
    new User("Giovanni Rovelli", 25, "Italy")
]
// placeHolder for list 
let table = document.body.children[1].children[1];

//class for list description  and sort
class UserTable {
    constructor(arrUsr, plaseHolder) {
        this.userArray = arrUsr;
        this.plaseHolder = plaseHolder;

    }
    getHtml() {
        this.plaseHolder.innerHTML = "";
        for (let i of this.userArray) {
            this.plaseHolder.innerHTML += `   <tr  >
            <td> ${i.name}</td>
            <td>${i.age}</td>
            <td> ${i.country}</td>
        </tr>`;
        }

    }
    sortInArray(itemName) {
        this.userArray.sort(function (a, b) {
            if (a[itemName] > b[itemName]) {
                return 1;
            }
            if (a[itemName] < b[itemName]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        this.userArray.forEach(element => {
            console.log(element)
        });
    }


}


// new table that contains users in table
let Agroup = new UserTable(usersList, table);
Agroup.getHtml();

let age = document.getElementById("userAge");
age.addEventListener('click', function (event) {

    Agroup.sortInArray("age");
    Agroup.getHtml();

});

let user = document.getElementById("userName");
user.addEventListener('click', function (event) {

    Agroup.sortInArray("name");
    Agroup.getHtml();

});
let country = document.getElementById("userCountry");;
country.addEventListener('click', function (event) {

    Agroup.sortInArray("country");
    Agroup.getHtml();

});

//=======================  END OF TASK 2    =========================