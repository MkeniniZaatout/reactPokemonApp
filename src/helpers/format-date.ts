const formatDate = (date: Date = new Date()): string => {
  console.log(date);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  }

export default formatDate;