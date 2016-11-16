import {Page, NavController, NavParams} from 'ionic/ionic';
import {FormBuilder, Validators} from 'angular2/common';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Page({
  templateUrl: 'build/pages/secondpage/secondpage.html',
  pipes: [TranslatePipe]
})
export class SecondPage {
  constructor(fb: FormBuilder,nav: NavController, navParams: NavParams, translate: TranslateService) {
	
	this.nav = nav;
	this.selectedItem = navParams.get('item');
	
	this.model = this.selectedItem;
	this.translate = translate;
  },
  
	doSubmit: function() {
		 this.nav.pop();
		event.preventDefault();
	}
}
