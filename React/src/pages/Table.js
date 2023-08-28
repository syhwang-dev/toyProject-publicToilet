const Detail = () => {

    const toggleModal = (event) =>{

    }
    
    return (
    <>
    <button class="contrast" data-target="modal-example"
            onClick={toggleModal}>
            Launch demo modal
            </button>

            <dialog id="modal-example">
            <article>
                <a href="#close"
                aria-label="Close"
                class="close"
                data-target="modal-example"
                onClick="toggleModal(event)">
                </a>
                <h3>Confirm your action!</h3>
                <p>
                Cras sit amet maximus risus. 
                Pellentesque sodales odio sit amet augue finibus pellentesque. 
                Nullam finibus risus non semper euismod.
                </p>
                <footer>
                <a href="#cancel"
                    role="button"
                    class="secondary"
                    data-target="modal-example"
                    onClick="toggleModal(event)">
                    Cancel
                </a>
                <a href="#confirm"
                    role="button"
                    data-target="modal-example"
                    onClick="toggleModal(event)">
                    Confirm
                </a>
                </footer>
            </article>
            </dialog>
        </>
    )
}

export default Detail



// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function HorizontalExample() {
//   return (
//     <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={2}>
//           Email
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="email" placeholder="Email" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={2}>
//           Password
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="password" placeholder="Password" />
//         </Col>
//       </Form.Group>
//       <fieldset>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Label as="legend" column sm={2}>
//             Radios
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Check
//               type="radio"
//               label="first radio"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios1"
//             />
//             <Form.Check
//               type="radio"
//               label="second radio"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios2"
//             />
//             <Form.Check
//               type="radio"
//               label="third radio"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios3"
//             />
//           </Col>
//         </Form.Group>
//       </fieldset>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Form.Check label="Remember me" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Button type="submit">Sign in</Button>
//         </Col>
//       </Form.Group>
//     </Form>
//   );
// }

// export default HorizontalExample;
// // import Dropdown from 'react-bootstrap/Dropdown';
// // import DropdownButton from 'react-bootstrap/DropdownButton';
// // import Form from 'react-bootstrap/Form';
// // import InputGroup from 'react-bootstrap/InputGroup';

// // function ButtonDropdownsExample() {
// //   return (
// //     <>
// //       <InputGroup className="mb-3">
// //         <DropdownButton
// //           variant="outline-secondary"
// //           title="Dropdown"
// //           id="input-group-dropdown-1"
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </DropdownButton>
// //         <Form.Control aria-label="Text input with dropdown button" />
// //       </InputGroup>

// //       <InputGroup className="mb-3">
// //         <Form.Control aria-label="Text input with dropdown button" />

// //         <DropdownButton
// //           variant="outline-secondary"
// //           title="Dropdown"
// //           id="input-group-dropdown-2"
// //           align="end"
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </DropdownButton>
// //       </InputGroup>

// //       <InputGroup>
// //         <DropdownButton
// //           variant="outline-secondary"
// //           title="Dropdown"
// //           id="input-group-dropdown-3"
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </DropdownButton>
// //         <Form.Control aria-label="Text input with 2 dropdown buttons" />
// //         <DropdownButton
// //           variant="outline-secondary"
// //           title="Dropdown"
// //           id="input-group-dropdown-4"
// //           align="end"
// //         >
// //           <Dropdown.Item href="#">Action</Dropdown.Item>
// //           <Dropdown.Item href="#">Another action</Dropdown.Item>
// //           <Dropdown.Item href="#">Something else here</Dropdown.Item>
// //           <Dropdown.Divider />
// //           <Dropdown.Item href="#">Separated link</Dropdown.Item>
// //         </DropdownButton>
// //       </InputGroup>
// //     </>
// //   );
// // }

// // export default ButtonDropdownsExample;