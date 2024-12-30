import React from "react";
import GenerateForm from "./FormGen";

function Length(){
    const TimeList = ["Seconds","Minutes","Hours","Days","Weeks","Months","Years"];
    const type = "Time";

    //Default unit = Hours
    const convertToDefault = (value,itype) => {
        let k = 0;
        switch(itype){
            case "Seconds":
                k = value / 3600;
                break;
            case "Minutes":
                k = value / 60;
                break;
            case "Hours":
                k = value;
                break;
            case "Days":
                k = value * 24;
                break;
            case "Weeks":
                k = value * 168;
                break;
            case "Months":
                k = value * 730;
                break;
            case "Years":
                k = value * 8760;
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
            case "Seconds":
                finalV = value * 3600;
                break;
            case "Minutes":
                finalV = value * 60;
                break;
            case "Hours":
                finalV = value;
                break;
            case "Days":
                finalV = value / 24;
                break;
            case "Weeks":
                finalV = value / 168;
                break;
            case "Months":
                finalV = value / 730;
                break;
            case "Years":
                finalV = value / 8760;
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
          <GenerateForm items={TimeList} type={type} onSubmit={handleFormSubmission}></GenerateForm>
        </>
    )

}

export default Length;