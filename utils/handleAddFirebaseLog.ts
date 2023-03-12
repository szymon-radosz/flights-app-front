import { logEvent } from 'firebase/analytics';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { analytics } from './../firebase';

export default function handleAddFirebaseLog(eventName: string, params?: any) {
  // console.log(['handleAddFirebaseLog', eventName, params, analytics]);
  if (process?.env?.NODE_ENV === 'production') {
    console.log(['handleAddFirebaseLog', eventName, params, analytics]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    logEvent(analytics, eventName, params);
  }
  return;
}
