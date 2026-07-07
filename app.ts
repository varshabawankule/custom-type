//1 custom type

type user={
    email: string;
    fullName: string;
    address: string;
    userName: string;
    age?:number 
}


let user1 : user = {
    email:'jhon@gmail.com',
    fullName: 'Jhon Doe',
    address: 'Pune',
    userName: 'Jhon',
    
}

let user2 : user= {
    email: 'jen@gmail.com',
    fullName: 'Jen Doe',
    address: 'Nagpur',
    userName: 'Jen',
    age: 22
}


let usersArr: Array<user> = [user1, user2]

let skills: Array<string>= ['html', 'css', 'js', 'Angular', 'Ts']

let ages: Array<number>= [12, 13, 14, 15, 16, 17, 18]



//2

type person = {
  name: string;
  age: number;
  isStudent: boolean | null
};

const person1:person= {
  name: "Rahul",
  age: 22,
  isStudent: true,
}



const person2: person = {
  name: "Rahul",
  age: 22,
  isStudent: true,
};

//3
type book = {
  title: string;
  pages: number;
  author: string;
};

const book1:book= {
  title: "Atomic Habits",
  pages: 320,
  author: "James Clear",
};

const book2:book = {
  title: "Atomic Habits",
  pages: 320,
  author: "James Clear",
}


//4
type mobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 75000,
};

const mobile1: mobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 75000,
};

const mobile2 :mobile= {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 75000,
};


//6
type product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags: string[]
};

const product1: product= {
  id: 101,
  name: "Laptop",
  price: 79999,
  inStock: true,
  tags: ["electronics", "computer"],
};


//7
type student ={
    id: number;
    name: string;
    age:number;
    isPassed: boolean;
}

const student1: student= {
  id: 1,
  name: "Aman",
  age: 20,
  isPassed: true,
};


//8

type users= {
  name: string;
  email: string | null,
};

const users1:users = {
  name: "Rahul",
  email: null,
};


//9
type employee = {
  id: number;
  salary: number | null,
};

const employee1: employee = {
  id: 101,
  salary: 100000
};

//10

type order = {
  orderId: string;
  coupon: number | null;
};

const order1:order = {
  orderId: "ORD101",
  coupon: null,
};


