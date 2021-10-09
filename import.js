const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');


// JSON To Firestore
const jsonToFirestore = async () => {
    try {
      console.log('Initialzing Firebase');
      await firestoreService.initializeApp(serviceAccount, process.env.REACT_APP_DATABASE_URL);
      console.log('Firebase Initialized');
  
      await firestoreService.restore('./plantsList.json');
      console.log('Upload Success');
    }
    catch (error) {
      console.log(error);
    }
  };

  //uncomment line below to load initial JSON data without inventory to DB
  // jsonToFirestore();