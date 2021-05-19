import React from "react"

const Spinner = () =>
    <div style={{ marginTop: "100px" }} class="d-flex justify-content-center">
        <div class="spinner-border m-5" style={{ width: "5rem", height: "5rem" }} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

export default Spinner;