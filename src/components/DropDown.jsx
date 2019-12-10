import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Log from './Login';
import '../../src/App.css';

export default class ButtonLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // const [dropdownOpen, setOpen] = useState(false);
    // const toggle = () => setOpen(!dropdownOpen);
    render() {
        return (<div>hello world</div>
            //     <ButtonDropdown className="ButtonDropdown" isOpen={dropdownOpen} toggle={toggle}>
            //         <DropdownToggle className="Toggle" caret>
            //             LOGIN
            //   </DropdownToggle >
            //         <DropdownMenu id="DropdownMenu" className="DropdownMenu">
            //             <Log ></Log>
            //         </DropdownMenu>
            //     </ButtonDropdown>
        )
    }
}
