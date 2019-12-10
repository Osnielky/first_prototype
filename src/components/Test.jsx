import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, } from 'reactstrap';
import Log from './Login';
import '../../src/App.css';

export default function Example1() {
    return (
        <UncontrolledDropdown id="UncontrolledDropdown">
            <DropdownToggle caret>
                Login
      </DropdownToggle>
            <DropdownMenu id="DropdownMenu">

                <Log />
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}