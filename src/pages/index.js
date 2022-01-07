import * as React from "react"
import PageLayout from "../components/PageLayout"
import SEO from "../components/SEO"
import {Col, Container, Row} from "react-bootstrap"
import {Component} from "react";

const PAPER_URL = 'https://papermc.io/api/v2/projects/paper/versions/1.18.1';
const WATERFALL_URL = 'https://papermc.io/api/v2/projects/waterfall/versions/1.18';
const VELOCITY_URL = 'https://papermc.io/api/v2/projects/velocity/versions/3.1.2-SNAPSHOT';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paper: 0,
          waterfall: 0,
          velocity: 0,
        };
    }

    componentDidMount() {
        fetch(PAPER_URL)
            .then(response => response.json())
            .then(data => {
                const latest = Math.max(...data.builds);
                this.setState({ paper: latest });
            });
        fetch(WATERFALL_URL)
            .then(response => response.json())
            .then(data => {
                const latest = Math.max(...data.builds);
                this.setState({ waterfall: latest });
            });
        fetch(VELOCITY_URL)
            .then(response => response.json())
            .then(data => {
                const latest = Math.max(...data.builds);
                this.setState({ velocity: latest });
            });
    }
    render() {
        return (
            <PageLayout>
                <SEO />
                <Container className="text-center pt-5 mt-5" fluid>
                    <Container className="py-0 my-0 border-light border">
                        <Row>
                            <Col>
                                <h1
                                style={{
                                    fontSize: "5rem",
                                    color: "black",
                                }}
                            >
                                <span className="first-name">Project Gateways</span>
                            </h1>
                            </Col>
                        </Row>
                    </Container>
                    <hr className="my-3 w-25" />
                    <Container>
                        <Row>
                            <Col>
                                <a href={`https://papermc.io/api/v2/projects/paper/versions/1.18.1/builds/${this.state.paper}/downloads/paper-1.18.1-${this.state.paper}.jar`} download>
                  <span className="icon-paper icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span><span className="path10"></span><span className="path11"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://api.purpurmc.org/v2/purpur/1.18.1/latest/download" download>
                  <span className="icon-purpur icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href={`https://papermc.io/api/v2/projects/velocity/versions/3.1.2-SNAPSHOT/builds/${this.state.velocity}/downloads/velocity-3.1.2-SNAPSHOT-${this.state.velocity}.jar`} download>
                  <span className="icon-velocity icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href={`https://papermc.io/api/v2/projects/waterfall/versions/1.18/builds/${this.state.waterfall}/downloads/waterfall-1.18-${this.state.waterfall}.jar`} download>
                                    <span className="icon-waterfall icon"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span><span className="path5"></span><span
                                        className="path6"></span><span className="path7"></span><span
                                        className="path8"></span><span className="path9"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://repo-new.spongepowered.org/service/rest/v1/search/assets/download?sort=version&repository=maven-releases&maven.groupId=org.spongepowered&maven.artifactId=spongevanilla&maven.extension=jar">
                                    <span className="icon-sponge icon"></span>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </PageLayout>
        );
    }
}

export default Index
