import React, { Fragment } from 'react';
import Icon from '@mdi/react';
import {
  mdiInstagram,
  mdiCameraOutline,
  mdiDivingSnorkel,
  mdiCoffeeOutline,
  mdiGamepadSquareOutline,
  mdiHeadphones,
} from '@mdi/js';

import Gallery from 'components/Gallery';

import './index.scss';

function Homepage() {
  return (
    <Fragment>
      <Gallery />
      <div className="biography">
        <div>
        <h1>My Biography</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
        <div className="d-flex">
          <div className="personal-details">
            <div className="subheader">Personal Details</div>
              <ul>
                <li>
                  <div className="label">Birthdate</div>
                  <span className="value">01-20-1998</span>
                </li>
                <li>
                  <div className="label">Phone</div>
                  <span className="value">09694095699</span>
                </li>
                <li>
                  <div className="label">Email</div>
                  <span className="value">jovan.reyes.dev@gmail.com</span>
                </li>
                <li>
                  <div className="label">Address</div>
                  <span className="value">Cebu, PH</span>
                </li>
              </ul>
          </div>
          <div className="interests">
          <div className="subheader">Interests</div>
          <div className="items">
            <div className="item">
              <Icon path={mdiInstagram} />
              <span className="label">
                Coding
              </span>
            </div>
            <div className="item">
              <Icon path={mdiCameraOutline} />
              <span className="label">
                Photography
              </span>
            </div>
            <div className="item">
              <Icon path={mdiDivingSnorkel} />
              <span className="label">
                Freediving
              </span>
            </div>
            <div className="item">
              <Icon path={mdiCoffeeOutline} />
              <span className="label">
                Coffee
              </span>
            </div>
            <div className="item">
              <Icon path={mdiGamepadSquareOutline} />
              <span className="label">
                Gaming
              </span>
            </div>
            <div className="item">
              <Icon path={mdiHeadphones} />
              <span className="label">
                Music
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* <div className="stats">
        <h1>My Stats</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div> */}
    </Fragment>
  );
}

export default Homepage;
