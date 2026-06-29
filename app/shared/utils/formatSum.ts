export const formatSum = (sum: number | string) => {
    const converted = typeof sum == "number" ? sum : parseFloat(sum)

    return converted.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
    });
};