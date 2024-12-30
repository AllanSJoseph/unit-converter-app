import React, {useState} from "react";
import Temperature from "./Temperature";
import Length from "./Length";
import Mass from "./Mass";
import Time from "./Time";

function ConvContainer(){
    const [activeConverter, setActiveConverter] = useState('length');

    const changeBodyImage = (cont) => {
        const imgList = {
            length : "url(https://img.freepik.com/premium-photo/yellow-measuring-tape-screws-isolated-cut-out-dark-background_661495-19088.jpg)",
            mass: "url(https://img.freepik.com/premium-photo/two-white-pan-balance-black-background_248415-7097.jpg)",
            time: "url(https://img.freepik.com/premium-photo/close-up-calendar-alarm-clock-black-table-background-generative-ai_788160-3707.jpg)",
            temperature: "url(https://img.pikbest.com/wp/202345/thermometers-thermometer-is-displayed-on-a-dark-desk_9610695.jpg!sw800)"
        }
        document.documentElement.style.setProperty('--bgimage', imgList[cont])
    }

    const setAsActive = (cont) => {
        setActiveConverter(cont);
        document.getElementById(activeConverter).classList.remove("active");
        document.getElementById(cont).classList.add('active');
        changeBodyImage(cont);
    };

    return(
        <>
            <div className="ConvContainer">
                <div className="ConvNavigation">
                    <button id="length" className="navbtn active" onClick={() => setAsActive('length')}>Length</button>
                    <button id="mass" className="navbtn" onClick={() => setAsActive('mass')}>Mass</button>
                    <button id="time" className="navbtn" onClick={() => setAsActive('time')}>Time</button>
                    <button id="temperature" className="navbtn" onClick={() => setAsActive('temperature')}>Temperature</button>
                </div>
                <div className="ConvWindow">
                    {activeConverter === 'length' && <Length />}
                    {activeConverter === 'mass' && <Mass />}
                    {activeConverter === 'time' && <Time />}
                    {activeConverter === 'temperature' && <Temperature />}
                </div>
            </div>  
        </>
    );
}

export default ConvContainer;