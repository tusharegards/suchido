import { useForm } from "react-hook-form";
import { signInSchema } from "../../lib/schema.ts";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";

type SignInUserData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const form = useForm<SignInUserData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onHandleSubmit = (data: SignInUserData) => {
    console.log(data);
  };

  return (
    <div className="w-2xl  flex flex-col items-center justify-center bg-muted/40 p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-2xl font-bold mb-4 text-center">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Please enter your credentials to sign in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="div">
                    <FormLabel>Password</FormLabel>
                    <Link to="/auth/reset-password" className="text-sm hover:underline text-blue-900 float-right">
                      Forgot Password?
                    </Link>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <CardFooter className="pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?
            </p>
            <Link to="/auth/sign-up" className="text-sm hover:underline ml-1">
              Sign Up
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
