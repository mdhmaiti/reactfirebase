import { dataBase } from "@/config/firebase.config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";


type WalletData = {
  Wallet_Address: string;
  Amount: number;
}

const Data = () => {
  const collectionRef = collection(dataBase, "wallet");
  const[List,setList] = useState<WalletData[]>([]);

  const getWalletData = async () => {
    try {
      const data = await getDocs(collectionRef);
      const filteredData: WalletData[] = data.docs.map((doc) => {
    
        const docData = doc.data() as { " Wallet_Address": string; Amount: number };
      
     
        const walletAddress = docData[" Wallet_Address"] || 'Address not available';
        console.log('doc data',docData);
        console.log(walletAddress);
        return {
          Wallet_Address: walletAddress,
          Amount: docData.Amount,
        };
      });
  
     
      
      setList(filteredData)
    } catch (error) {
      console.log(error, " there is error while getting the data");
    }
  };

  useEffect(() => {
    getWalletData();
  }, []);

  return  <div>
  {List.map((item, index) => {
 // Log item object to inspect data structure
 console.log("0xC67c60cD6d82Fcb2fC6a9a58eA62F80443E32683")
  return (
    <div key={index}>
      <p>Wallet Address: {item.Wallet_Address || 'Address not available'}</p>
      <p>Amount: {item.Amount}</p>
    </div>
  );
})}
</div>;
};

export default Data;
