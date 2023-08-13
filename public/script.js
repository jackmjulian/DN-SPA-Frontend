// Imports the contents of "section-content-manager.js".
import * as SectionContentManager from './section-content-manager.js';

// Imports the jobs for indexedDB
import jobs from '../data.json' assert { type: 'json' };
console.log(jobs);

// Set the hash to default
if (!location.hash) {
  location.hash = '#main-view-design';
}

// Update Section on Load
UpdateSection();

// Update Section Contents when hash is changed.
window.addEventListener('hashchange', () => {
  UpdateSection();
});

// Update Section calls update section contents in the "section-content-manager" script.
function UpdateSection() {
  var sectionName = location.hash.substring(1);
  console.log(sectionName);
  SectionContentManager.UpdateSectionContent(sectionName);
}

// IndexedDB
const dbName = 'jobs_database';

const request = indexedDB.open(dbName, 1);

request.onerror = function (event) {
  console.error('An error occurred with IndexedDB');
  console.error(event);
};

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  const objectStore = db.createObjectStore('jobs', { keyPath: 'id' });
  objectStore.createIndex('company', 'company', { unique: false });
  objectStore.createIndex('role', 'role', { unique: false });
  objectStore.createIndex('industry', 'industry', { unique: false });
  objectStore.createIndex('func', 'func', { unique: false });
  objectStore.createIndex('title', 'title', { unique: false });
  objectStore.createIndex('category', 'category', { unique: false });
  objectStore.createIndex('location', 'location', { unique: false });
  objectStore.createIndex('salary', 'salary', { unique: false });
  objectStore.createIndex('experience', 'experience', { unique: false });
  objectStore.createIndex('date', 'date', { unique: false });

  objectStore.transaction.oncomplete = (event) => {
    const jobObjectStore = db
      .transaction('jobs', 'readwrite')
      .objectStore('jobs');
    jobs.forEach((job) => {
      jobObjectStore.add(job);
    });
  };
};
