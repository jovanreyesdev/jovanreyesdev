import React from 'react';

import styles from '@/styles/sections/Resume.module.scss';

const experiences = [
  {
    title: 'FullStack Dev',
    company: '1800Accountant',
    description: [
      'Website Development & Maintenance',
      'Design-to-Code Translation',
      'Agile Collaboration',
      'End-to-End, AB & Functional Testing',
      'Team Support & Guidance',
      'Documentation',
    ],
  },
  {
    title: 'FullStack Dev',
    company: 'Smartgroup Enterprisee',
    description: [
      'Website Development & Maintenance',
      'Design-to-Code Translation',
      'Custom Tool Development',
      'CI Maintenannce',
      'Project Lifecycle Management',
      'Functional Testing',
      'Marketing Collaboration'
    ],
  },
  {
    title: 'Web Developer',
    company: 'Lear Corporation Cebu',
    description: [
      'Web Application Development',
      'Collaborative Solution Design',
      'Database Maintenance',
      'Technical Support & Troubleshooting',
      'Functional Testing',
    ],
  },
];

function ExperienceBranch({
  reverse = false,
  title = '',
  company = '',
  description,
}) {
  return (
    <div className={`${styles.expBranch} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.title}>
        <div className="min-w-[300px] text-3xl xl:text-4xl font-bold md:mb-5">
          <span>{title}</span>
        </div>
        <div className="text-2xl">{company}</div>
      </div>
      <div className={styles.separator}>
        <div className={styles.ball}>
          <div className={styles.inner} />
        </div>
        <div className={styles.line} />
      </div>
      <div className={`${styles.details}`}>
        <ol className="list-disc">
          {description.map((d) => (
            <li>{d}</li>
          ))}
        </ol>
      </div>
    </div>
  )
};
 
function Resume() {
  return (
    <section className={`${styles.resume} mb-20`}>
      <div className="container mb-0 py-20">
        <div className="mb-5">
          <h2 className={`subheading text-center ${styles.subheading}`}>Resume</h2>
        </div>
        <div className="mb-20">
          <p className="typography text-center">Roadmap of my work experience</p>
        </div>
        <div className="experience-tree">
          {
            experiences.map((exp, i) => (
              <ExperienceBranch {...exp} reverse={i % 2 === 0} />
              )
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Resume;