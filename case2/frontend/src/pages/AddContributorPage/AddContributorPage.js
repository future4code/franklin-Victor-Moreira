import React, { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm";
import axios from "axios";

const AddContributorPage = () => {

    const [contributors, setContributors] = useState([])
    const { form, onChange, cleanFields } = useForm({})

    console.log(contributors);

    const getContributors = () => {
        axios.get('http://localhost:3003/contributors', form)
            .then((response) => {
                setContributors(response.data.contributorsDb)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const postContributor = () => {
        axios.post('http://localhost:3003/contributors', form)
            .then((response) => {
                setContributors(response.data.contributorsDb)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form);
        postContributor()
        cleanFields()
    }

    const renderContributorList = contributors.map((contributor) => {
        return (
            <tr>
                <td>{contributor.id}</td>
                <td>{contributor.first_name}</td>
                <td>{contributor.last_name}</td>
                <td>{contributor.participation}</td>
            </tr>
        )
    })

    console.log(renderContributorList);

    useEffect(() => { getContributors() }, [])

    return (
        <div>
            <div>

                <form onSubmit={onSubmitForm}>
                    <input type="text" id='firstName' name='firstName' value={form.firstName} onChange={onChange} />
                    <input type="text" id='lastName' name='lastName' value={form.lastName} onChange={onChange} />
                    <input type="number" id='participation' name='participation' value={form.participation} onChange={onChange} />
                    <button type='submit'>Send</button>
                </form>

                <h1>Data</h1>

                <p>Commodo laboris exercitation excepteur excepteur duis veniam minim consequat exercitation aliquip excepteur et pariatur.</p>

                {
                    <table>
                        <tr>
                            <th></th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Participation</th>
                        </tr>

                        {renderContributorList}
                    </table>
                }
            </div>
        </div>
    )
}

export default AddContributorPage