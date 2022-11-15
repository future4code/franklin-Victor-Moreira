import React from "react"
import { StyledTextField } from "../../components/TextField/styled";
import Button from '@mui/material/Button'
import { StyledToolbar } from "../../components/Header/styled";

const AddContributorForm = () => {


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form);
        postContributor()
        cleanFields()
    }

    return (
        <div>
                <StyledToolbar onSubmit={onSubmitForm}>
                    <StyledTextField placeholder='First name' type="text" id='firstName' name='firstName' value={form.firstName} onChange={onChange} color='primary' variant="outlined" required />
                    <StyledTextField placeholder='Last name' type="text" id='lastName' name='lastName' variant="outlined" value={form.lastName} onChange={onChange} required />
                    <StyledTextField placeholder='Participation' type="number" id='participation' name='participation' variant="outlined" value={form.participation} onChange={onChange} required />
                    <Button color='inherit' type='submit' variant="outlined">Send</Button>
                </StyledToolbar>
        </div>
    )
}

export default AddContributorForm