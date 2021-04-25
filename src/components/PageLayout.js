import React from "react"
import { Container } from "react-bootstrap"

const PageLayout = ({ children }) => (
    <Container fluid className="px-0 theme-dark app-container">
        <Container fluid className="pt-5 mt-5 text-center">
            {children}
        </Container>
    </Container>
)

export default PageLayout
