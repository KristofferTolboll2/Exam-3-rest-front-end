import React, {Component} from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            {label != null && <ControlLabel>{label}</ControlLabel>}
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default FieldGroup;