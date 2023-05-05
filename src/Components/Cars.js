function Cars(props){
  return(
      <>
      <div className="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
      <div className="card" >
          <div className="card-body">
              <h3 className="card-title">{props.brand} {props.name}</h3>
              <h5 className="card-text">The car weight is {props.info.weight} & The car color is {props.info.color}.</h5>
              <h5 className="card-text">{props.specs}</h5>
              <a href={props.link} className="btn btn-primary">Details</a>
          </div>
      </div>
      </div>
      </div>
      </>
  )
}

export default Cars;