import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const SearchBar = ({ callWhenSubmit }) => {
  const [inputValue, setInputValue] = useState("");
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("SearchBar dice " + inputValue);
    callWhenSubmit(inputValue);
  };
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">
          <i className="fa-sharp fa-solid fa-bone"></i>Dog Breed
        </a>

        <Button variant="primary" onClick={handleShow}>
          Add new Dog
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>imageUrl</Form.Label>
                <Form.Control type="text" placeholder="url" autoFocus />
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" autoFocus />
                <Form.Select aria-label="Default select example">
                  <option>Trainability</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <section>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add new dog
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input type="text" id="name" className="form-control" />
                    <label for="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      cols="5"
                      rows="5"
                      maxlength="250"
                    ></textarea>
                    <label for="imageurl" className="form-label">
                      Image Url
                    </label>
                    <input type="url" id="imageurl" className="form-control" />
                    <label for="train" className="form-label">
                      Trainability
                    </label>
                    <select name="train" id="train">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <br />
                    <label for="minls" className="form-label">
                      Minimum life span
                    </label>
                    <input
                      type="range"
                      value="12"
                      min="1"
                      max="25"
                      id="minls"
                      className="form-control"
                      oninput="this.nextElementSibling.value = this.value"
                    />
                    <output>12</output> <br />
                    <label for="maxls" className="form-label">
                      Maximum life span
                    </label>
                    <input
                      type="range"
                      value="15"
                      min="1"
                      max="25"
                      id="maxls"
                      className="form-control"
                      oninput="this.nextElementSibling.value = this.value"
                    />
                    <output>15</output> <br />
                    <label for="size" className="form-label">
                      Size
                    </label>
                    <select name="size" id="size">
                      <option value="X-SMALL">x-small</option>
                      <option value="SMALL">small</option>
                      <option value="MEDIUM">medium</option>
                      <option value="LARGE">large</option>
                      <option value="X-LARGE">x-large</option>
                    </select>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="save-btn"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              onChange={handleInputChange}
              value={inputValue}
            ></input>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
