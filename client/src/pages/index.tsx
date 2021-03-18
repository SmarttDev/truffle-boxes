import React, { useContext } from "react";
import Web3Context from "context/Web3Context";

export default function Home() {
  const {
    web3,
    accounts,
    contract,
    storageValue,
    updateStorageValue,
  } = useContext(Web3Context);

  const submitForm = async (e) => {
    e.preventDefault();

    // Stores a given value, 5 by default.
    await contract.methods
      .set(e.target.storedValue.value)
      .send({ from: accounts[0] }, async (error, tx) => {
        if (tx) {
          await web3.eth.getTransactionReceipt(tx, async (error, receipt) => {
            if (receipt.status) {
              // Get the value from the contract to prove it worked.
              const response = await contract.methods.get().call();

              // Update state with the result.
              updateStorageValue(response);
              e.target.reset();
            }
          });
        }
      });
  };

  return (
    <div>
      {web3 ? (
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8">
            <span className="block xl:inline">Welcome to NextJS </span>
            <span className="block text-indigo-600 xl:inline">
              with Truffle boxes
            </span>
          </h1>
          <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            <p>
              Your Truffle Box is installed and ready.
              <br />
              <br />
              Below you can test the smart contract SimpleStorage.sol
            </p>
            <p className="mt-4">
              If your contracts compiled and migrated successfully, try changing
              the value stored.
            </p>
            <p className="mt-10">The stored value is: {storageValue}</p>
          </div>
          <form className="mt-6" onSubmit={submitForm}>
            <input
              id="storedValue"
              type="text"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Change the value"
              required
            />
            <button
              type="submit"
              className="px-8 rounded-r-lg bg-indigo-600 text-white font-bold p-4 uppercase border-indigo-600 border-t border-b border-r"
            >
              Valider
            </button>
          </form>
        </div>
      ) : (
        <div>Loading Web3, accounts, and contract...</div>
      )}
    </div>
  );
}
