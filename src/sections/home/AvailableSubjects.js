import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)``;

const ContentWidget = styled(Box)`
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  background-color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  min-width: 100%;
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;

  @media ${device.xl} {
    width: 360px;
    min-width: 360px;
  }
  @media ${device.md} {
    min-height: 100%;
  }
`;

const ContentWidgetIcon = styled(Box)`
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ContentCard = ({ children = "" }) => {
  return (
    <ContentWidget>
      <ContentWidgetIcon>
        <i className="fas fa-check"></i>
      </ContentWidgetIcon>
      <div className="d-flex align-items-center">
        <Title variant="card" mb={0}>
          {children}
        </Title>
      </div>
    </ContentWidget>
  );
};

const AvailableSubjects = () => {
  return (
    <>
      {/* <!-- AvailableSubjects section --> */}
      <SectionStyled bg="#f2f2f3">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg="9">
              <div className="text-center">
                <Title>Available Subjects</Title>
                <Text>
                  Create custom landing pages with Omega that converts{" "}
                  <br className="d-none d-md-block" /> more visitors than any
                  website.
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 1
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 2.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>Subject 3.</ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 4.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 5.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 5.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 5.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 5.
              </ContentCard>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="750"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <ContentCard>
                Subject 5.
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default AvailableSubjects;
