function CurrentDate() {
  const currentDate = new Date();
  const options = { month: "long" };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        color: "#2196f3",
        fontSize: "20px",
        fontWeight: "bolder",
      }}
    >
      <p>
        {currentDate.toLocaleDateString(undefined, options).toLocaleUpperCase()}
      </p>
    </div>
  );
}

export default CurrentDate;
