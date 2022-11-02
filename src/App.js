import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert"
import React ,{useState} from "react";


function App() {
    const[mode,setMode]= useState('light');
    const removeBodyClass=()=>{
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('bg-success');
        document.body.classList.remove('bg-warning');
        document.body.classList.remove('bg-danger');
        document.body.classList.remove('bg-primary');

    }
    const toogleTheme = (cls)=>{
        console.log(cls);
        removeBodyClass();
        document.body.classList.add('bg-'+cls);

        if(mode==='dark'){
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light Mode is enabled","success")
        }else{
            setMode('dark')
            document.body.style.backgroundColor = '#11142f'
            showAlert("Dark Mode is enabled","success")
        }
    }

    const[alert,setAlert]=useState(null);
    let showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type: type
        })
    }
    return (
        <>
            <Navbar title='TextUtils' aboutText='About' mode={mode} toogleMode = {toogleTheme}/>
            <Alert alert={alert}/>
            <div className={`container my-3 `}>
                <TextForm heading='Enter the Text to analyze ' showAlert={showAlert} mode={mode} toogleMode = {toogleTheme}/>

                <About mode={mode}/>
            </div>
        </>
    );
}

export default App;
