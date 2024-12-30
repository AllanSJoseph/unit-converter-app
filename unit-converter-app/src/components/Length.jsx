import React from "react";
import GenerateForm from "./FormGen";

function Length(){
    const LengthList = ["Millimeter", "Centimeter", "Meter", "Kilometer", "Mile", "Foot", "Inch"];
    const type = "Length";

    //Default unit = centimeter
    const convertToDefault = (value,itype) => {
        let k = 0;
        switch(itype){
            case "Millimeter":
                k = value / 10;
                break;
            case "Centimeter":
                k = value;
                break;
            case "Meter":
                k = value * 100;
                break;
            case "Kilometer":
                k = value * 100000;
                break;
            case "Mile":
                k = value * 160900;
                break;
            case "Foot":
                k = value * 30.48;
                break;
            case "Inch":
                k = value * 2.54;
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
            case "Millimeter":
                finalV = value * 10;
                break;
            case "Centimeter":
                finalV = value;
                break;
            case "Meter":
                finalV = value / 100;
                break;
            case "Kilometer":
                finalV = value / 100000;
                break;
            case "Mile":
                finalV = value / 160900;
                break;
            case "Foot":
                finalV = value / 30.48;
                break;
            case "Inch":
                finalV = value / 2.54;
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
          <GenerateForm items={LengthList} type={type} onSubmit={handleFormSubmission}></GenerateForm>
        </>
    )

}

export default Length;