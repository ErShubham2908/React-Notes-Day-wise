import React, { Suspense, lazy } from 'react'
// import Home from './Home'
// import About from './About'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
function CallCompo() {
  return (
    <div>
        <h1>This is Call Compo</h1>
        <Suspense fallback={<p>Wait Component is loading.....</p>}>
            <Home />
            <About />
        </Suspense>
      {/* <Suspense fallback={<p>Abount is loading......</p>} >
      </Suspense> */}
    </div>
  )
}

export default CallCompo
