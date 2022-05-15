import React, {useContext} from 'react'
import { BioData } from "./ComA";

const Comc = ({ name }) => {
    const myName = useContext(BioData);
    return <h1>HEllo their I am  { myName } </h1>
}

export default Comc

// consumer