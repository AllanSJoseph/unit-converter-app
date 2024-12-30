import React from "react";
import GenerateForm from "./FormGen";

function Temperature(){
    const temperatureList = ["Kelvin", "Celsius", "Farenheit"];
    const type = "Temperature";

    //First whatever temperature is converted to Kelvin as default temperature from the temperature provided in iType
    //Then we convert to the tempeature provided in the fType

    const convertToDefault = (value,itype) => {
        let k = 0;
        switch(itype){
            case "Celsius":
                k = value + 273.15;
                break;
            case "Farenheit":
                k = (value -32) * (5/9) + 273.15;
                break;
            case "Kelvin":
                k = value;
                break;
            default:
                alert('Sorry Something went wrong...');
                break;
        }
        return k;
    }


    const convertToFinal = (value,ftype) => {
      let finalV = 0;
      switch(ftype){
        case "Celsius":
            finalV = value - 273.15;
            break;
        case "Farenheit":
            finalV = (value - 273.15) * (9/5) + 32;
            break;
        case "Kelvin":
            finalV = value;
            break;
        default:
            console.log('An Error Occured');
      }    
      return finalV;
    }
    
    const handleFormSubmission = (data) => {
        console.log(data);
        if(data.iType === data.fType){
            document.getElementById('final').value = data.initial;
        }else{
            let dvalue = convertToDefault(Number(data.initial),data.iType);
            let fvalue = convertToFinal(dvalue,data.fType);
            document.getElementById('final').value = fvalue;
        }
    }

    return(
        <>
         <GenerateForm items={temperatureList} type={type} onSubmit={handleFormSubmission}></GenerateForm>
        </>
    )
}

export default Temperature;