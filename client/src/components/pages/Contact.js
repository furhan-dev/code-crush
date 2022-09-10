// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_COMMENT } from '../../utils/mutations';


// const CommentForm = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     comment: '',
//   });

  
//   const handleChange = (event) => {
//         const {name,value} = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//   };
//   const [addComment] = useMutation(ADD_COMMENT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState,formState.name,formState.email,formState.comment);
//     if(!formState.name || !formState.email || !formState.comment){
//         alert('Failed to submit your comment! please fill all requested fileds.');
//         document.location.replace('/contact');
//     }
//     try {
//       const { data } = await addComment({
//         variables: 
//         {...formState}   
//         });
//     }catch (e) {
//         console.error(e);
//     }
//     alert('Thanks for contacting us, Your message was sent successfully, and we will contact you as soon as possible!');
//     document.location.replace('/');
//     setFormState ({name:'',comment:'',email:''});
//     };



//   return (
//     <div>

// {/* * */}
//           {/* <!-- Modal --> */}
//           <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//               <div className="modal-dialog modal-lg" role="document">
//                   <div className="w-100 pt-1 mb-5 text-right">
//                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <form action="" method="get" className="modal-content modal-body border-0 p-0">
//                       <div className="input-group mb-2">
//                           <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
//                           <button type="submit" className="input-group-text bg-success text-light">
//                               <i className="fa fa-fw fa-search text-white"></i>
//                           </button>
//                       </div>
//                   </form>
//               </div>
//           </div>


//           {/* <!-- Start Content Page --> */}
//           <div className="container-fluid bg-light py-5">
//               <div className="col-md-6 m-auto text-center">
//                   <h1 className="h1">Contact</h1>
//                   <p>

//                   </p>
//               </div>
//           </div>

//           {/* <!-- Start Contact --> */}
//           <div className="container py-5">
//               <div className="row py-5">
//                   <form onSubmit={handleFormSubmit} className="col-md-9 m-auto" method="post" >
//                       <div className="row">
//                           <div className="form-group col-md-6 mb-3">
//                               <label for="inputname">Name</label>
//                               <input 
//                                     type="text" 
//                                     className="form-control mt-1" 
//                                     id="name" 
//                                     name="name" 
//                                     placeholder="Name"
//                                     value={formState.name}
//                                     onChange={handleChange}
//                                 />
//                           </div>
//                           <div className="form-group col-md-6 mb-3">
//                               <label for="inputemail">Email</label>
//                               <input 
//                                     type="email" 
//                                     className="form-control mt-1" 
//                                     id="email" 
//                                     name="email" 
//                                     placeholder="Email"
//                                     value={formState.email}
//                                     onChange={handleChange}
//                                     />
//                           </div>
//                       </div>
//                       <div className="mb-3">
//                           <label for="inputmessage">Message</label>
//                           <textarea 
//                                     className="form-control mt-1" 
//                                     id="comment" 
//                                     name="comment" 
//                                     placeholder="Message" 
//                                     rows="8"
//                                     value={formState.comment}
//                                     onChange={handleChange}
//                                     ></textarea>
//                       </div>
//                       <div className="row">
//                           <div className="col text-end mt-2">
//                               <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
//                           </div>
//                       </div>
//                   </form>


//               </div>
//           </div>
//           {/* <!-- End Contact --> */}
//     </div>
//   );
// }

// export default CommentForm;


