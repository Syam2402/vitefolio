import React from 'react'
import LandingPage from './page/LandingPage'

 const App = () => {

  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   if(theme === 'dark'){
  //     document.documentElement.classList.add("dark");
  //   }
  //   else{
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme])

  // const handleThemeChange = () => {
  //   setTheme(theme === "light" ? "dark" : "light")
  // }
  
  return(
    <div >
      <LandingPage />
    </div>
  )
}

export default App;