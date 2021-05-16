import React from "react";
import {copyright} from '../../constants'
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="page-footer font-small">
      <div className="footer-copyright text-center py-3">
        {copyright}
      </div>
    </footer>
  );
};