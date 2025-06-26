export const code = () => {
    type Pizza = {
        id: number;
        name: string;
        price: number;
    };

    type Order = {
        id: number;
        pizza: Pizza;
        status: "Ordered" | "Completed";
    };

    let cashInRegister: number = 100;
    const orderQueue: Order[] = [];
    let menuId = 1;
    let orderId = 1;

    const menu: Pizza[] = [
        { id: menuId++, name: "BBQ", price: 499 },
        { id: menuId++, name: "Margherita", price: 299 },
        { id: menuId++, name: "Beef", price: 699 },
        { id: menuId++, name: "Veggie", price: 450 },
        { id: menuId++, name: "Seafood", price: 850 },
    ];

    // Add to Array;
    function addToArray<Type>(array: Type[], item: Type): Type[] {
        array.push(item);
        return array;
    }
    addToArray<Pizza>(menu, { id: menuId++, name: "Rice", price: 20 });
    addToArray<Order>(orderQueue, {
        id: orderId++,
        pizza: menu[2],
        status: "Ordered",
    });

    // Adding New Pizza;
    const addNewPizza = (obj: Omit<Pizza, "id">): Pizza => {
        const newItem = {
            id: menuId++,
            ...obj,
        };
        menu.push(newItem);
        return newItem;
    };

    // HandleOrder;
    const placeOrder = (pizza: Pizza): Order | undefined => {
        const item = menu.find(
            (item) => item.name.toLowerCase() === pizza.name.toLowerCase()
        );
        if (item) {
            cashInRegister += item.price;
            const newOrder: Order = {
                id: orderId++,
                pizza: item,
                status: "Ordered",
            };
            orderQueue.push(newOrder);
            return newOrder;
        }
    };

    // Manage Order;
    const completeOrder = (orderId: number): Order | undefined => {
        const item = orderQueue.find((item) => item.id === orderId);
        if (item) {
            item.status = "Completed";
            return item;
        }
    };

    // Type narrowing;
    const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
        if (typeof identifier === "string") {
            const item = menu.find(
                (item) =>
                    item.name.toLocaleLowerCase() ===
                    identifier.toLocaleLowerCase()
            );
            if (item) return item;
        } else if (typeof identifier === "number") {
            const item = menu.find((item) => item.id === identifier);
            if (item) return item;
        } else {
            throw new TypeError("Input Must Be Either String or Number!");
        }
    };

    // Type Assign;
    let myName: string = "Nuru";
    let numberOfWheels: number = 4;
    let isStudent: boolean = true;

    // Custom Types;
    type Address = {
        city: string;
        country: string;
    };

    type Person = {
        name: string;
        age: number;
        isStudent: boolean;
        address?: Address;
    };

    let person1: Person = {
        name: "Siam",
        age: 20,
        isStudent: true,
        address: {
            city: "Pabna",
            country: "BD",
        },
    };

    let person2: Person = {
        name: "Ashik",
        age: 20,
        isStudent: true,
    };

    let person: Person[] = [person1, person2];

    // Function Return Types;
    type User = {
        id: number;
        userName: string;
        role: "guest" | "member" | "admin";
    };

    let userId = 1;
    const users: User[] = [
        { id: userId++, userName: "Siam", role: "member" },
        { id: userId++, userName: "Ashik", role: "member" },
        { id: userId++, userName: "Nuru", role: "guest" },
    ];

    const fetchUser = (name: string): User => {
        const user = users.find(
            (user) =>
                user.userName.toLocaleLowerCase() === name.toLocaleLowerCase()
        );
        if (!user) {
            throw new Error(`User ${name} Not Found!`);
        }
        return user;
    };

    // Partial;
    type UpdatedUser = Partial<User>;

    const updateUser = (id: number, updates: UpdatedUser): void => {
        const user = users.find((item) => item.id === id);
        if (!user) return;
        Object.assign(user, updates);
    };

    // Omit;
    const addUser = (newUser: Omit<User, "id">): User => {
        const user: User = {
            id: userId++,
            ...newUser,
        };
        users.push(user);
        return user;
    };

    // Generics;
    const gameScores = [14, 21, 33, 42, 59];
    const favoriteThings = [
        "raindrops on roses",
        "whiskers on kittens",
        "bright copper kettles",
        "warm woolen mittens",
    ];
    const voters = [
        { name: "Siam", age: 20 },
        { name: "Ashik", age: 20 },
    ];

    function getLast<Type>(array: Type[]): Type | undefined {
        return array[array.length - 1];
    }
};
