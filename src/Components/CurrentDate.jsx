
function CurrentDate() {
  const currentDate = new Date();
  const options = { month: 'long' };

  return (
    <div style={{ textAlign:"center" ,padding:"10px", color:"#2196f3", fontSize:"20px", fontWeight:"bolder"}}>
    {/* // <div style={{ display: "flex", flexDirection: "row", border:"1px solid black" , width:"100%" }}> */}
      <p>{currentDate.toLocaleDateString(undefined, options).toLocaleUpperCase()}</p>
    {/* // </div> */}
    </div>
  );
}

export default CurrentDate;
