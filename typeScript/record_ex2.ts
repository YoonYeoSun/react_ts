type Fruit = "apple" | "banana" | "orange";

const price: Record<Fruit, number> = {
    apple: 2000,
    banana: 1500,
    orange: 1000
}

console.log(`사과의 가격: ${price.apple}`);
for(const fruit in price) {
    console.log(`${fruit}: ${price[fruit as Fruit]}`);
}
