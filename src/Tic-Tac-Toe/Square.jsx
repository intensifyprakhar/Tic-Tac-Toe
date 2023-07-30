const Square = (props) => {
    return (
      <div
        onClick={props.onClick}
        style={{
            border: "1px solid",
            display: "flex",
            justifyContent: "center",
            height: "100px",
            width: "100%",
            fontSize: "36px",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "#f0f0f0", // Background color for squares
            color: props.value === "X" ? "#ff0000" : "#0000ff", // Different colors for X and O
          }}
        className="square"
      >
        <h5>{props.value}</h5>
      </div>
    );
  };
  
  export default Square;