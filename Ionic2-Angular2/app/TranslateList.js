import {Translate} from 'ionic/ionic';

export class TranslateList {

  // Inject the Translate service
  constructor(trans: Translate) {

    // Example German string mapping
    trans.translations('en', {
      'Name': 'nn'
    });

    console.log(this.trans.translate('Location')); // Shows 'Location'
    console.log(this.trans.translate('Location', 'en')); // Shows 'lage'

    // Change the active language for the entire app
    this.trans.setLanguage('en');
    console.log(this.trans.translate('Location')); // Shows 'lage'
  }
  
  
