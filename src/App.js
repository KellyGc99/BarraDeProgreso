import React, { useEffect, useState } from "react";
import { Pasos } from "./components/Progresive";
import "./components/Progress.css";

export function App() {
  const [pasos] = useState(7);
  const [activo, setActivo] = useState(0);
  const [avance, setAvance] = useState(0);
  useEffect(() => {
    setAvance((100 / (pasos - 1)) * activo);
  }, [pasos, activo]);
  const arr = [];
  console.log(activo);
  for (let i = 0; i < pasos; i++) {
    arr.push(
      <Pasos className={i <= activo ? "Circulos active" : "Circulos"} key={i}>
        {i + 1}
      </Pasos>
    );
  }
  return (
    <>
        <div className="Content">
          <div className="Progressbar">
            <div className="Progress" style={{ width: avance + "%" }}></div>
            {arr}
          </div>
          <div className="Button">
            <button
              className="Prev_Btn"
              disabled={activo > 0 ? false : true}
              onClick={() => {
                activo <= 0 ? setActivo(0) : setActivo(activo - 1);
              }}
            >
              Anterior
            </button>
            <button
              className="Next_Btn"
              disabled={activo >= pasos - 1 ? true : false}
              onClick={() => {
                activo >= pasos ? setActivo(pasos) : setActivo(activo + 1);
              }}
            >
              Siguiente
            </button>
          </div>
        </div>
    </>
  );
}

// import { Progress } from "antd";
// import "antd/dist/antd.min.css";
// //import { red, green } from "@ant-design/colors";

// export function App() {
//   const [pasoActual, actualizarPasoActual] = useState(1);
//   return (
//     <>
//       <h1>Hello , si sirvo al menos para esto :c</h1>
//       <p>Seleccione los pasos: {pasoActual}</p>
//       <div className="container">
//         <Progress percent={100} steps={7} />
//         {/* <br />
//         <Progress percent={30} steps={5} />
//         <br />
//         <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
//         <br />
//         <Progress
//           percent={60}
//           steps={5}
//           strokeColor={[green[6], green[6], red[5]]}
//         /> */}
//       </div>
//     </>
//   );
// }
