import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"test title"} />
      <Section title={"Different title"}>This is my Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["a", "b", "c"]} render={(item: string) => <span>{item}</span>} />
    </>
  )
}

export default App
