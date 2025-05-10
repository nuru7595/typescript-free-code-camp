"use client";
import { useState } from "react";

export default function Pizza() {
    const [cash, setCash] = useState(100);
    const [menu, setMenu] = useState([
        { name: "Margherita", price: 8 },
        { name: "Pepperoni", price: 10 },
        { name: "Hawaiian", price: 10 },
        { name: "Veggie", price: 9 },
    ]);
    const [orderQueue, setOrderQueue] = useState([]);
    const [newPizzaName, setNewPizzaName] = useState("");
    const [newPizzaPrice, setNewPizzaPrice] = useState("");
    const [selectedPizza, setSelectedPizza] = useState("");

    const addNewPizza = () => {
        if (!newPizzaName || !newPizzaPrice) return;
        setMenu((prev) => [...prev, { name: newPizzaName, price: parseFloat(newPizzaPrice) }]);
        setNewPizzaName("");
        setNewPizzaPrice("");
    };

    const placeOrder = (e) => {
        e.preventDefault();
        const pizza = menu.find((x) => x.name === selectedPizza);
        if (!pizza) {
            alert("Pizza not found!");
            return;
        }

        setOrderQueue((prev) => [...prev, { name: pizza.name, status: "Ordered" }]);
        setCash((y) => y + pizza.price);
    };

    return (
        <div className="flex flex-col gap-3">
            <p className="text-center border-b-2 w-36 mx-auto">Add Item</p>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Pizza name . . ."
                    className="w-full border border-white rounded-md py-1 px-3 outline-none"
                    value={newPizzaName}
                    onChange={(e) => setNewPizzaName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Pizza price . . ."
                    className="w-full border border-white rounded-md py-1 px-3 outline-none"
                    value={newPizzaPrice}
                    onChange={(e) => setNewPizzaPrice(e.target.value)}
                />
                <button onClick={addNewPizza}>Add Item</button>
            </div>

            <p className="text-center border-b-2 w-36 mx-auto">Our Menu</p>
            <div className="border border-white rounded-md overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white bg-sky-600">
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <form onSubmit={placeOrder} className="flex flex-col gap-2">
                <select
                    value={selectedPizza}
                    onChange={(e) => setSelectedPizza(e.target.value)}
                    className="w-full bg-sky-400 p-2 rounded-md h-10 outline-none"
                    required
                >
                    <option value="">Select a Pizza</option>
                    {menu.map((item, i) => (
                        <option key={i} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Place Order</button>
            </form>

            <p className="text-center border-b-2 w-36 mx-auto">Order Queue</p>
            <div className="border border-white rounded-md overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white bg-sky-600">
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderQueue.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-center border-b-2 w-36 mx-auto">Balance</p>
            <div>
                <h2 className="font-bold text-center">${cash}</h2>
            </div>
        </div>
    );
}
