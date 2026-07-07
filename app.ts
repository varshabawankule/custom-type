//1 custom type

type user={
    email: string;
    fullName: string;
    address: string;
    userName: string;
    age:number
}


let user1 : user = {
    email:'jhon@gmail.com',
    fullName: 'Jhon Doe',
    address: 'Pune',
    userName: 'Jhon',
    age: 24

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
  isStudent: boolean;
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

