import styled from "styled-components"
import tw from "tailwind.macro"

export const IndexStyles = styled.main.attrs({
    className: "bg-gray-300"
})
`
table {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    padding: 10px;

    thead th {
        padding: 10px;
    }

    tbody tr:nth-child(odd) {
        background-color: rgb(134 239 172);
    }

    tbody td {
        padding: 10px
    }
}


`