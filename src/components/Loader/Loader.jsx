import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Loader.css';

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      <div className="loaderContainerMobile">
        <PropagateLoader color="#3bb961" css={override} size={40} />
      </div>
      <div className="loaderContainer">
        <PropagateLoader color="#3bb961" css={override} size={40} />
      </div>
    </>
  );
};

export default Loader;
