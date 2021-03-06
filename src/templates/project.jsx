import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link, graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import RoundButton from "components/_ui/RoundButton";
import Layout from "components/Layout";

const ProjectHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin-bottom: 3.5em;

    img {
        max-width: 600px;
    }
`

const ProjectTitle = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
`

const ProjectBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }

    h1 {
        font-size: 1em;
    }

    img {
        max-width: 100%;
    }

    iframe {
        width: 100% !important;
        height: auto;
    }
`

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`


const Project = ({ project, meta, cvUrl }) => {
    return (
        <>
            <Helmet
                title={`${project.project_title[0].text}`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${project.project_title[0].text}`,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: meta.author,
                    },
                    {
                        name: `twitter:title`,
                        content: meta.title,
                    },
                    {
                        name: `twitter:description`,
                        content: meta.description,
                    },
                ].concat(meta)}
            />
            <Layout cvUrl={cvUrl}>
                <ProjectTitle>
                    {RichText.render(project.project_title)}
                </ProjectTitle>
                {project.project_hero_image && (
                    <ProjectHeroContainer>
                        <img src={project.project_hero_image.url} alt="bees" />
                    </ProjectHeroContainer>
                )}
                <ProjectBody>
                    {RichText.render(project.project_description)}
                    <WorkLink to={"/#projects"}>
                        <RoundButton title="See other work" type="blue" className="Button--secondary" />
                    </WorkLink>
                </ProjectBody>
            </Layout>
            <style type="text/css">
                {`
                body {
                    margin: 0;
                }
            `}
            </style>
        </>
    )
}

export default ({ data }) => {
    const projectContent = data.prismic.allProjects.edges[0].node;
    const meta = data.site.siteMetadata;
    const cvUrl = data.prismic.allHomepagev2s.edges[0].node.cv.url
    return (
        <Project project={projectContent} meta={meta} cvUrl={cvUrl} />
    )
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProjectQuery($uid: String) {
        prismic {
            allProjects(uid: $uid) {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        project_hero_image
                        project_description
                        _meta {
                            uid
                        }
                    }
                }
            }
            allHomepagev2s {
                edges {
                    node {
                        cv {
                            ... on PRISMIC__ExternalLink {
                              _linkType
                              url
                            }
                          }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`