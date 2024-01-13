import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Updating the database with your notes.");

  // This statement opens the connection with the jate database defined beginning on line 3.
  const jateDb = await openDB('jate', 1);

  // Read and write permissions are being given to the transaction to allow new data to be written.
  const transact = jateDb.transaction('jate', 'readwrite');

  // The object store needs to be opened to allow the transaction.
  const store = transact.objectStore('jate');

  // The add method is being used to write the content passed to the application into the database.
  const request = store.add({ note: content });

  // We await the successful addition of the data to the local database.
  const result = await request;

  console.log('The data has been written to the jateDb', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.log('Retrieving notes from the database');

  // The connection with the local jate database is opened just as above.
  const jateDb = await openDB('jate', 1);

  // This transaction only requires read permissions to retrieve the data.
  const transact = jateDb.transaction('jate', 'readonly');

  // Opens the object store just as above.
  const store = transact.objectStore('jate');

  // We use the getAll() method to retrieve all notes from the local database.
  const request = store.getAll();

  // Confirmation of the transaction is required.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
