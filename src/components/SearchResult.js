/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchResult.css';


function SearchResult(props){
  
    return(
<>
<div className="container" style={{marginTop: '30px'}}>
  <div className="row">
    <div className="col-sm-4">
    <div className="fakeimg">
     <img src={props.medicinepicture} alt=''/>
    </div>
      <h2>Medicine</h2>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <p>Lorem ipsum dolor sit ame.</p>
      <h3>Best picks</h3>
    
      
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr className="d-sm-none" />
    </div>
    {/* Result table */}
    <div className="col-sm-8">
      <h2 className='ResultName' >Results</h2>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Seller</th>
      <th scope="col">location</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Walmart</td>
      <td>boston</td>
      <td>$20</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
     </div>
      <br />
      </div>
  </div>
  <div className="jumbotron text-center" style={{marginBottom: '0'}}>
   
  </div>
</div>

</>

    );


}
export default SearchResult;