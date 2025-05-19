// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

// Milestone 1

// import useSwitch from "./useSwitch";

// function App() {
//   const [isOn, toggle] = useSwitch();

//   return (
//     <div>
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//       <button onClick={toggle}>Cambia Stato</button>
//     </div>
//   );
// }

// export default App;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

// Milestone 2 

// import useDate from "./useDate";

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

// export default App;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /

// Milestone 3

import useCustomPointer from "./useCustomPointer";

function App() {
  const { position, component } = useCustomPointer("🔥"); 

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      <div
        style={{
          position: "absolute",
          top: position.y + "px",
          left: position.x + "px",
          cursor: "none",
          transform: "translate(-50%, -50%)", 
          zIndex: 9999,
        }}
      >
        {component}
      </div>
    </div>
  );
}

export default App;


