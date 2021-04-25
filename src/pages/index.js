import * as React from "react"
import PageLayout from "../components/PageLayout"
import SEO from "../components/SEO"
import { Container } from "react-bootstrap"
import {Component} from "react";

const PAPER_URL = 'https://papermc.io/api/v2/projects/paper/versions/1.16.5';
const WATERFALL_URL = 'https://papermc.io/api/v2/projects/waterfall/versions/1.16';

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
                        <h1
                            style={{
                                fontSize: "5rem",
                                color: "black",
                            }}
                        >
                            <span className="first-name">Project Gateways</span>
                        </h1>
                    </Container>
                    <hr className="my-3 w-25" />
                    <div className="d-md-inline-flex icons-container">
                        <a href="https://dl.airplane.gg/latest/Airplane-JDK11/launcher-airplane.jar" download>
                <span className="icon-airplane icon"><span className="path1"></span><span className="path2"></span><span
                    className="path3"></span><span className="path4"></span><span className="path5"></span><span
                    className="path6"></span><span className="path7"></span><span className="path8"></span><span
                    className="path9"></span><span className="path10"></span><span className="path11"></span><span
                    className="path12"></span></span>
                        </a>
                        <a href={`https://papermc.io/api/v2/projects/paper/versions/1.16.5/builds/${this.state.paper}/downloads/paper-1.16.5-${this.state.paper}.jar`} download>
                  <span className="icon-paper icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span><span className="path10"></span><span className="path11"></span></span>
                        </a>
                        <a href="https://ci.pl3x.net/job/Purpur/lastSuccessfulBuild/artifact/final/purpurclip.jar" download>
                  <span className="icon-purpur icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span><span
                      className="path9"></span></span>
                        </a>
                        <a href="https://ci.codemc.io/job/Spottedleaf/job/Tuinity/lastSuccessfulBuild/artifact/tuinity-paperclip.jar" download>
                  <span className="icon-tuinity icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span><span className="path4"></span><span className="path5"></span><span
                      className="path6"></span><span className="path7"></span><span className="path8"></span></span>
                        </a>
                        <a href="https://versions.velocitypowered.com/download/1.1.5.jar" download>
                  <span className="icon-velocity icon"><span className="path1"></span><span className="path2"></span><span
                      className="path3"></span></span>
                        </a>
                    </div>
                </Container>
            </PageLayout>
        );
    }
}

export default Index
