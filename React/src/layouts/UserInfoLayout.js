import { Container, Row, Col } from "react-bootstrap";
import '../styles/reactboot.css'

const UserInfoLayout = ( {children} ) => {
    return (
        <section id="FontSet" style={{backgroundColor: "#2e87ec", minHeight: "100vh", fontSize: '25px'}}>
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-12 col-md-8 col-lg-6 col-xl-5">{children}</Col>
                </Row>
            </Container>
        </section>

    );
};

export default UserInfoLayout
