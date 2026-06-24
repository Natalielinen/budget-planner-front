export const formatSum = (sum: number) => {
    return sum.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
    });
};