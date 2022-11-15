import React, { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Chart, PieSeries, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart'
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { StyledToolbar } from "../../components/Header/styled";
import { StyledBox } from "../../components/Main/styled";
import { StyledDashboard } from "../../components/Dashboard/styled";
import { StyledTextField } from "../../components/TextField/styled";
import { BASE_URL } from "../../constants/urls";

const AddContributorPage = () => {

    const [contributors, setContributors] = useState([])
    const { form, onChange, cleanFields } = useForm({})
    const data = []
    var totalContribution = 0

    const getContributors = () => {
        axios.get(`${BASE_URL}/contributors`, form)
            .then((response) => {
                setContributors(response.data.contributorsDb)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const postContributor = () => {
        axios.post(`${BASE_URL}/contributors`, form)
            .then((response) => {
                setContributors(response.data.contributorsDb)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const deleteContributor = (id) => {
        axios.delete(`${BASE_URL}/contributors/${id}`)
            .then((response) => {
                setContributors(response.data.contributorsDb)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        postContributor()
        cleanFields()
    }

    contributors.map((contributor) => {
        return totalContribution += contributor.participation
    })

    const renderContributorList = contributors.map((contributor) => {
        data.push({
            argument: contributor.first_name,
            value: contributor.participation
        })

        return (
            <TableRow>
                <TableCell>{contributor.id}</TableCell>
                <TableCell>{contributor.first_name}</TableCell>
                <TableCell>{contributor.last_name}</TableCell>
                <TableCell>{((contributor.participation / totalContribution) * 100).toFixed(2)}%</TableCell>
                <TableCell>
                    <IconButton aria-label="delete" onClick={() => deleteContributor(contributor.id)} ><DeleteIcon /></IconButton>
                </TableCell>
            </TableRow>
        )
    })

    useEffect(() => { getContributors() }, [])

    return (
        <div>
            <AppBar position="static">
                <StyledToolbar onSubmit={onSubmitForm}>
                    <StyledTextField placeholder='First name' type="text" id='firstName' name='firstName' value={form.firstName} onChange={onChange} color='primary' variant="outlined" required/>
                    <StyledTextField placeholder='Last name' type="text" id='lastName' name='lastName' variant="outlined" value={form.lastName} onChange={onChange} required/>
                    <StyledTextField placeholder='Participation' type="number" id='participation' name='participation' variant="outlined" value={form.participation} onChange={onChange} required/>
                    <Button color='inherit' type='submit' variant="outlined">Send</Button>
                </StyledToolbar>
            </AppBar>

            <StyledBox>
                <h1>Dashboard Cubo Network</h1>

                <p>Add your data in the form above with the amount of hours worked and see your contribution percentage.</p>

                <StyledDashboard>
                    <TableContainer>
                        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell></TableCell>
                                    <TableCell>First name</TableCell>
                                    <TableCell>Last name</TableCell>
                                    <TableCell>Participation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderContributorList}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box>
                        <Chart type="pie" width={500} height={500} data={data}>
                            <PieSeries valueField="value" argumentField="argument" innerRadius={.5} />
                            <Animation duration={500} />
                            <Legend />
                        </Chart>
                    </Box>
                </StyledDashboard>
            </StyledBox>
        </div>
    )
}

export default AddContributorPage