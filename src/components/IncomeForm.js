import React, {useRef} from 'react';

function IncomeForm({income, setIncome}){
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null); 

    const AddIncome = e => {
        e.preventDefault();
        let x = desc.current.value;
        let y = price.current.value;
        if (x!=="" && y!==""){
            let d = date.current.value.split('-')
            let newD = new Date(d[0],d[1],d[2])
            setIncome([...income,{
                "desc" : desc.current.value,
                "price" : price.current.value,
                "date" : newD.getTime()
            }]);
        }
        desc.current.value=""
        price.current.value=null
        date.current.value=null
         
    }

    return(
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Expense Description" ref={desc}/>
                <input type="number" name="price" id="price" placeholder="Price" ref={price} />
                <input type="date" name="date" id="date" placeholder="Income Date" ref={date} />
                <input type="submit" value="Add Expense" />
            </div>
        </form>
    );
}

export default IncomeForm