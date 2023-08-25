
function CurrentDate() {
  const currentDate = new Date();

  return (
    <div>
      <h2>Today is</h2>
      <p>{currentDate.toDateString()}</p>
    </div>
  );
}

export default CurrentDate;
