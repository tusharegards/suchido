import { useForm } from "react-hook-form";
import { signInSchema, signUpSchema } from "../../lib/schema.ts";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";

type SignUpUserData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const form = useForm<SignUpUserData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onHandleSubmit = (data: SignUpUserData) => {
    console.log(data);
  };

  return (
    <div className="w-2xl  flex flex-col items-center justify-center bg-muted/40 p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-2xl font-bold mb-4 text-center">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Please enter your details to create an account.
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <CardFooter className="pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?
            </p>
            <Link to="/auth/sign-in" className="text-sm hover:underline ml-1">
              Sign In
            </Link>
          </CardFooter>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
