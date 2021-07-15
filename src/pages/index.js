import * as React from "react"
import PageLayout from "../components/PageLayout"
import SEO from "../components/SEO"
import {Col, Container, Row} from "react-bootstrap"
import {Component} from "react";

const PAPER_URL = 'https://papermc.io/api/v2/projects/paper/versions/1.17.1';
const WATERFALL_URL = 'https://papermc.io/api/v2/projects/waterfall/versions/1.17';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paper: 0,
          waterfall: 0,
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
                                <a href={`https://papermc.io/api/v2/projects/paper/versions/1.17.1/builds/${this.state.paper}/downloads/paper-1.17.1-${this.state.paper}.jar`} download>
                  <span className="icon-paper icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span><span className="path10"></span><span className="path11"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://ci.codemc.io/job/Spottedleaf/job/Tuinity-1.17/lastSuccessfulBuild/artifact/tuinity-paperclip.jar" download>
                  <span className="icon-tuinity icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://api.pl3x.net/v2/purpur/1.17.1/latest/download" download>
                  <span className="icon-purpur icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://ci.velocitypowered.com/job/velocity-3.0.0/lastSuccessfulBuild/artifact/proxy/build/libs/velocity-proxy-3.0.1-SNAPSHOT-all.jar" download>
                  <span className="icon-velocity icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span></span>
                                </a>
                            </Col>
                            <Col>
                                <a href={`https://papermc.io/api/v2/projects/waterfall/versions/1.17/builds/${this.state.waterfall}/downloads/waterfall-1.17-${this.state.waterfall}.jar`} download>
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
