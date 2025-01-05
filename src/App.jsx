import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    const [allAreOn, setAllAreOn] = React.useState(pads.every((item) => item.on === true))

    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? { ...item, on: !item.on } : item
        }))
    }
    function toggleAllOn() {
        setPads(prevPads => prevPads.map(item => ({ ...item, on: true })))
        setAllAreOn(!allAreOn)
        // console.log(pads)
    }
    function toggleAllOff() {
        setPads(prevPads => prevPads.map(item => ({ ...item, on: false })))
        setAllAreOn(!allAreOn)
        // console.log(pads)
    }

    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
    ))
    console.log(allAreOn)

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
                <button disabled={allAreOn ? true : false} style={{ backgroundColor: "#fff", opacity: "1" }} onClick={toggleAllOn}>Turn all ON</button>
                <button disabled={allAreOn ? false : true} style={{ backgroundColor: "#fff", opacity: "1" }} onClick={toggleAllOff}>Turn all OFF</button>
            </div>
        </main>
    )
}



// ("https://www.youtube.com/watch?v=x4rFhThSX04&t=9h6m10s&ab_channel=freeCodeCamp.org");