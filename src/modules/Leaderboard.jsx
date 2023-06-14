import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsie2Am9L2hYOKKSntLqLhYLq5COhxIao',
  authDomain: 'where-s-waldo-14a4d.firebaseapp.com',
  databaseURL:
    'https://where-s-waldo-14a4d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'where-s-waldo-14a4d',
  storageBucket: 'where-s-waldo-14a4d.appspot.com',
  messagingSenderId: '188095861154',
  appId: '1:188095861154:web:c4e08b2bee75b640cee2fb',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Leaderboard = ({ leaderboardData, setLeaderboardData }) => {
  const fetchLeaderboard = async () => {
    const level1Query = query(
      collection(db, 'leaderboard-level1'),
      orderBy('score', 'desc')
    );
    const level2Query = query(
      collection(db, 'leaderboard-level2'),
      orderBy('score', 'desc')
    );
    const level3Query = query(
      collection(db, 'leaderboard-level3'),
      orderBy('score', 'desc')
    );
    const level4Query = query(
      collection(db, 'leaderboard-level4'),
      orderBy('score', 'desc')
    );

    const [level1Snapshot, level2Snapshot, level3Snapshot, level4Snapshot] =
      await Promise.all([
        getDocs(level1Query),
        getDocs(level2Query),
        getDocs(level3Query),
        getDocs(level4Query),
      ]);

    const level1Data = level1Snapshot.docs.map((doc) => doc.data());
    const level2Data = level2Snapshot.docs.map((doc) => doc.data());
    const level3Data = level3Snapshot.docs.map((doc) => doc.data());
    const level4Data = level4Snapshot.docs.map((doc) => doc.data());

    setLeaderboardData({
      level1: level1Data,
      level2: level2Data,
      level3: level3Data,
      level4: level4Data,
    });
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        <li>
          <h3>Level 1</h3>
          {leaderboardData.level1.length > 0 ? (
            <ul>
              {leaderboardData.level1.map((entry, index) => (
                <li key={index}>
                  {entry.name} - {entry.score}
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores yet</p>
          )}
        </li>
        <li>
          <h3>Level 2</h3>
          {leaderboardData.level2.length > 0 ? (
            <ul>
              {leaderboardData.level2.map((entry, index) => (
                <li key={index}>
                  {entry.name} - {entry.score}
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores yet</p>
          )}
        </li>
        <li>
          <h3>Level 3</h3>
          {leaderboardData.level3.length > 0 ? (
            <ul>
              {leaderboardData.level3.map((entry, index) => (
                <li key={index}>
                  {entry.name} - {entry.score}
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores yet</p>
          )}
        </li>
        <li>
          <h3>Level 4</h3>
          {leaderboardData.level4.length > 0 ? (
            <ul>
              {leaderboardData.level4.map((entry, index) => (
                <li key={index}>
                  {entry.name} - {entry.score}
                </li>
              ))}
            </ul>
          ) : (
            <p>No scores yet</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Leaderboard;
