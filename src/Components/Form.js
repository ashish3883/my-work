import { useState } from "react";

function Form(props){
  const [formState, setFormState] = useState({})
  console.log(formState);
  return(
    <>
    <form className="row g-3">
          <h1 style={{display:'flex', justifyContent:'center' }}>Form</h1>
          <div className="col-md-2">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4"
            value={formState.userName} 
            name='userName' 
              onChange={(event) => {
              const targetVal = event.target.value;
              const targetName = event.target.name;
              setFormState({
                ...formState,
                [targetName]: targetVal,
            });
          }}
            />
          </div>
          <div className="col-md-2">
            <label for="inputPassword4" className="form-label">PASSWORD</label>
            <input type="password" className="form-control" id="inputPassword4"
            value={formState.userPass} 
            name='userPass' 
            onChange={(event) => {
              const targetVal = event.target.value;
              const targetName = event.target.name;
              setFormState({
                ...formState,
                [targetName]: targetVal,
            });
          }}/>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">Age</label>
            <input type="number" className="form-control" id="inputZip"
            value={formState.userAge} 
            name='userAge' 
            onChange={(event) => {
              const targetVal = event.target.value;
              const targetName = event.target.name;
              setFormState({
                ...formState,
                [targetName]: targetVal,
            });
          }}/>
        </div>
      </form>
      <input class="btn btn-primary my-2" type="submit" value="Submit"/>
    </>
  )   
}
export default Form;