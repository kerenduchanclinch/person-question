import { useState } from "react"
import type { Person } from "./test"

export default function RenamePerson() {

    const [person] = useState<Person>({
        name: 'Bob',
        age: 25,
        address: {
          city: "New York",
          zipCode: 1234
        }
      })

      function renamePersonToJohn() {
        person.name = "John"
      }

      // function changeCityToLA() {
      // }


      const {name, age, address: {city, zipCode}} = person

    return <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>City: {city}</div>
        <div>Zip code: {zipCode}</div>
        <button onClick={() => renamePersonToJohn()}>Rename to John</button>
        {/* <button onClick={() => changeCityToLA()}>Change city to LA</button> */}
    </div>
}