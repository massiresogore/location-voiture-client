import styled from "styled-components";

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 3px solid purple;

    thead th:nth-child(1) {

        width: 14%;
    }

    thead th:nth-child(2) {
        width: 14%;
    }

    thead th:nth-child(3) {
        width: 14%;
    }

    thead th:nth-child(4) {
        width: 10%;
    }

    thead th:nth-child(5) {
        width: 16%;
    }

    thead th:nth-child(6) {
        width: 10%;
    }

    thead th:nth-child(7) {
        width: 14%;
    }
    
    thead th:nth-child(8) {
        width: 8%;
    }

    th,
    td {

        padding: 20px;
    }

    td {
        text-align: center;
    }
`;