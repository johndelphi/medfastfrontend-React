

function Searchbar(){
  
    return(
<>
<div className="container-fluid">
<div className="d-flex justify-content-center">
  <form className="form-inline my-2 my-lg-0">
    <div className="input-group">
     <input className="form-control mr-sm-2 w-90" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
    </div>
  </form>
</div>
</div>
</>
    );


}
export default Searchbar;