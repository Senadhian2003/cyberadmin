import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { db } from '../firebase.js';
import { ref, get, onValue } from 'firebase/database';

function Count() {
  const [count, setCount] = useState({
    blitzByte: 0,
    conTacTic: 0,
    paperPinnacle: 0,
    pixelPlayground: 0,
    lexiCharm: 0,
    webVortex: 0,
    smirk: 0,
  });

  useEffect(() => {
    countOfusers();
  }, []);

  const countOfusers = async () => {
    const collectionRef = ref(db, 'cyber');

    try {
      const snapshot = await get(collectionRef);
      let updatedCount = {
        blitzByte: 0,
        conTacTic: 0,
        paperPinnacle: 0,
        pixelPlayground: 0,
        lexiCharm: 0,
        webVortex: 0,
        smirk: 0,
      };

      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();

        // Increment the count based on conditions
        if (userData.conTacTic !== 0) {
          updatedCount.conTacTic += 1;
        }

        if (userData.lexiCharm !== 0) {
          updatedCount.lexiCharm += 1;
        }

        if (userData.paperPinnacle !== 0) {
          updatedCount.paperPinnacle += 1;
        }

        if (userData.pixelPlayground !== 0) {
          updatedCount.pixelPlayground += 1;
        }

        if (userData.smirk !== 0) {
          updatedCount.smirk += 1;
        }

        if (userData.webVortex !== 0) {
          updatedCount.webVortex += 1;
        }

        if (userData.blitzbyte !== 0) {
          updatedCount.blitzByte += 1;
        }
      });

      setCount(updatedCount);
    } catch (error) {
      console.error('Error fetching data from Firebase: ', error);
    }
  };

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Count of Entries</h1>
      <Table striped bordered hover className='certtb'>
        <thead>
          <tr>
            <th>BlitzByte</th>
            <th>Paper Pinacle</th>
            <th>Pixel PlayGround</th>
            <th>Web Vortex</th>
            <th>Lexi charm</th>
            <th>Con-Tac-Tix</th>
            <th>Smirk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count.blitzByte}</td>
            <td>{count.paperPinnacle}</td>
            <td>{count.pixelPlayground}</td>
            <td>{count.webVortex}</td>
            <td>{count.lexiCharm}</td>
            <td>{count.conTacTic}</td>
            <td>{count.smirk}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Count;
