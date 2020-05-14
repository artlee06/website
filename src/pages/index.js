import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";

import LandingGraphic from "components/sections/LandingGraphic";
import AboutSection from "components/sections/AboutSection";
import SkillsetsSection from "../components/sections/SkillsetsSection";
import ExperienceSection from "../components/sections/ExperienceSection";

import HeroTypography from "components/_ui/HeroTypography";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";


const Section = styled("div")`
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-top: 6em;
        margin-bottom: 3em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const RenderBody = ({ home, projects, meta }) => (
    <>
        <Helmet
            title={meta.title}
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
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
        <div id="home">
            <LandingGraphic cvUrl={home.cv.url} githubURL={home.github.url} behanceURL={home.behance.url} aboutText={RichText.asText(home.aboutmebody)}/>
            <Section>
                <AboutSection imageURL={home.aboutmepicture.url} text={RichText.asText(home.aboutmebody)} />
            </Section>
        </div>
        <Section id="skillsets">
            <HeroTypography title="Skillsets" weight={600} type="one"/>
            <SkillsetsSection
                designerDescription={home.designerdescription}
                skillsDescription={home.skillsdescription}
                toolsDescription={home.toolsdescription}
                devDescription={home.developerdescription}
                frameworksDes={home.frameworksdescription}
                langDescription={home.languagesdescription}
            />
        </Section>
        <Section id="experience">
            <HeroTypography 
                title="Experience" 
                weight={600}
                type="one" 
                lineOne="Experience" 
                lineTwo="/ Education"
            />
            <ExperienceSection 
                experienceDescription={home.experiencedescription}
                educationDescription={home.educationdescription}
            />
        </Section>
        <Section id="projects">
            <HeroTypography 
                title="Latest Projects" 
                weight={600} 
                type="two" 
                lineOne="Latest" 
                lineTwo="Projects"
            />
        </Section>
            <Section>
            {projects.map((project, i) => (
                <ProjectCard
                    key={i}
                    category={project.node.project_category}
                    title={project.node.project_title}
                    description={project.node.project_preview_description}
                    thumbnail={project.node.project_preview_thumbnail}
                    uid={project.node._meta.uid}
                />
            ))}
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned 
    const doc = data.prismic.allHomepagev2s.edges.slice(0, 1).pop();
    const projects = data.prismic.allProjects.edges.reverse();
    const meta = data.site.siteMetadata;

    if (!doc || !projects) return null;

    return (
        <Layout cvUrl={doc.node.cv.url}>
            <RenderBody home={doc.node} projects={projects} meta={meta}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allHomepagev2s {
                edges {
                  node {
                    aboutmebody
                    designerdescription
                    developerdescription
                    educationdescription
                    aboutmepicture
                    behance {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    cv {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    github {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    email {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    experiencedescription
                    frameworksdescription
                    languagesdescription
                    skillsdescription
                    toolsdescription
                  }
                }
            }
            allProjects {
                edges {
                    node {
                        project_title
                        project_preview_description
                        project_preview_thumbnail
                        project_category
                        project_post_date
                        _meta {
                            uid
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