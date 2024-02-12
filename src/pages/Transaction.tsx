import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { ethers } from "ethers";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "@/config/firebase.config";

const FormSchema = z.object({
  Amount: z.coerce
    .number()
    .positive()
    .min(0, {
      message: "Amount must be minimum 0.",
    })
    .max(10000, { message: "Maximum amount is 10,000" }),
  Wallet_Address: z.string().refine((value) => ethers.isAddress(value), {
    message:
      "Provided address is invalid. Please insure you have typed correctly.",
  }),
});

const Transaction = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
const collectionRef = collection(dataBase, "wallet");
const onSubmit = async(data: z.infer<typeof FormSchema>)=> {

  try {
    await addDoc(collectionRef,{
      Wallet_Address:data.Wallet_Address,
      Amount: data.Amount,
     
  
    })
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    
  } catch (error) {
    console.log(error,"cannot submit");
    
  }

  }

  return (
    <div className="mt-20 flex items-center justify-center shadow-md shadow-slate-500 rounded-md p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="Wallet_Address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wallet_Address</FormLabel>
                <FormControl>
                  <Input placeholder="enter eth address" {...field} />
                </FormControl>
                <FormDescription>Address to transfer money.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="add amount" {...field} />
                </FormControl>
                <FormDescription>Add amount to transfer.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Transaction;
