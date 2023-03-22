import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import Component from "../models/Component";
import { Gradients } from "./utils";
import CtaSection from "../components/CtaSection/CtaSection";
import CtaSectionOptions from "../components/CtaSection/CtaSectionOptions";
import CtaSectionPreview from "../components/CtaSection/CtaSectionPreview.png";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
<<<<<<< HEAD
    ['CtaSection', new Component('CtaSection', CtaSection, CtaSectionOptions, CtaSectionPreview, {link: "https://www.google.com/", word1: "See the impact of good, conversion-oriented design on your business.", word2: "Let's Work Together", gradient: Gradients.default})],
=======
    [
        'Education and Work',
        new Component(
          'Education and Work',
          EducationWorkExperience,
          EducationWorkExperienceOptions,
          EducationWorkExperiencePreview,
          {
            school1: 'School 1; Degree; Date',
            school2: 'School 2; Degree; Date',
            school3: 'School 3; Degree; Date',
            job1: 'Company 1; Title; Date',
            job2: 'Company 2; Title; Date',
            job3: 'Company 3; Title; Date',
            gradient: Gradients.default
          }
        )
    ],
    [
      'Skills',
      new Component(
        'Skills',
        Skills,
        SkillsOptions,
        SkillsPreview,
        {
          title: 'What I Do.',
          skillsList: [
            {name: "Figma", files:  "", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", files:  "", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", files:  "", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", files:  "", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", files:  "", image: "/src/components/Skills/SampleLogos/seo.png"}
          ]
        }
      )
    ]
>>>>>>> 6f2e1e92dfbb96f04722a68d6cbb5d152d122220
]);