import React from 'react'
import { useState } from 'react'

export default function useEffect() {
    const [Count, setCount] = useState(0)
    // console.log(Count)
    return (
        <>
    <div>
        <button onClick={setCount(Count+1)}>{Count}</button>
    </div>
    </>
  )
}
