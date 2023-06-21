import Footer, { EVENT_NAMES } from './components/Footer';
import messages from './i18n/index';

export function setup(piralApi) {
  piralApi.mergeConfig(
    {
      LMS_BASE_URL: process.env.LMS_BASE_URL,
      LOGO_TRADEMARK_URL: (process.env.LOGO_TRADEMARK_URL || false),
    },
    'Footer Component',
  );

  piralApi.mergeMessages(messages);
  piralApi.registerExtension('openedx-footer', ()=> <Footer config={piralApi.getConfig()}/>);
}
export { messages, EVENT_NAMES };
