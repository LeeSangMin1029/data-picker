const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

export { getCurrentDate };
