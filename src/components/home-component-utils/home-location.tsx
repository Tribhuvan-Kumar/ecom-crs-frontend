import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  pincode: z.string().regex(/^\d{6}$/, {
    message: "Pincode must be a 6-digit number.",
  }),
});

const HomeLocation = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pincode: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      description: `Yay! Fast delivery available on this pincode - ${data.pincode}`,
    });

    form.reset();
  }
  return (
    <>
      <Card className="max-w-xs">
        <CardHeader>
          <div className="flex flex-col items-center gap-2 sm:gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className=" dark:fill-white w-16 h-16 sm:w-28 sm:h-28"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <CardTitle className="text-xs text-center">
              Your Delivery Pincode
            </CardTitle>
          </div>

          <CardDescription className="text-center text-xs sm:text-base">
            Enter your pincode to check availability and faster delivery options{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter pincode" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between gap-5 mt-5">
                <Button type="submit" className="grow">
                  Submit
                </Button>
                <Button variant="outline">Next</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeLocation;
