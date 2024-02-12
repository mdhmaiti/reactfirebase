import { dataBase } from "@/config/firebase.config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

type WalletData = {
  Wallet_Address: string;
  Amount: number;
};

const Data = () => {
  const collectionRef = collection(dataBase, "wallet");
  const [List, setList] = useState<WalletData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  const getWalletData = async () => {
    try {
      const data = await getDocs(collectionRef);
      const filteredData: WalletData[] = data.docs.map((doc) => {
        const docData = doc.data();
        console.log("docData:", docData);

        const walletAddress = docData.Wallet_Address || "Address not available";

        return {
          Wallet_Address: walletAddress,
          Amount: docData.Amount,
        };
      });

      setList(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.log(error, " there is error while getting the data");
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    getWalletData();
  }, []);


  if (isLoading) {
    return <div className="glow text-3xl mt-20">Loading...</div>;
  }

  return (
    <div className="mt-20 max-h-screen overflow-auto">
      {List.map((item, index) => {
        return (
     
          <div key={index} className="flex justify-center my-8 ">
            <div className="shadow-md shadow-slate-400 rounded-md overflow-hidden w-full md:w-5/6 backdrop-blur-2xl ">
              <div className="p-5 flex flex-col md:flex-row justify-between gap-3">
                <p className="font-semibold overflow-auto glow ">Wallet Address:- {item.Wallet_Address || "Address not available"}</p>
                <p className="font-semibold glow ">Amount:- {item.Amount}</p>
              </div>
            </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Data;
