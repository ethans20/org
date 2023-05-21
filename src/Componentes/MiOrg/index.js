import "./MiOrg.css"
//import { useState } from "react"

const MiOrg = (props) => {
    //estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)

    /*const [mostrar, actualizarMostrar] = useState(true)

    const ManejarClick = () => {
        console.log("Mostrar/Ocultar Elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
        <h3 className="tittle">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg