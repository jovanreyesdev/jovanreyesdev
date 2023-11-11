import React from 'react';

import Tag from '@/components/Tag';
import styles from '@/styles/sections/Resume.module.scss';

const EXPERIENCES = [
  {
    title: 'Shopify Developer',
    company: 'NEON eCommerce Packaging',
    date: 'May 2023 - Present',
    location: 'New York, USA',
    details: "Remote · Full Time",
    responsibilities: [
      'Planning & Ideations',
      'Development and maintenance',
      'Automations',
      'SEO Support',
      'Creating code guides and documentations'
    ],
    tags: [],
  },
  {
    title: 'Full-stack Developer',
    company: '1800Accountant',
    date: 'Jun 2020 - May 2023',
    location: 'New York, USA',
    details: "Remote · Full Time",
    responsibilities: [
      'Development and Maintenance',
      'Keep software project up to date with latest technology trends',
      'Participate in daily stand-up meetings',
      'Provide guidance and support to development team members',
      'Creating code guides and documentations',
      'CI Maintenance'
    ],
    tags: [],
  },
  {
    title: 'Full-stack Developer',
    company: 'Smartgroup Enterprises',
    date: 'Jan 2019 - Jun 2020',
    location: 'Sydney, Australia',
    details: "Onsite · Full Time",
    responsibilities: [
      'Web Development and Maintenance',
      'Automations',
      'CI Maintenance',
      'SEO Support'
    ],
    tags: [],
  },
  {
    title: 'Web Developer',
    company: 'Lear Corporation',
    date: 'Sep 2017 - Jan 2019',
    location: 'MEPZ II, Cebu',
    details: "Onsite · Contract",
    responsibilities: [
      'Front End Development and Maintenance',
      'Back End Development',
      'Technical support'
    ],
    tags: [],
  },
]

function Resume() {
  return (
    <section id="resume" className={styles.resume_section}>
      <div className="container">
        <div className="flex flex-col xl:flex-row">
          <h2 className="subheading">Resume</h2>
          <div className={styles.content_area}>
            {
              EXPERIENCES.map((exp) => (
                <div className={styles.experience_box}>
                  <div className={styles.exp_title}>{exp.title}</div>
                  <div className={styles.exp_details}>
                    <div className="flex justify-between mb-5">
                      <div>
                        <span className="font-bold">{exp.company}</span>
                      </div>
                      <div className="hidden xl:block">
                        <small>{exp.date}</small>
                      </div>
                    </div>
                    <div>
                      <small>{exp.details}</small>
                    </div>
                    <div>
                      <ul className={styles.responsibilities}>
                        {
                          exp.responsibilities.map((r) => (
                            <li>
                              <small>{r}</small>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;