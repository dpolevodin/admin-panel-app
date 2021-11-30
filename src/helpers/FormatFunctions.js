export const formatDate = (dateString) =>
  new Date(dateString).toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

export const formatSum = (sum) => sum === 0 ? "-" : `${sum.toLocaleString()} ₽`

export const formatCount = (count) => count === 0 ? "-" : count.toLocaleString()
