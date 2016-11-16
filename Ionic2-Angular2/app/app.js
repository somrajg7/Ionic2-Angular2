import {App, IonicApp, Platform} from 'ionic/ionic';
import {FirstPage} from './pages/firstpage/firstpage';
import {SecondPage} from './pages/secondpage/secondpage';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate'; 

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [TranslateService],
  pipes: [TranslatePipe]
})
class MyApp {
  constructor(app: IonicApp, platform: Platform,translate: TranslateService) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();
	this.translate = translate;    
 
    this.initializeTranslateServiceConfig();

    // set our app's pages
    this.pages = [
      { title: 'Contacts', component: FirstPage },
	  { title: 'EditForm', component: SecondPage }
    ];

    // make FirstPage the root (or first) page
    this.rootPage = FirstPage;
  }
  
  initializeTranslateServiceConfig() {
    var prefix = 'assets/i18n/';
    var suffix = '.json';
    this.translate.useStaticFilesLoader(prefix, suffix);
 
    var userLang = navigator.language.split('-')[0];
    userLang = /(de|en|hr)/gi.test(userLang) ? userLang : 'en';
 
    this.translate.setDefaultLang('en');
 
    this.translate.use(userLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
