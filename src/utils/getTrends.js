function getLastSevenElements(array) {
    const lastSeven = array.slice(-7);
    const result = lastSeven.map(item => item.mood).join(", ");
    return result;
  }
  

export default getLastSevenElements;