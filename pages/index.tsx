
import React, { useState } from 'react';

export default function Home() {
  const [money, setMoney] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(20);
  const [upgradeMultiplier, setUpgradeMultiplier] = useState(1);
  const [upgradesBought, setUpgradesBought] = useState(0);


  const handleHit = () => {
    setMoney(prevMoney => prevMoney + upgradeMultiplier);
    if ((upgradesBought + 1) % 5 === 0) {
      setMoney(prevMoney => prevMoney * 2);
    }
  };

  const buyUpgrade = () => {
    if (money >= upgradeCost) {
      setMoney(prevMoney => prevMoney - upgradeCost);
      setUpgradesBought(prevBought => prevBought + 1);
      setUpgradeMultiplier(prevMultiplier => prevMultiplier + 1);
    }
  };

  return (
   <>
    <div>
    <h1>Money: {money}</h1>
    <button onClick={handleHit}>Hit</button>
    {money >= upgradeCost && <button onClick={buyUpgrade}>Buy upgrade</button>}
    <p>Number of upgrades bought: {upgradesBought}</p>
    <p>Next upgrade at: {upgradeCost}</p>
  </div>
   </>
  );
}
