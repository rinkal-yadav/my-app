
//  all css define in App.css file 

import React, { useState } from 'react'

const CardForm = () => {
    const [temp, setTemp] = useState(
        { input1: "", input2: "", input3: "", input4: "" }
    )
    const [display, setDisplay] = useState([])

    // ---------------handle the input fields-------------
    const inputHandle = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setTemp({ ...temp, [name]: value })
        console.log(e.target.value);
    }

    const handleEnter = (event) => {
        // -------------------- auto forward functionality --------------
        if (temp.input1.length === 4) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
        }
    };

    const handleEnter2 = (event) => {
        // -------------------- auto forward functionality --------------
        if (temp.input2.length === 4) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
        }
        // -------------------- auto back functionality --------------
        if (temp.input2.length === 0) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index - 1].focus();
        }
    };

    const handleEnter3 = (event) => {
        // -------------------- auto forward functionality --------------
        if (temp.input3.length === 4) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
        }

        // -------------------- auto back functionality --------------
        if (temp.input3.length === 0) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index - 1].focus();
        }
    };

    // -------------------- auto back functionality --------------

    const handleEnter4 = (event) => {
        if (temp.input4.length === 0) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index - 1].focus();
        }
    }

    // ---------- Delete functionality---------------
    const remove = (index) => {
        const newList = display;
        newList.splice(index, 1);
        setDisplay([...newList]);

    }


    let newid = ((display.length) + 1).toString()
    const cardInfo = [Object.values(temp), newid]


    const submitHandle = (event) => {

        if (temp.input4.length === 4 && event.key === "Enter") {
            if (Number(temp.input1) && Number(temp.input2) && Number(temp.input3) && Number(temp.input4)) {
                event.preventDefault()
                setTemp({ input1: "", input2: "", input3: "", input4: "" })
                setDisplay([...display, { ...temp, id: newid }])
                const form = event.target.form;
                const index = [...form].indexOf(event.target);
                form.elements[index - 3].focus();
                console.log(temp);
                console.log(newid);


            }
            else {
                return alert("Insert Only Numbers")
            }


        }







    }


    console.log(cardInfo);



    return (
        <div>
            <form >
                <label >Enter Card Number : </label>
                <div className='cardBox'>
                    <input onKeyUp={handleEnter} type="text" maxLength="4" minLength="4" name='input1' value={temp.input1} pattern="[0,1,2,3,4,5,6,7,8,9]{4}" required onChange={inputHandle} />
                    <input onKeyUp={handleEnter2} type="text" maxLength="4" minLength="4" name='input2' value={temp.input2} pattern="[0,1,2,3,4,5,6,7,8,9]{4}" required onChange={inputHandle} />
                    <input onKeyUp={handleEnter3} type="text" maxLength="4" minLength="4" name='input3' value={temp.input3} pattern="[0,1,2,3,4,5,6,7,8,9]{4}" required onChange={inputHandle} />
                    <input onKeyUp={handleEnter4} onKeyPress={submitHandle} type="text" maxLength="4" minLength="4" name='input4' value={temp.input4} pattern="[0,1,2,3,4,5,6,7,8,9]{4}" required onChange={inputHandle} />

                </div>

            </form>
            <div className='cardOutput'>
                {
                    display.map((value, index) => {
                        return (

                            <div key={index} className='cardNum'>{value.input1}-{value.input2}-{value.input3}-{value.input4} <span onClick={() => remove(index)} > Delete </span></div>


                        )
                    })
                }
            </div>

        </div>

    )
}

export default CardForm

