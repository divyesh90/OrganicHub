import React, { useState } from 'react'
import axios from "axios"
import './Products.css'
import { useHistory } from 'react-router'
import { render } from '@testing-library/react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ReactDOM } from 'react'


export default function Products(props){

 
    const history = useHistory();

    const [post, setPost] = React.useState(null);
    console.log(props.id)

  React.useEffect(() => {
    axios.get("http://localhost:5000/products",  { params: { email: props.email } })
    .then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;



 const  hidedescription = (id) => {
    var des_id= "des"+id;
    var x = document.getElementById(des_id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  };

  const  deleteproduct = (id) => {
    var row_id= "row"+id;
    var des_id= "des"+id;
    var x = document.getElementById(des_id);
    var y = document.getElementById(row_id);
    x.remove();
    y.remove();
    
  };




  const renderTable = () => {
      var num=0;
    return post.map(user => {

        num++;
        var path="http://localhost:5000/uploads/"+user.pimg;
        var des_id="des"+user._id;
        var row_id="row"+user._id;
      return (
          <>
          
            
            <tr id={row_id}>
            <td>{num}</td>
            <td> <img src={path} className="avatar" alt="photo"/> </td>
            <td><a> {user.pname}</a></td>                      
            <td>{user.pcategory}</td>
            <td><span className="status text-success"></span>{user.price}</td>
            <td><span className="status text-success"></span>{user.discount}</td>
            <td><span className="status text-success"></span>{user.sellprice}</td>
            
            <td>
            <a  className="settings" title="Description"  onClick={ () => hidedescription(user._id)} ><i className="material-icons">&#xe873;</i></a>
                
            </td>
            <td>
            <a className="delete" title="Delete"  onClick={ () => deleteproduct(user._id)}><span class="material-icons">&#xe872;</span></a>
            </td>
            </tr>
            
              <th></th>
              <div id={des_id} className="descri"> {user.decription}</div>
           
            
            {/* <div className="description" id={des_id} >
            <th>Description  </th> <td> {user.decription} </td>
            </div> */}
            
            </>
      )
    })
  }

  return (
    <div>
      
        {/* <h1>{renderTable()}</h1> */}


                
           
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Bootstrap User Management Data Table</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            {/* <script>
            $(document).ready(function(){
                $('[data-toggle="tooltip"]').tooltip();
            });
            </script> */}
            <div className="p_main">
            <div className="container">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm">
                                    <h2>Product <b>Details</b></h2>
                                    
                                   
                                </div>
                                <div className="col-sm">
                                    <h2>{props.name}</h2>
                                    
                                   
                                </div>
                                <div className="col-sm">
                                
                                
                                    <a  className="btn btn-primary" onClick={()=> history.push("details")} ><i className="material-icons">&#xE147;</i> <span >Add New Product</span></a>
                                    					
                                </div>
                                <div className="col-sm ">
                                
                                <a className="btn btn-primary" onClick={()=> history.push("/farmer")} ><i className="material-icons">&#xe88a;</i> <span >Home</span></a>
                                   
          					
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th></th>	
                                    <th>Products</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Sell Price</th>
                                    <th>Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td><a href="#"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar"/> Karm patel</a></td>                      
                                    <td>Admin</td>
                                    <td><span className="status text-success">&bull;</span> Active</td>
                                    <td>
                                        <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                        <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                                    </td>
                                </tr> */}
                                {renderTable()}
                                    
                                
                                
                                
                               
                                
                            </tbody>
                        </table>
                        
                    </div>
                </div>        
            </div>     
        </div>
      
    </div>
  )
}

//   return (
//     <div>
      
//       <p>fsdsdggfh</p>
//       {renderTable}
//     </div>
//   );
    // const products = () => {
    
        
    //         axios.get("http://localhost:5000/products")
    //         .then( res => {
    //           console.log(res);
    //           this.setState({ product : res.data})

    //         })
        
    // }


    

    // return(
    //     <div>

    //     <h1 onClick={products}> prorrt </h1>
    //     <ul> {this.state.products.map(product => { <li>{product.name}</li>})} </ul>;
    //     </div>

    // );
