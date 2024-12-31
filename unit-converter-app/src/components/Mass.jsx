import React from "react";
import GenerateForm from "./FormGen";

function Mass(){
    const MassList = ["Milligram","Gram","Pound","Kilogram","Tonne"];
    const type = "Mass";

    //Default unit = Gram for tonne default value is kilogram
    const convertToDefault = (value,itype) => {
        let k = 0;
        switch(itype){
            case "Milligram":
                k = value / 1000;
                break;
            case "Gram":
                k = value;
                break;
            case "Kilogram":
                k = value * 1000;
                break;
            case "Pound":
                k = value * 453.6;
                break;
            case "Tonne":
                k = value * 1000000;
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
            case "Milligram":
                finalV = value * 1000;
                break;
            case "Gram":
                finalV = value;
                break;
            case "Kilogram":
                finalV = value / 1000;
                break;
            case "Pound":
                finalV = value / 453.6;
                break;
            case "Tonne":
                finalV = value / 1000000;
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

export default Mass;