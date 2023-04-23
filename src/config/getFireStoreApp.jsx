import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDTnPZcG7jzbe-4gdB6vUxzErbKifYi5dc',
  authDomain: 'jm-store-60472.firebaseapp.com',
  projectId: 'jm-store-60472',
  storageBucket: 'jm-store-60472.appspot.com',
  messagingSenderId: '1035550648229',
  appId: '1:1035550648229:web:61238970702c3610846a4c',
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
  return app;
};
