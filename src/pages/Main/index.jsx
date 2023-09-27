import "../Main/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-image-gallery/styles/css/image-gallery.css";

import mock from "../../assets/mockup_super_pos_obra_principal_5l.png";
import mockcapa from "../../assets/mockup-com-capa.png";
import selo50 from "../../assets/selo_50_litros.png";
import selolitro from "../../assets/selo_preço_litro.png";
// import piso from "../../assets/77578021_l.png";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ImageGallery from "react-image-gallery";

import Header from "../../components/Header";
import "../Main/styles.css";
import { FormatAlignLeft } from "@material-ui/icons";

// import SimpleRating from "../../components/AvaliationStars";

const images = [
    {
        original: mock,
        thumbnail: mock,
    },
    {
        original: selo50,
        thumbnail: selo50,
    },
    {
        original: selolitro,
        thumbnail: selolitro,
    },
];

export default function App() {
    return (
        <div className="App">
            <Header />
            <Container style={{}}>
                <Row>
                    <Col> caminho da pagina-caminho-caminho </Col>
                    <Col> </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={7}>
                        <Container>
                            <ImageGallery
                                items={images}
                                showPlayButton={false}
                                thumbnailPosition="left"
                                onBeforeSlide={false}
                                onScreenChange={false}
                            />
                        </Container>
                    </Col>
                    <Col sm={5} style={{ border: "1px solid black" }}>
                        <Row className="text-center">
                            <h4>Super Pós Obra 5 Litros - Remove Sujidades</h4>
                            <p>REF: 14543183</p>
                            <h4> Rating Stars</h4>
                            {/* <SimpleRating /> */}
                            <hr />
                            <h1>Valores</h1>
                            <Button style={{ width: "5cm" }}>Comprar</Button>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col
                        className="text-center"
                        style={{
                            justifyContent: "space-around",
                        }}
                    >
                        <Button
                            variant="outline-primary"
                            style={{ width: 200, height: 100 }}
                        >
                            O que é
                        </Button>{" "}
                        <Button
                            variant="outline-primary"
                            style={{ width: 200, height: 100 }}
                        >
                            Beneficios do pós obra
                        </Button>{" "}
                        <Button
                            variant="outline-primary"
                            style={{ width: 200, height: 100 }}
                        >
                            Como usar?
                        </Button>{" "}
                        <Button
                            variant="outline-primary"
                            style={{ width: 200, height: 100 }}
                        >
                            Descrição
                        </Button>{" "}
                        <Button
                            variant="outline-primary"
                            style={{ width: 200, height: 100 }}
                        >
                            Quem é a policlean Oirad?
                        </Button>{" "}
                    </Col>
                </Row>
                <br />
            </Container>
            <Container>
                <Row className="imgbg">
                    <img id="obj1" src={mockcapa} />
                    <Col className="bg1" style={{ width: "50%" }}>
                        <br />
                        <br />
                        <h3>O que é?</h3>
                        <br />
                        <label> Detergente desincrustante pós obra</label>
                        <br />
                        <label htmlFor="">
                            Indicado para limpezapesada das sujidades do pós
                            obra, principalmente de residuos como excesso de
                            rejunte, argamassa, cimento, gesso, terra e
                            respingos de tinta.
                        </label>
                        <br />
                        <br />
                        <h3>Indicações de uso</h3>
                        <br />
                        <label htmlFor="">
                            ideal para o em superficies lavaveis e em pisos de
                            porcelanato, ceramicos
                            ,ctto/lajotas,cimenticios,granito,granilite,pastilhas,
                            azuleijos, antiderrapantes,e pedras
                            porosas,equipamentos como betoneirase tambem
                            materiais usados em reforma ou
                        </label>
                        <br />
                        <br />
                        <h3>Tipos de superficies que podem ser tratadas:</h3>
                        <br />
                        <label htmlFor="">
                            ideal para o em superficies lavaveis e em pisos de
                            porcelanato, ceramicos
                            ,ctto/lajotas,cimenticios,granito,granilite,pastilhas,
                            azuleijos, antiderrapantes,e pedras
                            porosas,equipamentos como betoneirase tambem
                            materiais usados em reforma ou
                        </label>
                        <br />
                    </Col>

                    <Col className="bg2"></Col>
                </Row>
            </Container>
        </div>
    );
}
