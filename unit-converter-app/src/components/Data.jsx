import React from "react";
import GenerateForm from "./FormGen";

function Data(){
    const MassList = ["Bit","Byte","KiloByte","MegaByte","GigaByte","TeraByte","PetaByte"];
    const type = "Data";

    //Default unit = Byte
    const convertToDefault = (value,itype) => {
        let k = 0;
        switch(itype){
            case "Bit":
                k = value / 8;
                break;
            case "Byte":
                k = value;
                break;
            case "KiloByte":
                k = value * 1e+3;
                break;
            case "MegaByte":
                k = value * 1e+6;
                break;
            case "GigaByte":
                k = value * 1e+9;
                break;
            case "TeraByte":
                k = value * 1e+12;
                break;
            case "PetaByte":
                k = value * 1e+15;
                break;
            default:
                alert('Sorry! Something went wrong!');
                break;
        }
        return k;
    };

    const convertToFinal = (value,ftype) => {
        let finalV = 0;
        switch(ftype){
            case "Bit":
                finalV = value * 8;
                break;
            case "Byte":
                finalV = value;
                break;
            case "KiloByte":
                finalV = value / 1e+3;
                break;
            case "MegaByte":
                finalV = value / 1e+6;
                break;
            case "GigaByte":
                finalV = value / 1e+9;
                break;
            case "TeraByte":
                finalV = value / 1e+12;
                break;
            case "PetaByte":
                finalV = value / 1e+15;
                break;
            default:
                alert('Sorry! Something went wrong!');
                break;
        }
        return finalV;
    };


    const handleFormSubmission = (data) =>{
        console.log(data);
        if(data.iType === data.fType){
            document.getElementById('final').value = data.initial;
        }else{
            let dvalue = convertToDefault(Number(data.initial),data.iType);
            let fvalue = convertToFinal(dvalue,data.fType);
            document.getElementById('final').value = fvalue;
        }
    };

    return(
        <>
          <GenerateForm items={MassList} type={type} onSubmit={handleFormSubmission}></GenerateForm>
        </>
    )

}

export default Data;