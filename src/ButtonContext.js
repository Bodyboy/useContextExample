import React, { useContext } from 'react'
import { AppContext } from './AppContext';


export default function ButtonContext() {
    const { context, setContext } = useContext(AppContext);

  return (
    <button onClick={() => setContext(context === 'api' ? 'mock' : 'api')}>
    Toggle Context
  </button>
  )
}
