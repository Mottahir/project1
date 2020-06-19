import React, {useState} from 'react';

export const AddTransection = () =>{

    const [description, setDescription] = useState();
    const[transectionAmount, setTransectionAmount] = useState();

    return(

        <div>
            <h3> Add New Transection </h3>
            <form>
               <div className="form-control">
                    <label htmlFor="description">
                        Description 
                    </label>
                    <input  type="text" 
                            id="description"
                            placeholder="Detail of Transaction"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                     />
                </div>
                <div className="form-control">
                    <label htmlFor="transectionamount">
                            Transaction Amount
                     </label>
                     <input  type="number"
                             id="transectionamount"
                             placeholder="Enter Transaction Amount" 
                             value={transectionAmount}   
                             onChange={(e) => setTransectionAmount(e.target.value)}
                     />
                </div>
                <button className="btn"> 
                    Add Transection
                </button>
            </form>
        </div>

    )
}