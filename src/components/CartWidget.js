import Dropdown from 'react-bootstrap/Dropdown';


export const CartWidget = () => {
    return (
        <>

  

<Dropdown>
      <Dropdown.Toggle className='notifi' id="dropdown-basic">
      <a ><i class="fa-solid fa-cart-shopping"></i> 1</a>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">alert 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">alerta2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">alerta 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        </>
    )
}