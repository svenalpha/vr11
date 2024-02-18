
import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import UseEffectFetchData from "../UseEffectFetchData";

export default function Extra() {
  return (
    <>
      <h1>Extra</h1>
      <UseEffectFetchData />
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}



