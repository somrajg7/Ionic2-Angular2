import {Page, NavController, NavParams, Translate} from 'ionic/ionic';
import {SecondPage} from '../secondpage/secondpage';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Page({
  templateUrl: 'build/pages/firstpage/firstpage.html',
  pipes: [TranslatePipe]
})
export class FirstPage {
  constructor(nav: NavController, navParams: NavParams, translate: TranslateService) {
	
	this.nav = nav;
    this.selectedItem = navParams.get('item');
	
	this.model = {};
	this.model.id = 18;
    this.model.name = 'Hilton Memphis';
    this.model.city = 'Memphis';
    this.model.address = '939 Ridge Lake Blvd';
    this.model.postalCode = '38120';
    this.model.state = 'TN';
    this.model.country = 'US';
    this.model.phone = '901-762-7496';
	
	this.translate = translate;
  },
  
	doEdit: function() {
		 this.nav.push(SecondPage, {
			item: this.model
		});
		event.preventDefault();
	}
}
