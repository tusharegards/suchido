import { SignUpUserData } from "@/routes/auth/sign-up";
import { useMutation } from "@tanstack/react-query";
import  { postData }  from "@/lib/fetch-util";

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: async (data: SignUpUserData) => postData('/auth/register', data)
    })
}