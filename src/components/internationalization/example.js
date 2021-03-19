import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { Card, Container } from 'semantic-ui-react';
import i18n from '../../i18n';

export class Example extends Component {
    render() {
        const { t } = this.props;
        
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
          }
        return (
            <div>
      <button onClick={() => changeLanguage('guj')}>Gujarati</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hin')}>Hindi</button>
      
      <h1>{t('My name is Dhairya')}</h1>
    </div>
        )
    }
}

export default withTranslation()(Example)
