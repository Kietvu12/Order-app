import React from 'react';
import { food } from '../../../assets/assets';
export default function SignatureMenu() {
    const menuItems = [
        {
            name: "Healthy Oatmeal",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "14.10",
            image: food.food_1
        },
        {
            name: "Healthy Oatmeal",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "14.10",
            image: food.food_1
        },
        {
            name: "Shrimp and Vegan",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "15.30",
            image: food.food_1
        },
        {
            name: "Tomato Cucumber",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "14.10",
            image: food.food_1
        },
        {
            name: "Chicken Galantine",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "15.30",
            image: food.food_1
        },
        {
            name: "Shrimp and Vegan",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "15.30",
            image: food.food_1
        },
        {
            name: "Sald Salmon",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "16.30",
            image: food.food_1
        },
        {
            name: "Sald Salmon",
            ingredients: "Salmon / Citrus / Honey / Spice",
            price: "16.30",
            image: food.food_1
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <span className="text-[#FF6B00] font-medium">Special Menu</span>
                <h2 className="text-4xl font-bold mt-2">Signature Dish.</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    All in good taste elementum integer enim neque volutpat ac.
                </p>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis enim.
                    Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between relative overflow-hidden">
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.ingredients}</p>
                            </div>
                        </div>

                        {/* Price Tag */}
                        <div className="absolute right-0 top-0 h-full w-24 flex items-center justify-center">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B00] transform rotate-45 translate-x-24 -translate-y-24"></div>
                            <span className="relative text-white font-medium z-10">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

