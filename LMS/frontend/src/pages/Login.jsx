import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerisLoading, isSuccess: registerisSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginisLoading, isSuccess: loginisSuccess }] = useLoginUserMutation();
  const navigate = useNavigate();

  const changeHandleInput = (e, type) => {
    const { name, value } = e.target;

    if (type === "signup") {
      setSignupData({ ...signupData, [name]: value });
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };

  const handleData = async (type) => {
    const data = type === "signup" ? signupData : inputData;
    const action = type === "signup" ? registerUser : loginUser;
    await action(data);
  };

  useEffect(() => {

    if (registerisSuccess && registerData) {
      toast.success(registerData.message || "Signup Successful.");
      navigate("/");
    }

    if (loginisSuccess && loginData) {
      toast.success(loginData.message || "Login Successful.");
      navigate("/");
    }


  }, [loginisLoading, registerisLoading, loginData, registerData, loginError, registerError])

  return (
    <div className="flex items-center w-full justify-center mt-20">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create your account here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  value={signupData.name}
                  onChange={(e) => changeHandleInput(e, "signup")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => changeHandleInput(e, "signup")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={signupData.password}
                  onChange={(e) => changeHandleInput(e, "signup")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleData("signup")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login to your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={inputData.email}
                  onChange={(e) => changeHandleInput(e, "login")}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  name="password"
                  type="password"
                  value={inputData.password}
                  onChange={(e) => changeHandleInput(e, "login")}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleData("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
