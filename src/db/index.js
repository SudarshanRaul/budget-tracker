if (!("indexedDB" in window)) {
  console.log("This browser doesn't support IndexedDB");
}

const DBName = "DBApp";
const TransactionObject = "transactions";
const TransactionIndex = [
  { index: "paymentMethod", unique: false },
  { index: "txnDate", unique: false },
  { index: "isEstimate", unique: false },
];
const CategoryObject = "categories";
const ItemObject = "items";
const ItemIndex = [
  { index: CategoryObject, unique: true },
  { index: "rate", unique: false },
];
let db;
const dbVersion = 1;

const dbObject = window.indexedDB.open(DBName, dbVersion);
dbObject.onerror = (error) => {
  console.error(error);
};
dbObject.onsuccess = (event) => {
  db = event.target.result;
};

function createObjectStore(objectStoreName, additionalIndex) {
  let objectStore;
  if (!db.objectStoreNames.contains(objectStoreName)) {
    objectStore = db.createObjectStore(objectStoreName, {
      keyPath: "id",
      autoIncrement: true,
    });

    objectStore.createIndex("id", "id", { unique: true });
    objectStore.createIndex(objectStoreName, objectStoreName, { unique: true });

    if (additionalIndex && additionalIndex.length > 0) {
      additionalIndex.map(({ index, unique }) =>
        objectStore.createIndex(index, index, { unique })
      );
    }
  }
}

dbObject.onupgradeneeded = (event) => {
  db = event.target.result;
  createObjectStore(TransactionObject, TransactionIndex);
  createObjectStore(CategoryObject);
  createObjectStore(ItemObject, ItemIndex);
};

export function addRecord(item) {
  const objectStore = db
    .transaction([TransactionObject], "readwrite")
    .objectStore(TransactionObject);
  objectStore.put(item);
}

export function fetchRecord(id) {
  const objectStore = db
    .transaction([TransactionObject], "readwrite")
    .objectStore(TransactionObject);
  const getRecord = objectStore.get(id);
  getRecord.onsuccess = () => {
    console.log(getRecord.result);
  };
}
