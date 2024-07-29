import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    console.log("use effect comp ran");

    const handleResize = () => {
        setWindowHeight(window.innerHeight);
    }

    //It is only ran when the dependency passed to it changes and not on every re-render due to
    //state update re-renders. If nothing is passed, it runs on every re-render. If empty array, then
    //it will run only when the comp renders for the first time
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        //Run cleanup, by returning a function which runs on unmount. Basically every time a comp's
        //useEffect runs it returns the cleanup and it is called when the comp is destroyed/un-mounted
        //If you see a cleanup function running on first load as well, it is because of strict mode
        //or hot reloading which unmounts and re-mounts the comps to check for bugs
        return () => {
            console.log('removing event listener');
            window.removeEventListener('resize', handleResize)
        }
    }, []);

  return (
    <div>
        Window Height= {windowHeight}
    </div>
  )
}

export default UseEffectHook