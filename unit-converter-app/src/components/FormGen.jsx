import React, { useState } from "react";


function GenerateForm({ items, type, onSubmit }){
    const [formData, setFormData] = useState({initial : '', iType : '', fType : ''});

    const handleChange = () => {
        const iinitial = document.getElementById('initial').value;
        const iiType = document.getElementById('initialType').value;
        const ffType = document.getElementById('finalType').value;

        setFormData({initial: iinitial, iType: iiType, fType: ffType});
    };

    const handleSubmission = () => {
        onSubmit(formData);
    };        
    

    return(
        <>
        <div>
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>Convert: {type}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="number" id="initial" name="initial" onChange={handleChange}></input>
                    </td>
                    <td>
                        <b>=</b>
                    </td>
                    <td>
                        <input type="number" id="final" name="final" disabled></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="initialType" onChange={handleChange}>
                            {items.map((item,index) => (
                                <option value={item} id={index}>{item}</option>
                            ))}
                        </select>
                    </td>
                        <td>

                        </td>
                        <td>
                            <select id="finalType" onChange={handleChange}>
                                {items.map((item,index) => (
                                    <option value={item} id={index}>{item}</option>
                                ))}
                            </select>
                        </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>
                        <button className="convBtn" id="submit-btn" onClick={handleSubmission}>Convert</button>
                    </td>
                </tr>   
            </tfoot>         
        </table>
        </div>
        </>
    )
}

export default GenerateForm;